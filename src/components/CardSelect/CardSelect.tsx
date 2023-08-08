import SelectCharacters from "../SelectCharacters/SelectCharacters";

export function CardSelect() {
  return (
    <>
      <div>
        <h2 className="text-blue-800 font-bold text-3xl tracking-tighter mb-5">
          Selecione o seu agente mais legal
          <span className="text-orange-500">.</span>
        </h2>
        <SelectCharacters />
      </div>
    </>
  );
}
