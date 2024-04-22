// import { useState } from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Bundle from "./bundle";
import Form from "./Components/Activity/form"; 

function App() {
  // const [showForm, setShowForm] = useState(false); 


  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Bundle/>} /> 
    <Route path="/form" element={<Form/>}  />
     </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
