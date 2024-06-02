"use client";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Entity() {
  const [entity, setEntity] = useState({});
  const router = useRouter();

  useEffect(() => {
    const encodedResult = sessionStorage.getItem("entityDetails");
    if (encodedResult) {
      const result = JSON.parse(decodeURIComponent(encodedResult));
      setEntity(result);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <div className="flex flex-row m-6 justify-between">
        {entity?.name && (
          <div>
            <p className="px-10 pt-2 text-4xl">{entity?.name}</p>
            <p className="px-10 pt-2 text-2xl">{entity?.description}</p>
            <p className="px-10  text-xl">
              Course: {entity?.course?.toUpperCase()}
            </p>
            <p className="px-10  text-xl">Semester: {entity.semester}</p>
            <p className="px-10  text-xl">Type: {entity.type}</p>
          </div>
        )}
        <div>
          <Stack direction={"column"} spacing={2}>
            {" "}
            <Button
              variant="contained"
              sx={{ borderRadius: "12px" }}
              className="hover:text-white"
              onClick={() => router.back()}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: "12px" }}
              className="hover:text-white"
              onClick={() => router.push("/")}
            >
              Go to Home
            </Button>
          </Stack>
        </div>
      </div>
      {entity?.cloudinary_metadata?.secure_url && (
        <div className="flex flex-col items-center justify-center m-6">
          <iframe
            src={entity?.cloudinary_metadata?.secure_url}
            width="80%"
            height="600px"
            title="PDF Document"
          />
          <Button
            onClick={() => window.open(entity?.cloudinary_metadata?.secure_url)}
          >
            Open in a seperate tab?
          </Button>
        </div>
      )}
    </main>
  );
}
