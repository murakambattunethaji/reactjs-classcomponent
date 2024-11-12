import './App.css';
import { Blogs } from './Component/Blog';
import { Explores } from './Component/Explore';
import { Footers } from './Component/Footer';
import { Header } from './Component/Header';
import { Listtopics } from './Component/Listtopic';
import { Reviewss } from './Component/Reviews';
import { Statisticss } from './Component/Statisstics';
import { Subscriptionss } from './Component/Subscription';
import { Toparea, Topareas } from './Component/Toparea';
import { Workss } from './Component/Warks';
import { Welcomes } from './Component/Welcome';


function App() {
  return (
    <div className="App">
       <Header/>
       <Topareas/>
       <Welcomes/>
       <Listtopics/>
       <Workss/>
       <Explores/>
       {/* <Reviewss/> */}
       <Statisticss/>
       <Blogs/>
       <Subscriptionss/>
       <Footers/>
    </div>
  );
}

export default App;
