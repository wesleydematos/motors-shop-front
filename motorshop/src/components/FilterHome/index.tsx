export default function FilterHome() {
  const brands = [
    "General Motors",
    "FiatFord",
    "Honda",
    "Porsche",
    "Volswagen",
  ];

  const models = [
    "Civic",
    "Corolla",
    "Cruze",
    "Fit",
    "Gol",
    "Ka",
    "Onix",
    "Porsche 718",
  ];

  const colors = ["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"];

  const years = [2022, 2021, 2018, 2015, 2013, 2012, 2010];

  const fuels = ["Diesel", "Etanol", "Gasolina", "Flex"];

  return (
    <>
      <aside className="flex flex-col gap-6 w-full max-w-[454px]">
        <div>
          <h3 className="text-3xl font-bold mb-1">Marca</h3>
          <ul>
            {brands.map((brand, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Modelo</h3>
          <ul>
            {models.map((model, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
              >
                {model}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Cor</h3>
          <ul>
            {colors.map((color, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
              >
                {color}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Ano</h3>
          <ul>
            {years.map((year, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
              >
                {year}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Ano</h3>
          <ul>
            {fuels.map((fuel, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
              >
                {fuel}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Km</h3>
          <div className="flex gap-7">
            <input
              type="number"
              placeholder="Mínima"
              className="bg-grey-600 w-full max-w-[125px] placeholder:text-grey-900 placeholder:text-center border-none"
            />
            <input
              type="number"
              placeholder="Máxima"
              className="bg-grey-600 w-full max-w-[125px] placeholder:text-grey-900 placeholder:text-center border-none"
            />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Preço</h3>
          <div className="flex gap-7">
            <input
              type="number"
              placeholder="Mínimo"
              className="bg-grey-600 w-full max-w-[125px] placeholder:text-grey-900 placeholder:text-center border-none"
            />
            <input
              type="number"
              placeholder="Máximo"
              className="bg-grey-600 w-full max-w-[125px] placeholder:text-grey-900 placeholder:text-center border-none"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-16 bg-brand-300 text-whiteFixed w-72 h-12 rounded font-semibold mx-auto tablet:hidden"
        >
          Ver anúncios
        </button>

        <button
          type="button"
          className="mt-16 bg-brand-300 text-whiteFixed w-4/5 h-12 rounded font-semibold mx-auto hidden tablet:block"
        >
          Limpar filtros
        </button>
      </aside>
    </>
  );
}
