import logo from "../../assets/img/logo.png";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-80 laptop:h-36 bg-grey-1100 flex flex-col items-center laptop:flex laptop:flex-row laptop:place-content-around">
        <div className="w-1/3 h-full flex items-center justify-center">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <p className="font-inter font-normal text-sm whitespace-nowrap text-grey-100">
            © 2022 - Todos os direitos reservados.
          </p>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <button
            className="w-14 h-14 rounded flex justify-center items-center bg-grey-1000 hover:bg-grey-900 text-grey-100 duration-500"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <ChevronUpIcon className="w-6 h-6 " />
          </button>
        </div>
      </footer>
    </>
  );
}
