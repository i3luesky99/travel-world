import React, { useState } from "react";
import { styled } from "@mui/system";
import { colors, globalStyles, sizes } from "../../../theme";
import { SearchIcon } from "../../../assets/svg/search";
import ButtonGlobal from "../../../components/ButtonGlobal";
import Box from "@mui/material/Box";

export default function Navbar() {
  const menuBars = [
    { id: 0, text: "Home" },
    { id: 1, text: "Room & Suites" },
    { id: 2, text: "Restaurant & Bar" },
    { id: 3, text: "Blog" },
  ];
  const [selected, setSelected] = useState(0);
  const onChangeSelected = (index) => {
    setSelected(index);
  };
  const video = require("../../../assets/gif/Introduce.gif");
  return (
    <TopBar>
      <Menu>
        <LeftMenu>
          <Box sx={{ width: "10%" }}>
            <Gif src={video} type="video/mp4" alt="" />
          </Box>
          <Box sx={{ width: "90%", ...globalStyles.flexCenterEvenly }}>
            {menuBars.map((menu, index) => (
              <Text
                onClick={() => onChangeSelected(index)}
                key={index}
                sx={index === selected && { color: colors.yellow }}
              >
                {menu.text}
              </Text>
            ))}
          </Box>
        </LeftMenu>
        <RightMenu>
          <Box sx={{ cursor: "pointer", marginRight: "20px" }}>
            <SearchIcon style={icon} />
          </Box>
          <ButtonGlobal text="Booking Room" />
        </RightMenu>
      </Menu>
    </TopBar>
  );
}

const TopBar = styled("div")({
  height: "100px",
  width: "100%",
  ...globalStyles.flexRowCenter,
  position: "absolute",
});
const Gif = styled("img")({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  cursor: "pointer",
  position: "absolute",
});

const Menu = styled("div")({
  width: "100%",
  ...globalStyles.flexCenterBetween,
});

const Text = styled("p")({
  fontSize: sizes.large,
  cursor: "pointer",
});

const LeftMenu = styled("div")({
  width: "55%",
  display: "flex",
});
const RightMenu = styled("div")({
  width: "30%",
  display: "flex",
  alignItems: "center",
  height: "100%",
});

const icon = {
  width: "20px",
  height: "20px",
  color: colors.white,
};
