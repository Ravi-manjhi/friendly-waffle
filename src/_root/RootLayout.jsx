import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/Sidebar";

function RootLayout() {
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

export default RootLayout;
