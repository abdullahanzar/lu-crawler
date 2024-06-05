import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import theme from "@/theme";

export const metadata = {
  title: "Privacy Policy - LU Crawler",
  description:
    "Read the privacy policy of LU Crawler to understand how we handle your data and privacy.",
  keywords: "privacy policy, LU Crawler, data protection, user privacy",
  canonical: "https://lucrawler.in/privacy-policy",
};

const privacyPolicySections = [
  {
    title: "Welcome to our Privacy Policy Page",
    content:
      "When you use our services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it.",
  },
  {
    title: "Information We Collect",
    content:
      "We collect information to provide better services to all our users. We collect information in the following ways: information you give us, this includes your submissions and other sign up related information",
  },
  {
    title: "How We Share Documents",
    content:
      "We use the submitted documents and share it here. Please note we do not own the notes, question papers, other documents you may share here, etc. We merely allow for sharing of such documents.",
  },
  {
    title: "Information We Share",
    content:
      "We do not share personal information with companies, organizations, and individuals outside of our company unless one of the following circumstances applies: with your consent, for legal reasons, or to protect our site and our users.",
  },
  {
    title: "Do we own the documents here?",
    content:
      "No, we do not in any way own the documents that have been contributed here. These are the property of the individual sharers. But by contributing here, you give us exclusive rights to reshare the documents for the benefit of all.",
  },
  // Add more sections as needed
];

const PrivacyPolicyPage = () => {
  return (
    <main>
      <Container maxWidth="md" className="my-8 p-4 rounded-lg">
        <h2 className="text-center mb-8 text-5xl">Privacy Policy</h2>
        {privacyPolicySections.map((section, index) => (
          <Card key={index} className="my-6 shadow-lg rounded-xl">
            <CardHeader
              title={
                <Typography variant="playfair">{section.title}</Typography>
              }
              className="bg-black text-white"
            />
            <Divider />
            <CardContent>
              <Typography variant="playfair">{section.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </main>
  );
};

export default PrivacyPolicyPage;
