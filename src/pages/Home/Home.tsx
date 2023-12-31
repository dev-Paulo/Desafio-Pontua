import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Topbar } from "../../components/Topbar/Topbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Result } from "../../Interfaces/MarvelCharactersInterface";

export function Home() {
  const [characters, setCharacters] = useState<Result[] | undefined>([]);
  const [characterSearch, setCharacterSearch] = useState<string | "">("");
  const publicKey = `${import.meta.env.VITE_MARVEL_PUBLIC_API_KEY}`;
  const navigate = useNavigate();
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  async function fetchData() {
    try {
      const offset = currentPage * 10;
      const response = await axios.get(
        `${import.meta.env.VITE_MARVEL_URL}/characters?${
          characterSearch != "" ? `nameStartsWith=${characterSearch}` : ""
        }&limit=10&offset=${offset}&apikey=${publicKey}`
      );
      const data = response.data;
      setCharacters(data.data.results);
      setTotalCharacters(data.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const lastTwoItems = characters?.slice(-2);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(0);
    if (characterSearch.length != 1) {
      fetchData();
    }
  }, [characterSearch]);

  return (
    <>
      <Sidebar />

      <div className="sm:ml-64 flex-1">
        <Topbar setCharacterSearch={setCharacterSearch} />
        <div className="grid md:grid-cols-4 gap-4 p-4 md:p-10 ">
          {characters?.map((character) => {
            return (
              <a
                key={character.id}
                href=""
                className={`flex flex-col ${
                  characters.length >= 10 && lastTwoItems?.includes(character)
                    ? "md:col-span-2"
                    : "md:col-span-1"
                } p-4 h-auto md:h-48 items-center bg-gray-100 border border-gray-200 rounded-2xl shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
                onClick={() => {
                  navigate(`/perfil/${character.id}`);
                  localStorage.setItem(
                    "defaultCharacter",
                    character.id.toString()
                  );
                }}
              >
                <img
                  className="object-cover w-full h-auto rounded-xl md:h-48 md:w-28 max-h-full"
                  src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
                  alt=""
                />
                <div className="flex flex-col justify-between p-2 md:p-4 leading-normal">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {character.name}
                  </h5>
                  <p className="mb-3 font-light text-black dark:text-gray-400 line-clamp-4">
                    {character.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="flex flex-row justify-center mt-20">
          <ReactPaginate
            previousLabel={
              <span className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Anterior
              </span>
            }
            nextLabel={
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Próxima
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
            }
            breakClassName={
              "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }
            forcePage={currentPage}
            pageCount={Math.ceil(totalCharacters / 10)} // Calculate total pages based on character count
            onPageChange={handlePageChange}
            containerClassName={
              "flex items-center justify-center px-4 h-10 leading-tight "
            }
            activeClassName={"text-white bg-blue-500"}
            pageClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          />
        </div>
      </div>
    </>
  );
}
