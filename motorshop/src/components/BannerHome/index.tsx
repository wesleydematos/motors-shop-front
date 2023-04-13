export default function BannerHome() {
  return (
    <section className="w-full h-[35.625rem] relative overflow-hidden">
      <img
        src="https://i.imgur.com/hTMenAw.jpeg"
        alt=""
        className="h-full object-contain scale-150 min-[891px]:scale-100 min-[891px]:object-none  mx-auto"
      />

      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-b from-black-opacity-30  to-black-400 text-whiteFixed text-center tablet:flex tablet:flex-col tablet:justify-center">
        <h2 className="text-4xl laptop:text-6xl font-bold mt-20 tablet:mt-0">
          Motor Shop
        </h2>
        <p className="text-2xl laptop:text-5xl font-semibold">
          A melhor plataforma de anúncios de carros do país
        </p>
      </div>
    </section>
  );
}
