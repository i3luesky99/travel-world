import React from "react";
import { colors, globalStyles, sizes } from "../../theme";
import { styled } from "@mui/system";

export default function ButtonGlobal(props) {
  const { text, styleText, styleButton } = props;

  return (
    <Button sx={styleButton}>
      <Text sx={styleText}>{text}</Text>
    </Button>
  );
}

const Button = styled("button")({
  height: "35px",
  width: "130px",
  borderRadius: "10px",
  borderWidth: 0,
  backgroundColor: colors.lightestBrown,
  cursor: "pointer",
  ...globalStyles.flexCenter,
});

const Text = styled("p")({
  color: colors.white,
  cursor: "pointer",
  fontSize: sizes.title,
});
