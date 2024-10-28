import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { HeaderInner } from './Components/HeaderInner';
import { About } from './Components/About';
import { Coronota } from './Components/Coronota';
import { Protect } from './Components/Protect';
import { Cases } from './Components/Cases';
import { Doctors } from './Components/Doctors';
import { Update } from './Components/Update';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderInner/>
      <About/>
      <Coronota/>
      <Protect/>
      <Cases/>
      <Doctors/>
      <Update/>
      <Footer/>
    </div>
  );
}

export default App;
