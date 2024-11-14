import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About } from './Component/About';
import { Client } from './Component/Client';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import { Header } from './Component/Header';
import { Info } from './Component/Info';
import { Offer } from './Component/Offer';
import { Slider } from './Component/Slider';
import { Home } from './Component/Home';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slider /> */}


      {/* <Offer /> */}

      <Routes>
        <Route path="/Home" element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>



      {/* <About />
      <Client />
      <Contact /> */}


      <Info />
      <Footer />
    </div>
  );
}

export default App;
