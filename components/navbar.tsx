import Image from "next/image";
import logo from "../public/logo.png";
import hamburger from "../public/hamburger.png";

function tgltab() {
  const elmt = document.getElementById("navbar-default");
  elmt?.classList.toggle("hidden");
}
const Navbar = () => (
  <>
    <div className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="./" className="flex items-center">
          <picture>
            <Image id="logo" src={logo} width={32} alt="LOGO" />
          </picture>
          <span
            id="logo-font"
            className="ml-3 self-center text-2xl font-mono font-bold whitespace-nowrap dark:text-white"
          >
            @seung-u
          </span>
        </a>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={tgltab}
        >
          <span className="sr-only">Open Main Menu</span>
          <picture>
            <Image src={hamburger} width={24} alt="MORE" />
          </picture>
        </button>

        <div id="navbar-default" className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="./"
                className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.seung-u.com"
                className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);
export default Navbar;
