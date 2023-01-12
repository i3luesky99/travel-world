import React from "react";
import { styled } from "@mui/system";
import { colors, sizes } from "../../../theme";
import Calender from "./Calender";
import LogoPartner from "./LogoPartner";

export default function TopHome() {
  return (
    <Wrapper>
      <LeftContent>
        <Title>The world's largest chain of hotels is Best Western</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
          sed pretium, egestas sed sit orem ipsum dolor sit amet,
        </Text>
        <LogoPartner />
        <Calender />
      </LeftContent>

      <RightContent></RightContent>
    </Wrapper>
  );
}
const Wrapper = styled("div")({
  width: "100%",
  paddingLeft: "5%",
  height: "900px",
  display: "flex",
});
const LeftContent = styled("div")({
  width: "55%",
  backgroundColor: colors.white,
  height: "100%",
  position: "relative",
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
  marginTop: "25%",
});

const Text = styled("p")({
  fontSize: sizes.title,
  textAlign: "left",
  width: "50%",
  color: colors.grey,
  marginTop: "20px",
});
