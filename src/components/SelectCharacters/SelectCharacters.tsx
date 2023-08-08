import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { CaretDown, Check } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Result } from "../../Interfaces/MarvelCharactersInterface";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function SelectCharacters() {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [selected, setSelected] = useState<Result>({} as Result);
  const publicKey = `${import.meta.env.VITE_MARVEL_PUBLIC_API_KEY}`;
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MARVEL_URL}/characters?apikey=${publicKey}`
      );
      const data = response.data;
      setSelected(data.data.results[0]);
      setCharacters(data.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(characters);
  console.log(selected);

  useEffect(() => {
    fetchData();
  }, [""]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Tenha a visão completa do seu agente.
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={
                    selected?.thumbnail?.path +
                    "." +
                    selected?.thumbnail?.extension
                  }
                  alt=""
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <CaretDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {characters?.map((character) => (
                  <Listbox.Option
                    key={character.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-blue-500 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={character}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={
                              character.thumbnail?.path +
                              "." +
                              character.thumbnail?.extension
                            }
                            alt=""
                            className="h-6 w-6 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {character.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                navigate(`/perfil/${selected?.id}`);
                localStorage.setItem(
                  "defaultCharacter",
                  selected?.id.toString()
                );
              }}
              type="button"
              className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Entrar
            </button>
          </div>
        </>
      )}
    </Listbox>
  );
}
