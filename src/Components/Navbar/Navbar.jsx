import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-yellow-400 to-red-600 rounded-sm border-none shadow-md">
      <nav className="flex justify-between items-center w-11/12 mx-auto lg:h-20 h-20">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://i.pinimg.com/originals/91/53/93/9153939d7544582c1fd8c692b626958d.png"
            alt="Logo"
          />
        </div>

        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] 
          left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="text-black text-lg hover:text-white" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-black text-lg hover:text-white" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-black text-lg hover:text-white" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-black text-lg hover:text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="bg-yellow-400 text-black px-5 py-2 rounded-full hover:bg-yellow-500"
            onClick={toggleMenu}
          >
            Sign in
          </button>
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? 'close' : 'menu'}
            className="text-3xl cursor-pointer lg:hidden sm:block"
            style={{ color: 'white' }}
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
