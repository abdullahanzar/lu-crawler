"use client";
import React, { useState, useEffect } from "react";
import { Button, Chip } from "@mui/material";
import { FilePresentRounded } from "@mui/icons-material";
import { createSupabaseBrowserClient } from "@/supabase/browserClient";
import { uploadToCloudinary } from "@/utils/file-uploader";
import axios from "axios";
import { notify } from "@/utils/notify";
import { compressPDF } from "@/utils/file-compressor";

const supabase = createSupabaseBrowserClient();

function FileUpload({ setCloudinaryMetaData }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const maxSize = 10 * 1024 * 1024; // 10 MB in bytes
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        notify.error(
          "Invalid file type. Please select a PDF, JPEG, JPG, or PNG file."
        );
        event.target.value = null; // Clear the input
        return;
      }

      let compressedFile;
      if (file.size > maxSize) {
        try {
          notify.load("Please wait while we try to compress your file.");
          compressedFile = await compressPDF(file);
          notify.clearloading();
          if (compressedFile.size > maxSize) {
            event.target.value = null;
            return notify.error(
              "Your file exceeds 10 MB, please compress your file and then try again."
            );
          }
        } catch (e) {
          console.log(e);
          notify.error(
            "We couldn't compress your file. Please compress the file to below 10 MB then try again."
          );
        }
      }

      const selectedFile = compressedFile
        ? compressedFile
        : event.target.files[0];
      setFile(selectedFile);
      event.target.value = null;
    }
  };

  const handleUnorganizedSubmit = async () => {
    try {
      const cloudinary_metadata = await uploadToCloudinary(
        file,
        "lu-crawler-documents"
      );
      setUrl(cloudinary_metadata.secure_url);
      const ip_address = await axios.get("/api/resolve-ip");
      setCloudinaryMetaData({
        data: cloudinary_metadata,
        ip: ip_address?.data?.ip,
      });
      const { error } = await supabase.from("unorganized_documents").insert({
        cloudinary_metadata,
        ip_address: ip_address?.data?.ip,
      });
      if (error) {
        throw new Error(error.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (file) handleUnorganizedSubmit();
  }, [file]);

  return (
    <div>
      <div>
        {file && (
          <Chip
            color="primary"
            icon={<FilePresentRounded sx={{ width: 20 }} />}
            label={`${file.name}`}
            onDelete={() => {
              setFile(null);
            }}
            clickable
            onClick={() => {
              if (!url)
                notify.success(
                  "Please wait a few moments before clicking again."
                );
              else window.open(url);
            }}
          ></Chip>
        )}
      </div>
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
          Upload your file here
        </Button>
      </label>
    </div>
  );
}

export default FileUpload;
