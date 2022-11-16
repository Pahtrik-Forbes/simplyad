import Box from "@mui/material/Box/Box";
import Container from "@mui/system/Container";
import React from "react";
import Header from "../header";
//import Footer from './footer'

interface Props {
  children: React.ReactElement;
}
export default function Layout(prop: Props) {
  const { children } = prop;
  return (
    <>
      <Header />
      <Box component={"main"}>{children}</Box>
      {/* <Footer /> */}
    </>
  );
}
