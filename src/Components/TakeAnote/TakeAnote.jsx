import React from "react";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

export default function TakeAnote() {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "2%",
        marginTop: ".7%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ color: "black" }}>Take a note...</div>
      <div
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: "3%",
        }}
      >
        <CheckBoxOutlinedIcon sx={{ color: "grey" }} />
        <BrushOutlinedIcon sx={{ color: "grey" }} />
        <ImageOutlinedIcon sx={{ color: "grey" }} />
      </div>
    </div>
  );
}
