import { Route, Routes } from "react-router-dom";


import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";

// interface LayoutWrapperProps {
//   children: React.ReactNode;
// }

// Custom wrapper component to conditionally render topbar and sidebar
// function LayoutWrapper({ children }: LayoutWrapperProps) {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/login";

//   return (
//     <div className="app">
//       {!isLoginPage && 
//       <>
//       <Sidebar />
//       <div className="  p-4 sm:ml-64 ">
    
//         {/* {!isLoginPage && <Topbar /> } */}
//         {children}
//       </div>
//       </>
//       }
      
//     </div>
//   );
// }

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          //<LayoutWrapper>
            <Login />
          //</LayoutWrapper>
        }
      />
      <Route
        path="/home"
        element={
          // <LayoutWrapper>
            <Home />
          // </LayoutWrapper>
        }
      />
      <Route
        path="/perfil/:id"
        element={
          // <LayoutWrapper>
            <Perfil />
          // </LayoutWrapper>
        }
      />
    </Routes>
  );
}
