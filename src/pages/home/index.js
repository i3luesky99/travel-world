import React from "react";
import Navbar from "./components.js/Navbar";
import { styled } from "@mui/system";
import TopHome from "./components.js/TopHome";
const Wrapper = styled("div")({
  width: "100%",
  paddingLeft: "10%",
});
export default function Home() {
  return (
    <Wrapper>
      <TopHome />
    </Wrapper>
  );
}
