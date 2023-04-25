import React from "react";
import Home from "./pages/home/Home";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import List from "./pages/list/List";
import Pitch from "./pages/pitch/Pitch";

function App() {
  return (
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/football" element={<List/>}/>
             <Route path="/football/:id" element={<Pitch/>}/>

         </Routes>
     </BrowserRouter>
  );
}

export default App;
