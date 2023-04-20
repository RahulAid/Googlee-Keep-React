import React, { useState } from "react";
import MenuBar from "../MenuBar/MenuBar";

export default function Header(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    props.showSidebar(sidebar);
  };
  return (
    <div className="Header-container">
      <div
        style={{
          marginLeft: "1%",
          width: "100vw",
          height: "auto",
        }}
      >
        <MenuBar showSideBar={showSidebar} />
      </div>
    </div>
  );
}
