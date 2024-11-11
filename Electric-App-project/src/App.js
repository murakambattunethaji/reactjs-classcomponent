import logo from './logo.svg';
import './App.css';

import { Header } from './Component/Header';
import { Banner } from './Component/Banner';
import { About } from './Component/About';
import { Service } from './Component/Service';
import { Project } from './Component/Project';
import { Client } from './Component/Client';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import { Copyright } from './Component/Copyright';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Service/>
      <Project/>
      <Client/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
