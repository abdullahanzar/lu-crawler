"use client";
import { createSupabaseBrowserClient } from "@/supabase/browserClient";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Stack,
} from "@mui/material";
import { capitalizeEachWord } from "@/utils/string-manipulation";
import Loader from "@/components/general/loader";
import DescriptionIcon from "@mui/icons-material/Description";
import { useRouter } from "next/navigation";
import Filter from "@/components/global/filter";

const supabase = createSupabaseBrowserClient();

export default function QuestionPaperClient() {
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setLoader(true);
      const { data, error } = await supabase
        .from("documents")
        .select("*")
        .eq("type", "question paper");
      setResults(data);
      setFilteredResults(data);
      setLoader(false);
    })();
  }, []);
  return (
    <div>
      <p className="m-10 mb-5 text-3xl">Question Papers</p>
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
            We are really sorry. The Crawler couldn&apos;t find any question
            papers for now.
          </p>
        </div>
      )}
      {loader === false &&
        filteredResults.length === 0 &&
        results.length != 0 && (
          <div className="flex flex-col items-center justify-center h-[30rem] ">
            <p className="m-12 text-2xl">
              We are really sorry. The Crawler couldn&apos;t find any question
              papers matching the filter for now.
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
                  {result.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {capitalizeEachWord(result.type)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.course.toUpperCase() +
                    " Semester " +
                    String(result.semester)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
