// import './App.css';
import { Getprobutton } from './Components/Getprobutton';
import { Headerarea } from './Components/Headerarea';
import { Preloder } from './Components/Preloder';
import { Pricingtable } from './Components/Pricingtable';
import { Sliderarea } from './Components/Sliderarea';
import { Startappoint } from './Components/Startappoint';
import { Startblogarea } from './Components/Startblogarea';
import { Startcalltoaction } from './Components/Startcalltoaction';
import { Startclients } from './Components/Startclients';
import { Startfeature } from './Components/Startfeature';
import { Startfooter } from './Components/Startfooterarea';
import { Startfortpolio } from './Components/Startfortpolio';
import { Startfunfact } from './Components/Startfunfact';
import { Startnewletterarea } from './Components/Startnewletterarea';
import { Startservice } from './Components/Startservice';
import { Startshudulearea } from './Components/Startshudulearea';
import { Startwhychoose } from './Components/Startwhychoose';



function App() {
  return (
    <div className="App">
      {/* <Preloder /> */}
      <Getprobutton/>
      <Headerarea/>
      <Sliderarea/>
      <Startshudulearea/>
      <Startfeature/>
      <Startfunfact/>
      <Startwhychoose/>
      <Startcalltoaction/>
      <Startfortpolio/>
      <Startservice/>
      <Pricingtable/>
      <Startblogarea/>
      <Startclients/>
      <Startappoint/>
      <Startnewletterarea/>
      <Startfooter/>
    </div>
  );
}

export default App;
