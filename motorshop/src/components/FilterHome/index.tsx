import { useAnnouncementContext } from "../../contexts/Announcement";

export default function FilterHome() {
  const {
    brandFil,
    setBrands,
    modelsFil,
    setModels,
    priceMin,
    mileageMin,
    getMin,
    getMax,
    priceMax,
    mileageMax,
    colorsFil,
    yearsFil,
    fuelsFil,
    setColorsFil,
    setYearsFil,
    setFuelsFil,
    cleanFilters,
  } = useAnnouncementContext();

  return (
    <>
      <aside className="flex flex-col gap-6 w-full max-w-[454px]">
        <div>
          <h3 className="text-3xl font-bold mb-1">Marca</h3>
          <ul>
            {brandFil.map((brand, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
                onClick={() => setBrands(brand)}
              >
                {brand.charAt(0).toUpperCase() + brand.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Modelo</h3>
          <ul>
            {modelsFil.map((model, index) => {
              if (brandFil.length > 1) {
                return <></>;
              }

              return (
                <li
                  key={index}
                  className="text-xl text-grey-800 font-medium cursor-pointer"
                  onClick={() => setModels(model)}
                >
                  {model.charAt(0).toUpperCase() + model.slice(1)}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Cor</h3>
          <ul>
            {colorsFil.map((color, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
                onClick={() => {
                  colorsFil.length > 1
                    ? setColorsFil([color])
                    : setColorsFil(colorsFil);
                }}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Ano</h3>
          <ul>
            {yearsFil.map((year, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
                onClick={() => {
                  yearsFil.length > 1
                    ? setYearsFil([year])
                    : setYearsFil(yearsFil);
                }}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-1">Combustível</h3>
          <ul>
            {fuelsFil.map((fuel, index) => (
              <li
                key={index}
                className="text-xl text-grey-800 font-medium cursor-pointer"
                onClick={() => {
                  fuelsFil.length > 1
                    ? setFuelsFil([fuel])
                    : setFuelsFil(fuelsFil);
                }}
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
              onChange={(e) => getMin("mileage", e)}
              value={mileageMin}
              type="number"
              placeholder="Mínima"
              className="bg-grey-600 w-full max-w-[125px] placeholder:text-grey-900 placeholder:text-center border-none"
            />
            <input
              onChange={(e) => getMax("mileage", e)}
              value={mileageMax}
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
              value={priceMin}
              onChange={(e) => getMin("price", e)}
              type="number"
              placeholder="Mínimo"
              className="bg-grey-600 w-full max-w-[125px] placeholder:text-grey-900 placeholder:text-center border-none"
            />
            <input
              value={priceMax}
              onChange={(e) => getMax("price", e)}
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
          onClick={() => cleanFilters()}
        >
          Limpar filtros
        </button>
      </aside>
    </>
  );
}
