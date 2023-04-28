import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/User";
import logo from "../../assets/motorsshop.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useAnnouncementContext } from "../../contexts/Announcement";

export default function Header() {
  const { user, logout } = useUserContext();
  const [open, setOpen] = useState(false);
  const { getAllCars } = useAnnouncementContext();

  return (
    <header className="flex justify-between items-center  bg-whiteFixed px-4 tablet:px-16 shadow-md w-full h-20 fixed top-0 left-0  z-20">
      <Link onClick={() => getAllCars()} to="/" className="w-36 h-6">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer tablet:hidden"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        {user.name ? (
          <div
            className={`tablet:flex-row tablet:items-center tablet:pb-0 tablet:static bg-white tablet:z-auto tablet:pl-0 tablet:w-auto tablet:border-l-2 tablet:border-grey-400 tablet:bg-whiteFixed h-28 tablet:h-20 pb-12 absolute z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in flex flex-col bg-grey-200  ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <Link to="/profile">
              <div className="flex items-center mt-3 tablet:mt-0 border-b-2 pb-3 tablet:px-6 border-grey-400 tablet:border-none">
                <p className="font-['Inter, sans-serif'] text-base font-semibold tablet:ml-10 mr-2 pt-1.5 text-whiteFixed rounded-bl-3xl rounded-tr-3xl  rounded-br-3xl rounded-tl-3xl text-center w-9 h-9 bg-brand-300">
                  {user.name[0].toUpperCase()}
                </p>
                <p className="font-['Inter, sans-serif'] text-base font-normal text-grey-900 hover:text-purple-300">
                  {user.name}
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => {
                logout();
              }}
              className="flex flex-row text-grey-900 cursor-pointer pt-3 tablet:pt-0 tablet:pb-3 hover:text-purple-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <nav
            className={`tablet:flex-row tablet:items-center tablet:pb-0 tablet:static bg-white tablet:z-auto tablet:pl-0 tablet:w-auto tablet:border-l-2 tablet:border-grey-400 tablet:bg-whiteFixed h-28 tablet:h-20 pb-12 absolute z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in flex flex-col bg-grey-200 ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <Link
              to="/login"
              className="font-['Inter, sans-serif'] text-base font-semibold py-4 border-b-2 border-grey-400 tablet:border-none tablet:px-10 tablet:text-grey-900 hover:text-purple-300"
            >
              Fazer Login
            </Link>{" "}
            <Link
              to="/register"
              className="font-['Inter, sans-serif'] tex-base font-semibold pt-4 tablet:border-2 tablet:border-grey-400 tablet:px-5  tablet:h-12	tablet:pt-2.5 hover:text-purple-300"
            >
              Cadastrar
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
