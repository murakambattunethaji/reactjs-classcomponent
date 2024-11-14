import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Slider } from './Component/Slider';
import { Nav } from './Component/Nav';
import { Shop } from './Component/Shop';
import { About } from './Component/About';
import { Fruite } from './Component/Fruite';
import { Client } from './Component/Client';
import { Contact } from './Component/Contact';
import { Info } from './Component/Info';
import { Footer } from './Component/Footer';
import { Home } from './Component/Home';


function App() {
  return (
    <div>
      <Slider/>
      <Nav/>


      {/* <Shop/>
      <About/>
      <Fruite/>
      <Client/>
      <Contact/> */}

      <Routes>
        <Route path="/Home" element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/Fruite" element={<Fruite />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>


      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
