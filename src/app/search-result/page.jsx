"use client";
import { createSupabaseBrowserClient } from "@/supabase/browserClient";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Loader from "@/components/general/loader";
import { capitalizeEachWord } from "@/utils/string-manipulation";
import DescriptionIcon from "@mui/icons-material/Description";
import Filter from "@/components/global/filter";

const supabase = createSupabaseBrowserClient();

export default function SearchResult() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();

  const searchArray = useMemo(() => search.split(" "), [search]);
  const [loader, setLoader] = useState(false);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const { data: initialData, error: initialError } = await supabase
        .from("documents")
        .select("*")
        .ilike("name", `%${search}%`);
      if (initialError) {
        console.error("Error:", initialError);
        return;
      }

      const nameMatches = await searchIncludesAnyOf(searchArray, "name");
      const descriptionMatches = await searchIncludesAnyOf(
        searchArray,
        "description"
      );
      const courseMatches = await searchIncludesAnyOf(searchArray, "course");
      const typeMatches = await searchIncludesAnyOf(searchArray, "type");

      const combinedResults = [
        ...courseMatches,
        ...initialData,
        ...nameMatches,
        ...descriptionMatches,
        ...typeMatches,
      ];

      const uniqueResults = Array.from(
        new Set(combinedResults.map((a) => JSON.stringify(a)))
      ).map((b) => JSON.parse(b));

      setResults(uniqueResults);
      setFilteredResults(uniqueResults);
      setLoader(false);
    };

    fetchData();
  }, [search, searchArray]);

  return (
    <main className="min-h-screen">
      <p className="m-10 mb-2 text-3xl">Showing search results for {search}</p>
      {!loader && results.length != 0 && (
        <p className="ml-10 mb-2 text-xl">
          LU Crawler found {results.length} results for this query.
        </p>
      )}
      {!loader && results.length != 0 && (
        <Filter
          items={filteredResults}
          setItems={setFilteredResults}
          allItems={results}
        />
      )}
      {loader && <Loader />}
      {loader === false && results.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[30rem] ">
          <p className="m-12 text-2xl">
            We are really sorry. The Crawler couldn&apos;t find results for
            this.
          </p>
        </div>
      )}
      {loader === false &&
        filteredResults.length === 0 &&
        results.length != 0 && (
          <div className="flex flex-col items-center justify-center h-[30rem] ">
            <p className="m-12 text-2xl">
              We are really sorry. The Crawler couldn&apos;t find any search
              results matching the filter for now.
            </p>
          </div>
        )}
      <Grid container spacing={3} className="p-10">
        {filteredResults.map((result, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{ cursor: "pointer" }}
              className="hover:bg-[#D5C8C8] hover:text-[white]"
              onClick={() => {
                // Assuming `result` is the data you want to pass
                const encodedResult = encodeURIComponent(
                  JSON.stringify(result)
                );
                sessionStorage.setItem("entityDetails", encodedResult);
                router.push(`/entity`);
              }}
            >
              <CardHeader
                title={
                  <Stack
                    direction="row"
                    spacing={1}
                    flex
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <DescriptionIcon />
                    <Typography>{capitalizeEachWord(result.type)}</Typography>
                  </Stack>
                }
                className="bg-black text-white"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {capitalizeEachWord(result.name)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {capitalizeEachWord(result.description)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {capitalizeEachWord(result.type)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.course.toUpperCase()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

async function searchIncludesAnyOf(terms, column) {
  // Construct the or query string
  const orQuery = terms.map((term) => `${column}.ilike.%${term}%`).join(",");

  // Perform the search
  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .or(orQuery);

  if (error) {
    console.error("Error:", error);
    return [];
  }

  return data;
}
