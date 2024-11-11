import logo from './logo.svg';
import './App.css';
import AboutUs from './Components/About';
import Appointment from './Components/Appointment';
import Features from './Components/Feature';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Services from './Components/Service';
import Spinner from './Components/Spinner';
import Testimonials from './Components/Testimonial';
import HeaderTopBar from './Components/Topbar';
import Doctors from './Components/Team';


function App() {
  return (
    <div className="App">
    <AboutUs/>
    <Appointment/>
    <Features/>
    <Footer/>
    <Header/>
    <Navbar/>
    <Services/>
    <Spinner/>
    <Testimonials/>
    <HeaderTopBar/>
    <Doctors/>
    </div>
  );
}

export default App;
