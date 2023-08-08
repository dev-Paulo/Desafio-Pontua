import { useEffect, useState } from "react";
import axios from "axios";
import { Params, useParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Result } from "../../Interfaces/MarvelCharactersInterface";
import { Topbar } from "../../components/Topbar/Topbar";

export function Perfil() {
  const params = useParams<Params>();
  const [character, setCharacter] = useState<Result>({} as Result);

  const publicKey = `${import.meta.env.VITE_MARVEL_PUBLIC_API_KEY}`;
  const [activeTab, setActiveTab] = useState("profile");

  async function fetchCharacter() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MARVEL_URL}/characters/${
          params.id
        }?apikey=${publicKey}`
      );
      const data = response.data;
      setCharacter(data.data.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  console.log(character);
  return (
    <>
      <Sidebar />
      <Topbar />

      <div className="p-8 md:ml-64">
        <div className="md:flex md:flex-row md:align-center ">
          <p className="text-2xl font-bold whitespace-nowrap">
            Perfil <span className="text-orange-500 mr-2">/</span>
          </p>
          <p className="text-2xl font-light ">{character?.name}</p>
        </div>
        <div className="  border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "profile"
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "profile"}
                onClick={() => handleTabClick("profile")}
              >
                Visão Geral
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "quadrinhos"
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => handleTabClick("quadrinhos")}
                id="quadrinhos-tab"
                data-tabs-target="#quadrinhos"
                type="button"
                role="tab"
                aria-controls="quadrinhos"
                aria-selected={activeTab === "quadrinhos"}
              >
                Quadrinhos
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "series"
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => handleTabClick("series")}
                id="series-tab"
                data-tabs-target="#series"
                type="button"
                role="tab"
                aria-controls="series"
                aria-selected={activeTab === "series"}
              >
                Séries
              </button>
            </li>
            <li role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "historias"
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => handleTabClick("historias")}
                id="historias-tab"
                data-tabs-target="#historias"
                type="button"
                role="tab"
                aria-controls="historias"
                aria-selected={activeTab === "historias"}
              >
                Histórias
              </button>
            </li>
            <li role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "eventos"
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => handleTabClick("eventos")}
                id="eventos-tab"
                data-tabs-target="#eventos"
                type="button"
                role="tab"
                aria-controls="eventos"
                aria-selected={activeTab === "eventos"}
              >
                Eventos
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className={`${
              activeTab === "profile" ? "" : "hidden"
            } dark:bg-gray-800 pt-8`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="flex flex-col w-full flex-1 items-center p-12  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-className=0 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="w-24 h-24 rounded-full"
                src={
                  character?.thumbnail?.path +
                  "." +
                  character?.thumbnail?.extension
                }
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-white">
                  {character?.name}
                </h5>
                <p className="mb-3 font-semibold text-gray-400 dark:text-gray-400 ">
                  {character?.description}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeTab === "quadrinhos" ? "" : "hidden"
            } dark:bg-gray-800 pt-8`}
            id="quadrinhos"
            role="tabpanel"
            aria-labelledby="quadrinhos-tab"
          >
            <ul className="list-disc p-8">
              {character?.comics?.items?.map((comic) => {
                return (
                  <li className="font-profile text-gray-500 font-bold">
                    {comic.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`${
              activeTab === "series" ? "" : "hidden"
            } dark:bg-gray-800 pt-8`}
            id="series"
            role="tabpanel"
            aria-labelledby="series-tab"
          >
            <ul className="list-disc p-8">
              {character?.series?.items?.map((serie) => {
                return (
                  <li className="font-profile text-gray-500 font-bold">
                    {serie.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`${
              activeTab === "historias" ? "" : "hidden"
            } dark:bg-gray-800 pt-8`}
            id="historias"
            role="tabpanel"
            aria-labelledby="historias-tab"
          >
            <ul className="list-disc p-8">
              {character?.stories?.items?.map((historia) => {
                return (
                  <li className="font-profile text-gray-500 font-bold">
                    {historia.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`${
              activeTab === "eventos" ? "" : "hidden"
            } dark:bg-gray-800 pt-8`}
            id="eventos"
            role="tabpanel"
            aria-labelledby="eventos-tab"
          >
            <ul className="list-disc p-8">
              {character?.events?.items?.map((evento) => {
                return (
                  <li className="font-profile text-gray-500 font-bold">
                    {evento.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
