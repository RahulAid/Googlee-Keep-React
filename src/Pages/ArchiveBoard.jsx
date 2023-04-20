import React, { useState } from "react";
import ArchiveBody from "../Components/Body/ArchiveBody";
import Header from "../Components/Header/Header";

export default function ArchiveBoard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="dashboard" style={{ height: "100%" }}>
      <div className="dashboard-Header">
        <Header showSidebar={showSidebar} />
      </div>
      <div className="dashboard-body" style={{ height: "100%" }}>
        <ArchiveBody showSidebar={sidebar} />
      </div>
    </div>
  );
}
