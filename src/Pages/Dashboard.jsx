import React, { useState } from "react";
import Body from "../Components/Body/Body";
import Header from "../Components/Header/Header";

export default function Dashboard() {
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
        <Body showSidebar={sidebar} />
      </div>
    </div>
  );
}
