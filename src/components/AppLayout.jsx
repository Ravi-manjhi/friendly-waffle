import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

function AppLayout() {
  return (
    <main className="main">
      <Header />
      <Sidebar />
      <div className="main-section">
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayout;
