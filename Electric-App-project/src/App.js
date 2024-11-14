import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import { Header } from './Component/Header';
import { About } from './Component/About';
import { Service } from './Component/Service';
import { Project } from './Component/Project';
import { Client } from './Component/Client';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import { Copyright } from './Component/Copyright';
import { Home } from './Component/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/Home" element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Client" element={<Client />} />
      </Routes>


      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
