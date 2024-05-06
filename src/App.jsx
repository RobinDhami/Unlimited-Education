// import { useState } from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Bundle from "./bundle";
import Form from "./Components/Activity/form"; 
import Program from "./Components/Sports/sports"
import Culture from "./Components/Culture/culture" 
import Robo from "./Components/Robotics/robo"
import Sport from './Components/program/program';
import Trainig from './Components/Trainig/trainig';
import Language from './Components/Language/language';
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
    <Route path="/train" element={<Trainig/>}/>
    <Route path="/language" element={<Language/>}/>
     </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
