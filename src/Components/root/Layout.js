import { Outlet } from "react-router-dom";
import MyNavbar from "../NavBar/MyNavbar";

export default function Layout({ handleLogout }) {
  return (
    <div>
      <MyNavbar handleLogout={handleLogout} />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
