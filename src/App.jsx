// import { useState } from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Bundle from "./bundle";
import Form from "./Components/Activity/form"; 
import Program from "./Components/programming/Program"
import Culture from "./Components/Culture/culture" 
import Robo from "./Components/Robotics/robo"
function App() {
  // const [showForm, setShowForm] = useState(false); 


  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Bundle/>} /> 
    <Route path="/form" element={<Form/>}  />
    <Route path='/program' element={<Program/>}/>
    <Route path='/culture' element={<Culture/>}/>
    <Route path="/robo" element={<Robo/>}/>
    <Route path="/sport" element={<Sport/>}/>
    <Route path="/train" element={<Training/>}/>
    <Route path="/language" element={<Laguage/>}/>
     </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
