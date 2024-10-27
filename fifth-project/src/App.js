import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { HeaderInner } from './Components/HeaderInner';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderInner/>
      <About/>
    </div>
  );
}

export default App;
