import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveNotes from "../Notes/ArchiveNotes";
import { useNavigate } from "react-router-dom";

export default function SideBarIcons() {
  const navigation = useNavigate();
  const archiveData = () => {
    console.log("inSide Bar for Archive notes");
    navigation("/archive");
  };

  const trashData = () => {
    navigation("/trash");
  };

  const allNotes = () => {
    console.log("inSide Bar for Archive notes");
    navigation("/dashboard");
  };
  return (
    <div
      className="sidebar-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        className="notes-container"
        style={{
          marginTop: "3%",
          width: "100%",
          height: "3em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="notes-icon"
          style={{
            width: "3em",
            backgroundColor: "#feefb1",
            borderRadius: "150%",
            marginLeft: "17%",
            marginTop: "3%",
            height: "2.7em",
            cursor: "pointer",
          }}
          onClick={allNotes}
        >
          <LightbulbOutlinedIcon sx={{ marginTop: "16%" }} />
        </div>
      </div>
      <div
        className="remainders-container"
        style={{
          marginTop: "3%",
          width: "100%",
          height: "3em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="remainders-icon"
          style={{
            width: "3em",
            borderRadius: "150%",
            marginLeft: "17%",
            marginTop: "3%",
            height: "2.7em",
            cursor: "pointer",
          }}
        >
          <NotificationsOutlinedIcon sx={{ marginTop: "16%" }} />
        </div>
      </div>
      <div
        className="edit-container"
        style={{
          marginTop: "3%",
          width: "100%",
          height: "3em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="edit-icon"
          style={{
            width: "3em",
            borderRadius: "150%",
            marginLeft: "17%",
            marginTop: "3%",
            height: "2.7em",
            cursor: "pointer",
          }}
        >
          <CreateOutlinedIcon sx={{ marginTop: "16%" }} />
        </div>
      </div>
      <div
        className="archive-container"
        style={{
          marginTop: "3%",
          width: "100%",
          height: "3em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="archive-icon"
          style={{
            width: "3em",
            borderRadius: "150%",
            marginLeft: "17%",
            marginTop: "3%",
            height: "2.7em",
            cursor: "pointer",
          }}
          onClick={archiveData}
        >
          <ArchiveOutlinedIcon sx={{ marginTop: "16%" }} />
        </div>
      </div>
      <div
        className="bin-container"
        style={{
          marginTop: "3%",
          width: "100%",
          height: "3em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="bin-icon"
          style={{
            width: "3em",
            borderRadius: "150%",
            marginLeft: "17%",
            marginTop: "3%",
            height: "2.7em",
            cursor: "pointer",
          }}
          onClick={trashData}
        >
          <DeleteOutlineOutlinedIcon sx={{ marginTop: "16%" }} />
        </div>
      </div>
    </div>
  );
}
