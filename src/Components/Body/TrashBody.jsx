import React, { useState } from "react";
import TrashNotes from "../Notes/TrashNotes";
import Sidebar from "../Sidebar/Sidebar";
import SideBarIcons from "../Sidebar/SideBarIcons";
import "./Body.css";

export default function TrashBody(props) {
  const [takeNote, setTakeNote] = useState(false);

  const take = (e) => {
    console.log("in take note", takeNote);
    !takeNote && setTakeNote(true);
    
    console.log("in take note", takeNote);
  };

  

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
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
          <TrashNotes />
        </div>
      </div>
    </div>
  );
}
