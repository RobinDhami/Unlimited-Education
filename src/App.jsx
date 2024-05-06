// import { useState } from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Bundle from "./bundle";
import Form from "./Components/Activity/form"; 
import Program from './Components/Programming/Program';
import Culture from "./Components/culture" 

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
     </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
