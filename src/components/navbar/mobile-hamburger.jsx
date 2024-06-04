"use client";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function MobileHamburger() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          "Home",
          "Question Papers",
          "Midsem Papers",
          "Notes",
          "Forms",
          "News",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              href={
                "/" + text.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")
              }
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Log In", "Contribute"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              href={
                "/" + text.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")
              }
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="sm:hidden">
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon className="text-white" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
