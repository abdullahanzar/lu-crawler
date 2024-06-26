import InstructionsCard from "@/components/contribute/instructionsCard";
import DocumentUploadForm from "@/components/forms/forms";

export const metadata = {
  title: "Contribute - LU Crawler",
  description:
    "Contribute to LU Crawler by sharing your question papers, notes, and other study materials to help fellow students.",
  keywords:
    "contribute, share resources, LU Crawler, question papers, notes, educational materials",
  canonical: "https://lucrawler.in/contribute",
};

export default function Contribute() {
  return (
    <main className="mb-12">
      <div className="relative text-lg p-4 sm:pl-1 sm:py-0 sm:left-10 sm:top-4 sm:text-[21px] sm:w-max">
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
      <div className="relative text-xl pl-4 sm:pl-1 sm:py-0 sm:left-10 sm:top-4 sm:mt-4 sm:text-2xl sm:w-max">
        Wanna contribute anonymously?
      </div>
      <div className="w-full h-max flex flex-col sm:flex-row justify-between">
        <DocumentUploadForm />
        {/* <div className="bg-[#D5C8C8] mt-4 w-[35rem] mr-4 rounded-lg">
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
                  anonymously. If you want to contribute news about events,
                  please log in first.
                </li>
                <li>
                  If you can please fill the form here as to what your document
                  is about. It will help us to easily identify and get it to
                  students.
                </li>
                <li>
                  Although it{"’"}s not mandatory to fill the form, you are
                  strongly requested to do so.
                </li>
                <li>
                  Only Lucknow University question papers can be uploaded here
                  right now. If you are from other colleges please go into
                  develop section, we plan to expand our site if other college
                  students are interested in contributing to our open source
                  development.
                </li>
                <li>
                  Only PDF, JPEG, PNG files can be uploaded right now. If your
                  file is in HEIC, consider converting it first to any of the
                  accepted formats and then uploading.
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <InstructionsCard />
      </div>
    </main>
  );
}
