// import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Getprobutton } from './Components/Getprobutton';
import { Headerarea } from './Components/Headerarea';
import { Pricingtable } from './Components/Pricingtable';
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

      <Getprobutton/>
      <Headerarea/>
      <Startfeature/>
      <Startfunfact/>
      <Startwhychoose/>
      <Startcalltoaction/>
      <Startfortpolio/>
      {/* <Startservice/> */}
      {/* <Pricingtable/> */}
      <Startblogarea/>
      {/* <Startclients/> */}
      <Startappoint/>
      <Startnewletterarea/>
      


      {/* <Routes>
        <Route path="/" element={<Headerarea />} />
        <Route path="/about" element={<Sliderarea />} />
        <Route path="/startappoint" element={<Startappoint />} />
      </Routes> */}




<Startfooter/>
    </div>
  );
}

export default App;
