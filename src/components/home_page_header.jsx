import Image from "next/image";

export default function Home_page_header() {
  return (
    <div className="container-2">
        <Image
  src="/bg-image.png"
  alt="Crawler"
  width = "1000"
  height = "1000"
  priority
  style={{
    position: "absolute",
    objectFit: 'cover', // Ensures the image covers the entire container
    height: '20rem',    // Sets the height to 50 rem
    width: '100%'      // Sets the width to 100% of the viewport width
  }}
/>

      <div className="relative text-xl left-12 p-3 top-5 z-10 w-fit ">
        Welcome to LU Crawler.<br />
        Your one time stop to get all your exam needs.<br />
        Start crawling now.<br />
      </div>
      <div className="relative text-xl left-12 p-3 top-5 z-10 w-fit">
        Tell us what you are looking for?
      </div>

      <div className="flex items-center justify-center h-full">
  <div style={{ padding: '15px', paddingBottom: '25px' }}></div>

  <div className="container-3 w-52 h-24 bg-white border border-black rounded p-2">
    <input
      type="text"
      className="search-question-papers-notes-forms-news-etc w-full h-full outline-none bg-transparent"
      placeholder="Search question papers, notes, forms, news, etc."
    />
  </div>
</div>

<div className="container grid grid-cols-3 gap-x-4 justify-between" style={{ marginLeft: '10%' }}>
  <div className="recent-news-at-the-old-campus z-10 text-white">
    Recent news at the old campus
  </div>
  <div className="recent-document-uploads z-10 text-white">
    Recent document uploads
  </div>
  <div className="recent-news-at-the-new-campus z-10 text-white relative w-fit right-10">
    Recent news at the new campus
  </div>
</div>

      <div className="group-7">
        <div className="rectangle-8"></div>
        <p className="lu-crawler-all-rights-reserved">
          <span className="lu-crawler-all-rights-reserved-sub-4"></span><span></span>
        </p>
        <p className="quick-links-home-question-papers-notes">
          <span className="quick-links-home-question-papers-notes-sub-32"></span><span className="quick-links-home-question-papers-notes-sub-31"></span><span></span>
        </p>
        <div className="forms-news-contribute">
          Forms<br />
          News<br />
          Contribute
        </div>
        <div className="container-4">
          <div className="subscribe-to-our-newsletter-to-get-latest-news-across-the-old-and-the-new-campus">
            Subscribe to our newsletter to get latest news across the old and the new campus
          </div>
          <div className="group-4">
            <span className="search-resources-1">Email Address</span>
          </div>
        </div>
        <p className="support-your-account-privacy-policy-faq">
          <span className="support-your-account-privacy-policy-faq-sub-28"></span><span></span>
        </p>
        <div className="contribute-develop-about-us">
          Contribute<br />
          Develop<br />
          About us
        </div>
      </div>
    </div>
  );
}
