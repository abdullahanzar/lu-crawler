"use client";
import DocumentUploadForm from "@/components/forms/forms";
import { Button } from "@mui/material";

export default function Contribute() {
  return (
    <main>
      <div className="relative left-10 top-4 text-[21px] w-max">
        <p>
          Your contribution helps us to get the most up to date resources to
          students.
        </p>
        <p>
          You can contribute scanned question papers, notes, forms and even
          news.
        </p>
        <p>Log In to contribute news and interact with the feed.</p>
      </div>
      <div className="relative left-10 top-4 mt-4 text-2xl w-max">
        Wanna contribute anonymously?
      </div>
      <DocumentUploadForm />
      <div className="absolute right-10 bg-[#D5C8C8] top-56 mt-4 w-[35rem] rounded-lg">
        <div className="relative w-[34rem] p-4">
          <p className="font-sans text-xl">
            General Guidelines to uploading documents
          </p>
          <div className="font-sans">
            <ul className="list-disc pl-4">
              <li>
                Don{"’"}t try to upload pornographic / offensive material. Our
                detection systems will instantly highlight it and your IP
                address may get banned from accessing our site.
              </li>
              <li>
                You can contribute question papers, your notes, forms
                anonymously. If you want to contribute news about events, please
                log in first.
              </li>
              <li>
                If you can please fill the form here as to what your document is
                about. It will help us to easily identify and get it to
                students.
              </li>
              <li>
                Although it{"’"}s not mandatory to fill the form, you are
                strongly requested to do so.
              </li>
              <li>
                Only Lucknow University question papers can be uploaded here
                right now. If you are from other colleges please go into develop
                section, we plan to expand our site if other college students
                are interested in contributing to our open source development.
              </li>
              <li>
                Only PDF, JPEG, PNG files can be uploaded right now. If your
                file is in HEIC, consider converting it first to any of the
                accepted formats and then uploading.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
