// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top py-4 text-primary-content">
      <div className="navbar bg-base-100 shadow-xl rounded-box">
        <div className="navbar-start">
          <Link
              href="/"
              className="btn btn-ghost text-xl text-[#16f2b3] font-bold">
              JOAN BASCUR
          </Link>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ACERCA DE</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCIA</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">HABILIDADES</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCACIÓN</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROYECTOS</div></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;