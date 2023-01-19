import Header from "./Header";
import ImageSection from "./ImageSection";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Register from "../Assets/Forms/Register";
import Login from "../Assets/Forms/Login";
import Dashboard from "./Dashboard"; 

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
