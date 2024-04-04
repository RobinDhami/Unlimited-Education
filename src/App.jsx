import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/herosection/herosection"
import Service from "./Components/Services/service"
import About1 from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import { CardFooter } from "@material-tailwind/react"
function App() {
  return (
<div>
<Navbar/>
<Hero/>
<Service/>
<About1/>
<Contact/>
<CardFooter/>
</div>)
}

export default App
