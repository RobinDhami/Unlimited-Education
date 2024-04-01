

function Navbar() {
  return (
    <div className='font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen'>
      <header className='bg-white'>
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div className="">
             <img src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt=".." className="w-16 cursor-pointer"></img>
            </div>
            <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul>
            <li>
            <a className="hover:text-gray-500" href="#">Products</a>
        </li>
        <li>
            <a className="hover:text-gray-500" href="#">Solution</a>
        </li>
        <li>
            <a className="hover:text-gray-500" href="#">Resource</a>
        </li>
        <li>
            <a className="hover:text-gray-500" href="#">Developers</a>
        </li>
        <li>
            <a className="hover:text-gray-500" href="#">Pricing</a>
        </li>
            </ul>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
