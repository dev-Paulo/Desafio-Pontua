import { Link } from "react-router-dom";
import logoPontua from "../../assets/logo-pontua.svg";
import { SignOut, House, User } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-row items-center h-16 border-divider border-b-2">
            <a href="" className="flex items-center px-6  ">
              <img
                src={logoPontua}
                className="h-6 mr-3 sm:h-7"
                alt="Pontua Logo"
              />
            </a>
          </div>

          <ul className="space-y-3 font-medium px-4 mt-2">
            <li>
              <Link
                // onClick={() => {
                //   setIndexAtivo(index);
                //   localStorage.setItem("indexAtivo", index.toString()!);
                // }}
                aria-controls="example-collapse-text"
                to={"/home"}
                // className={`opcao-menu  ${
                //   indexAtivo == index ? "activado" : ""
                // }`}
                className="flex flex-row items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
                style={{ textDecoration: "none" }}
              >
                <House size={28} />
                Home
              </Link>
            </li>
            <li>
              <Link
                // onClick={() => {
                //   setIndexAtivo(index);
                //   localStorage.setItem("indexAtivo", index.toString()!);
                // }}
                aria-controls="example-collapse-text"
                to={"/perfil"}
                // className={`opcao-menu  ${
                //   indexAtivo == index ? "activado" : ""
                // }`}
                className="flex flex-row items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
                style={{ textDecoration: "none" }}
              >
                <User size={28} />
                Perfil
              </Link>
            </li>
            <li>
              <Link
                // onClick={() => {
                //   setIndexAtivo(index);
                //   localStorage.setItem("indexAtivo", index.toString()!);
                // }}
                aria-controls="example-collapse-text"
                to={"/"}
                // className={`opcao-menu  ${
                //   indexAtivo == index ? "activado" : ""
                // }`}
                className="flex flex-row items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
                style={{ textDecoration: "none" }}
              >
                <SignOut size={28} />
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
