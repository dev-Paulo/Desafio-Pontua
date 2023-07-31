import { Route, Router, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Topbar } from "./components/Topbar/Topbar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";

export function AppRoutes() {
  return (
    <div className="app">
      <aside>
        <Sidebar />
      </aside>

      <main className="content">
        <Topbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>
    </div>
  );
}
