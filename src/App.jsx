import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/herosection/herosection";
import Service from "./Components/Services/service";
import About1 from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero/>
        <Service/>
        <About1/>
        <Contact/>
          
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
