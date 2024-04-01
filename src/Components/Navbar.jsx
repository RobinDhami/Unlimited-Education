import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black rounded-sm border-none shadow-sm shadow-[black] ">
      <nav className=" flex justify-between items-center w-[92%] mx-auto lg:h-20 h-20 ml-5">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://i.pinimg.com/originals/91/53/93/9153939d7544582c1fd8c692b626958d.png"
            
          />
        </div>
                <div className="hidden lg:block flex items-centern ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
          <button className="ml-2 bg-[#a6c1ee] text-white px-4 py-2 rounded-md hover:bg-[#87acec]">
            Search
          </button>
        </div>

        <div
          className={`nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] 
          left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="text-white hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-500" href="#">
                Developers
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
            onClick={toggleMenu}
          >
            Sign in
          </button>
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? 'close' : 'menu'}
            className="text-3xl cursor-pointer lg:hidden "
            style={{ color: 'white' }}></ion-icon>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
