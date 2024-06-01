import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const faqs = [
  {
    question: "What is this site about?",
    answer:
      "This site is a platform designed for Lucknow University students to share various academic resources such as question papers, notes, forms, news, ebooks, etc. It also provides a space for students to interact with each other in a respectful manner.",
  },
  {
    question: "Who can contribute to the site?",
    answer:
      "Any Lucknow University student can contribute to the site. Whether you want to share academic resources or participate in discussions, your contributions are welcome.",
  },
  {
    question: "What all can I contribute?",
    answer:
      "Anonymously, you can contribute question papers, your notes, forms, etc. here. If you want to contribute specific news accross the new or old campus, or if you want to interact with other users in the feed, you may need to create an account and log in.",
  },
  {
    question: "Do you own the documents hosted here?",
    answer:
      "No, they are owned by the repective posters / sharers. But by posting here, you allow us to share it for the benefit of all.",
  },
  {
    question: "Can I get banned from accessing this site?",
    answer:
      "Yes, we keep the records of IP Addresses and other basic details of our visitors. If you post pornographic or offensive content, we will ban your IP address from accessing our site.",
  },
  {
    question: "Can I download the documents here?",
    answer:
      "Yes, you can anonymously download the documents that have been uploaded here.",
  },
  {
    question: "Is this a commercial site? Do you profit off the userbase here?",
    answer:
      "No, this site is exclusively for Lucknow University students for sharing documents and other content. This is not a commercial space and we do not profit from your interaction with us in any way.",
  },
  {
    question: "How can I contribute to the site?",
    answer:
      "You can contribute to the site by anonymously uploading question papers, notes, forms, news articles, ebooks, etc. If you wish to engage in discussions or interact with other users, you may need to create an account and log in.",
  },
  {
    question: "Is it safe to use this site?",
    answer:
      "Yes, we take privacy and security seriously. Your personal information is kept confidential, and we have measures in place to ensure the safety of our users. However, we advise you to exercise caution when sharing sensitive information.",
  },
  {
    question: "Can I download resources from the site?",
    answer:
      "Yes, you can anonymously download resources that have been uploaded to the site. Simply browse through the available content and download what you need.",
  },
  {
    question: "How can I report inappropriate content?",
    answer:
      "If you come across any inappropriate or offensive content on the site, you can report it to the site administrators. We take reports seriously and will take appropriate action to address the issue.",
  },
  {
    question: "Is there a code of conduct for interacting on the site?",
    answer:
      "Yes, we have a code of conduct in place to ensure that interactions on the site are respectful and constructive. We expect all users to adhere to this code of conduct and treat each other with dignity and respect.",
  },
  {
    question: "Can I contact the site administrators?",
    answer:
      "Yes, you can contact the site administrators if you have any questions, concerns, or feedback. We are here to help and are committed to providing a positive user experience for all our users.",
  },
  // Add more FAQs here
];

const FAQPage = () => {
  return (
    <div className="p-8  min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Typography variant="playfair" className="text-center text-3xl mb-8">
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            className="my-8 shadow-lg border-none bg-white"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              className="bg-white"
            >
              <Typography className="font-medium">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#D5C8C8]">
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
