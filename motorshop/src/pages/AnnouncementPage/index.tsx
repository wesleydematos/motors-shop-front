import CarPhoto from "../../components/CarPhotos";
import Header from "../../components/Header";
import car from "../../assets/car.png";
import Footer from "../../components/Footer";
import { useUserContext } from "../../contexts/User";

export default function AnnouncementPage() {
  const user = useUserContext().user;

  return (
    <>
      <div className="bg-grey-300 flex flex-col min-h-screen justify-between">
        <Header />
        <div>
          <div className="h-[36rem] mt-20 bg-brand-400" />
          <div className="w-11/12 flex flex-col desktop:flex-row gap-[20px] justify-center mx-auto -mt-[33.5rem]">
            <div className="w-[46rem] flex flex-wrap justify-evenly top-[120px]">
              <section className="w-[45rem] h-[23rem] bg-grey-100 rounded flex items-center justify-center">
                <img src={car} alt="Car View" className="w-[27rem] h-64" />
              </section>
              <section className="w-[45rem] h-60 bg-grey-100 rounded flex justify-center mt-5">
                <div className="w-4/5 flex flex-col justify-evenly">
                  <h2 className="font-lexend font-semibold text-xl text-grey-1000">
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                  </h2>
                  <div className="flex justify-between mt-2">
                    <section className="flex">
                      <span className="w-10 h-6 bg-brand-100 rounded flex items-center justify-center text-brand-400 font-inter font-medium text-sm">
                        2013
                      </span>
                      <span className="w-10 h-6 bg-brand-100 rounded flex items-center justify-center text-brand-400 font-inter font-medium text-sm ms-2">
                        0 KM
                      </span>
                    </section>
                    <h3 className="text-grey-1000 font-lexend font-medium text-base">
                      R$ 00.000,00
                    </h3>
                  </div>
                  <button className="w-[6.3rem] h-9 bg-brand-400 rounded text-grey-100 font-inter font-semibold text-sm hover:bg-brand-200 duration-500">
                    Comprar
                  </button>
                </div>
              </section>
              <section className="w-[45rem] h-56 bg-grey-100 rounded flex justify-center mt-5">
                <div className="w-4/5 flex flex-col justify-evenly">
                  <h2 className="font-lexend font-semibold text-xl text-grey-1000">
                    Descrição
                  </h2>
                  <p className="font-inter font-normal text-base text-grey-900">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </section>
            </div>
            <div className="w-[27rem] flex flex-wrap justify-evenly top-[120px]">
              <section className="w-[27rem] h-96 bg-grey-100 rounded flex flex-col items-center justify-center">
                <div className="w-4/5 h-full flex flex-col justify-evenly">
                  <p className="font-lexend font-semibold text-xl text-grey-1000 ps-1">
                    Fotos
                  </p>
                  <div className="w-[22rem] h-60 flex flex-wrap justify-evenly items-center">
                    <CarPhoto />
                    <CarPhoto />
                    <CarPhoto />
                    <CarPhoto />
                    <CarPhoto />
                    <CarPhoto />
                  </div>
                </div>
              </section>
              <section className="w-[27rem] h-[25rem] bg-grey-100 rounded flex flex-col items-center justify-center mt-5 text-center">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://images.stylight.net/image/upload/t_web_post_500x667/q_auto,f_auto/post-c798e472ed3fa9d95f35a0aa8a04c5410f22ca7062fd77278b8fe97c.jpg"
                  alt="profile pic"
                />
                <h2 className="font-lexend font-semibold text-xl text-grey-1000 mt-5">
                  {user.name}
                </h2>
                <p className="font-inter font-normal text-base text-grey-900 mt-5">
                  {user.description}
                </p>
                <button className="w-52 h-12 bg-grey-1100 rounded text-grey-100 font-lexend font-semibold text-sm hover:bg-grey-1000 duration-500 mt-5">
                  Ver todos anúncios
                </button>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
