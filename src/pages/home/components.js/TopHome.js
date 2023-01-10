import React from "react";
import { styled } from "@mui/system";
import Navbar from "./Navbar";
import { colors, sizes } from "../../../theme";

export default function TopHome() {
  const Wrapper = styled("div")({
    width: "100%",
    backgroundColor: "blue",
    height: "900px",
    display: "flex",
  });
  const LeftContent = styled("div")({
    width: "55%",
    backgroundColor: colors.white,
    height: "100%",
    paddingTop: "20%",
  });
  const RightContent = styled("div")({
    width: "45%",
    backgroundColor: colors.lightGray,
    height: "100%",
  });
  const Title = styled("p")({
    fontSize: sizes.huge + 20,
    fontWeight: "700",
    textAlign: "left",
    width: "50%",
  });
  return (
    <Wrapper>
      <Navbar />
      <LeftContent>
        <Title>The world's largest chain of hotels is Best Western</Title>
      </LeftContent>
      <RightContent></RightContent>
    </Wrapper>
  );
}
