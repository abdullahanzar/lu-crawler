import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export const NavbarButtons = () => {
  return (
    <div className="hidden sm:flex">
      <Link href="/log-in">
      <Button
        style={{
          backgroundColor: "#D5C8C8",
          color: "#000",
          borderRadius: "12px",
          marginRight: "24px",
        }}
        className="font-playfair"
        variant="contained"
      >
        Log In
      </Button>
      </Link>
      <Link href="/contribute">
        <Button
          style={{
            backgroundColor: "#D5C8C8",
            color: "#000",
            borderRadius: "12px",
            marginRight: "48px",
          }}
          className="font-playfair"
          variant="contained"
        >
          Contribute
        </Button>
      </Link>
    </div>
  );
};
