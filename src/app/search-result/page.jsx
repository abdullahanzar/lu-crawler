"use client";
import { createSupabaseBrowserClient } from "@/supabase/browserClient";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { findCourseKey } from "@/utils/search-helper";

const supabase = createSupabaseBrowserClient();

export default function SearchResult() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();

  const searchArray = useMemo(() => search.split(" "), [search]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: initialData, error: initialError } = await supabase
        .from("documents")
        .select("*")
        .ilike("name", `%${search}%`);
      if (initialError) {
        console.error("Error:", initialError);
        return;
      }
      const { data: approximateData, error: approximateError } = await supabase
        .from("documents")
        .select("*")
        .ilike("course", `%${findCourseKey(search.toLowerCase())}%`);
      if (approximateError) {
        console.error("Error:", approximateError);
        return;
      }

      const nameMatches = await searchIncludesAnyOf(searchArray, "name");
      const descriptionMatches = await searchIncludesAnyOf(
        searchArray,
        "description"
      );
      const courseMatches = await searchIncludesAnyOf(searchArray, "course");

      const combinedResults = [
        ...courseMatches,
        ...initialData,
        ...nameMatches,
        ...descriptionMatches,
        ...approximateData,
      ];

      const uniqueResults = Array.from(
        new Set(combinedResults.map((a) => JSON.stringify(a)))
      ).map((b) => JSON.parse(b));

      setResults(uniqueResults);
    };

    fetchData();
  }, [search, searchArray]);

  console.log(results);
  return (
    <main className="min-h-screen">
      <p className="m-10 text-3xl">Showing search results for {search}</p>
      <Grid container spacing={3} className="p-10">
        {results.map((result, index) => (
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
              <CardContent>
                <Typography variant="h5" component="div">
                  {result.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.description}
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
