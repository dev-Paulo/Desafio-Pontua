import { MagnifyingGlass } from "@phosphor-icons/react";
import { SetStateAction } from "react";

interface TopbarProps {
  setCharacterSearch: React.Dispatch<SetStateAction<string | "">>;
}

export function Topbar({ setCharacterSearch }: TopbarProps) {
  return (
    <>
      <nav className="bg-white border-divider border-b-2  dark:bg-gray-900 w-full h-16 flex flex-row items-center">
        <div
          className="p-4 items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlass size={22} className="text-blue-200" />
            </div>

            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-blue-200 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Busque um agente"
              onChange={(e) => {
                setCharacterSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
