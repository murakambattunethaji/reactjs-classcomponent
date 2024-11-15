import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Blogs } from './Component/Blog';
import { Explores } from './Component/Explore';
import { Footers } from './Component/Footer';
import { Header } from './Component/Header';
import { Statisticss } from './Component/Statisstics';
import { Subscriptionss } from './Component/Subscription';
import { Toparea } from './Component/Toparea';
import { Workss } from './Component/Warks';
import { Home } from './Component/Home';


function App() {
  return (
    <div className="App">


      <Header />
      <Toparea />

            
      {/* <Welcomes /> */}
      {/* <Listtopics /> */}
      {/* <Workss /> */}
      {/* <Explores /> */}
      {/* <Statisticss /> */}
      {/* <Blogs /> */}


      <Routes>
        <Route path="/Home" element={<Home />} />

        <Route path="/Workss" element={<Workss />} />
        <Route path="/Explores" element={<Explores />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Statisticss" element={<Statisticss />} />

      </Routes>



      <Subscriptionss />
      <Footers />
    </div>
  );
}

export default App;
