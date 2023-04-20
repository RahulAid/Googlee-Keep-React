import React, { useState } from "react";
import ArchiveNotes from "../Notes/ArchiveNotes";
import Notes from "../Notes/Notes";
import Sidebar from "../Sidebar/Sidebar";
import SideBarIcons from "../Sidebar/SideBarIcons";
import NoteDescription from "../TakeAnote/NoteDescription";
import TakeAnote from "../TakeAnote/TakeAnote";
import "./Body.css";

export default function ArchiveBody(props) {
  const [takeNote, setTakeNote] = useState(false);

  const take = (e) => {
    
    !takeNote && setTakeNote(true);
    
    console.log("in take note", takeNote);
  };

  const bodyClick = () => {
    takeNote && setTakeNote(false);
  };

  const descriptionClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={bodyClick} style={{ display: "flex", flexDirection: "row" }}>
      {props.showSidebar ? (
        <div style={{ width: "21%" }}>
          <Sidebar />
        </div>
      ) : (
        <div style={{ width: "10%" }}>
          <SideBarIcons />
        </div>
      )}

      <div className="body-container" style={{ width: "100%" }}>
        <div
          className="note-container"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "4%",
            marginTop: ".5%",
            width: "100%",
            height: "auto",
            flexWrap: "wrap",
          }}
        >
          <ArchiveNotes />
        </div>
      </div>
    </div>
  );
}
