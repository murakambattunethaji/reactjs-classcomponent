import './App.css';
import { About } from './Component/About';
import { Client } from './Component/Client';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import { Header } from './Component/Header';
import { Info } from './Component/Info';
import { Offer } from './Component/Offer';
import { Slider } from './Component/Slider';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      {/* <Offer/> */}
      <About/>
      <Client/>
      <Contact/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
