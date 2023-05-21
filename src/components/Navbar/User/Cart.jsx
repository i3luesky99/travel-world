import React from "react";
import { iconCart } from "../../../theme/icon";

export default function Cart() {
  return (
    <div>
      <img
        src={iconCart}
        alt=""
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
      />
    </div>
  );
}
