import logo from './logo.svg';
import './App.css';
import { Slider } from './Component/Slider';
import { Nav } from './Component/Nav';
import { Shop } from './Component/Shop';
import { About } from './Component/About';
import { Fruite } from './Component/Fruite';
import { Client } from './Component/Client';
import { Contact } from './Component/Contact';
import { Info } from './Component/Info';
import { Footer } from './Component/Footer';

function App() {
  return (
    <div>
      <Slider/>
      <Nav/>
      <Shop/>
      <About/>
      <Fruite/>
      <Client/>
      <Contact/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
