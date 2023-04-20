import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Sidebar() {
  return (
    <div
      className="sidebar-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "auto",
      }}
    >
      <div
        className="notes-container"
        style={{
          marginTop: "3%",
          width: "100%",
          height: "3em",
          backgroundColor: "#feefb1",
          borderRadius: "0 25px 25px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="notes-icon"
          style={{
            width: "4.4em",
            marginLeft: "2%",
            marginTop: "3%",
            height: "2em",
          }}
        >
          <LightbulbOutlinedIcon />
        </div>
        <div className="notes" style={{ height: "2em", marginTop: "3%" }}>
          Notes
        </div>
      </div>
      <div
        className="remainders-container"
        style={{
          width: "100%",
          height: "3em",
          borderRadius: "0 25px 25px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="remainders-icon"
          style={{
            width: "4.4em",
            marginLeft: "2%",
            marginTop: "3%",
            height: "2em",
          }}
        >
          <NotificationsOutlinedIcon />
        </div>
        <div className="remainders" style={{ height: "2em", marginTop: "3%" }}>
          Remainders
        </div>
      </div>
      <div
        className="edit-container"
        style={{
          width: "100%",
          height: "3em",
          borderRadius: "0 25px 25px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="edit-icon"
          style={{
            width: "4.4em",
            marginLeft: "2%",
            marginTop: "3%",
            height: "2em",
          }}
        >
          <CreateOutlinedIcon />
        </div>
        <div className="edit" style={{ height: "2em", marginTop: "3%" }}>
          Edit labels
        </div>
      </div>
      <div
        className="archive-container"
        style={{
          width: "100%",
          height: "3em",
          borderRadius: "0 25px 25px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="archive-icon"
          style={{
            width: "4.4em",
            marginLeft: "2%",
            marginTop: "3%",
            height: "2em",
          }}
        >
          <ArchiveOutlinedIcon />
        </div>
        <div className="archive" style={{ height: "2em", marginTop: "3%" }}>
          Archive
        </div>
      </div>
      <div
        className="bin-container"
        style={{
          width: "100%",
          height: "3em",
          borderRadius: "0 25px 25px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="bin-icon"
          style={{
            width: "4.4em",
            marginLeft: "2%",
            marginTop: "3%",
            height: "2em",
          }}
        >
          <DeleteOutlineOutlinedIcon />
        </div>
        <div className="bin" style={{ height: "2em", marginTop: "3%" }}>
          Bin
        </div>
      </div>
    </div>
  );
}
