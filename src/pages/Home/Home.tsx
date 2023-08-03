import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [characters, setCharacters] = useState([]);
  const publicKey = `${import.meta.env.VITE_MARVEL_PUBLIC_API_KEY}`;
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_MARVEL_URL
        }/characters?limit=10&offset=260&apikey=${publicKey}`
      );
      const data = response.data;
      setCharacters(data.data.results);
      // Handle the data and update your component state or perform other actions
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(characters);
  return (
    <main className="flex-1 ml-64 mt-4 p-10">
      <div className="grid grid-cols-4 gap-4 md:grid-cols-4 xs:grid-cols-2">
        {characters.map((character) => {
          return (
            <a
              key={character.id}
              href=""
              className="flex flex-col p-4  h-48 items-center  bg-gray-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => {
                navigate(`/perfil/${character.id}`);
              }}
            >
              <img
                className="object-cover h-full max-h-full w-full rounded-md  md:h-auto md:w-48  md:rounded-l-lg"
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
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
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
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
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
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
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
