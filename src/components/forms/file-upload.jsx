"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    // Here you can handle the submission of the file
    // For example, you can upload it to a server, process it, etc.
    console.log("Submitted file:", file);
  };

  return (
    <div>
      {file && <p className="font-['Inter']">Uploaded document: {file.name}</p>}
      <input
        type="file"
        accept=".pdf, .jpeg, .jpg, .png"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button
          style={{
            backgroundColor: "#D5C8C8",
            color: "#000",
            borderRadius: "12px",
            marginTop: "12px",
            padding: "12px",
          }}
          className="font-sans"
          variant="contained"
          component="span"
        >
          Upload your files here
        </Button>
      </label>
      {file && (
        <Button
          style={{
            backgroundColor: "#D5C8C8",
            color: "#000",
            borderRadius: "12px",
            marginTop: "12px",
            padding: "12px",
          }}
          className="font-sans ml-4"
          variant="contained"
          onClick={() => {
            setFile(null);
          }}
          disabled={!file}
        >
          Clear Document
        </Button>
      )}
    </div>
  );
}

export default FileUpload;
