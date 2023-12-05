import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";
import IndexRows from "./indexRows";
import DataItem from "./dataItem";
function Dashboard() {
  const { } = useContext(AuthContext);

  return (
    <div id="dashboardPage">
      <input />
      <DataItem />
      <IndexRows />

    </div>
  );
}
export default Dashboard;
