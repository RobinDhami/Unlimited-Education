import "./Navbar.css"
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-200 rounded-sm border-none shadow-md">
      <nav className="flex justify-between items-center w-11/12 mx-auto lg:h-20 h-20">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://www.ued.ai/static/media/logo.2a0fc8f25f44df9934e2.png"
            alt="Logo"
          />
        </div>

        <div
          className="nav-links  md:static absolute md:min-h-fit min-h-[60vh] 
          left-0  md:w-auto lg:flex lg:items-center px-5"
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
            <a className="text-black text-lg transition duration-300 ease-in-out transform hover:text-[#F9A11B] hover:scale-105" href="#hero">
            Home
        </a>
        
            </li>
            <li>
              <a className="text-black text-lg hover:text-[#F9A11B]" href="#services">
                Programs
              </a>
            </li>
            <li>
              <a className="text-black text-lg hover:text-[#F9A11B]" href="#About">
                About
              </a>
            </li>
            <li>
              <a className="text-black text-lg hover:text-[#F9A11B]" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          
          <button onClick={()=>{
            navigate("form")
          }}
            className="bg-yellow-300 text-black px-5 py-2 rounded-lg hover:bg-yellow-400"  
          >
            Enroll Now
          </button>
         
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
