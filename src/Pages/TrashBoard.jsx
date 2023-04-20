import React, { useState } from "react";
import TrashBody from "../Components/Body/TrashBody";
import Header from "../Components/Header/Header";

export default function TrashBoard() {
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
        <TrashBody showSidebar={sidebar} />
      </div>
    </div>
  );
}
