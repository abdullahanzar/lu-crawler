"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; // Using a star icon as an example
import { FiberManualRecord } from "@mui/icons-material";

const InstructionsCard = () => {
  const instructions = [
    "Don’t try to upload pornographic / offensive material. Our detection systems will instantly highlight it and your IP address may get banned from accessing our site.",
    "You can contribute question papers, your notes, forms anonymously. If you want to contribute news about events, please log in first.",
    "If you can please fill the form here as to what your document is about. It will help us to easily identify and get it to students.",
    "Although it’s not mandatory to fill the form, you are strongly requested to do so.",
    "Only Lucknow University question papers can be uploaded here right now. If you are from other colleges please go into develop section, we plan to expand our site if other college students are interested in contributing to our open source development.",
    "Only PDF, JPEG, PNG files can be uploaded right now. If your file is in HEIC, consider converting it first to any of the accepted formats and then uploading.",
  ];
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 600 },
        marginRight: { xs: 0, sm: 2 },
        background: "#D5C8C8",
        maxHeight: "fit-content",
        padding: { xs: 1, sm: 0 },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          General Guidelines to Uploading Documents
        </Typography>
        <List>
          {instructions.map((text, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <ListItemIcon>
                <FiberManualRecord style={{ width: 12 }} className="w-1" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default InstructionsCard;
