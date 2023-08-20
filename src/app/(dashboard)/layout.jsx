/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import { Context } from "../context/AuthProvider";
import { useRouter } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Slider from "../components/Slider";

const layout = ({ children }) => {
  const router = useRouter();
  const { auth } = Context();

  useEffect(() => {
    if (!auth) {
      router.push("/login");
    } else {
      window.history.pushState(null, window.location);
      window.onpopstate = function () {
        window.history.pushState(null, window.location);
      };
    }
  }, [auth, router]);

  if (!auth) {
    return null;
  }

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Slider open={open} handleDrawerClose={handleDrawerClose} />
      <main
        sx={{
          flexGrow: 1,
          padding: 3,
          transition: "margin 0.3s ease",
        }}
      >
        <div
          style={{
            marginTop: "64px",
            marginLeft: open === false ? "-240px" : 0,
          }}
        >
          {children}
        </div>
      </main>
    </Box>
  );
};

export default layout;
