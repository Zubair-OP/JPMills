import './index.css';
import Video from './Components/Video';
import Navbar from './Components/Navbar';
import Herotext from './Components/Herotext';
import About from './Components/About/About';
import Product from './Components/Products/Product';
import Customer from './Components/customers/Customer';
import World from './Components/World/World';
import Updates from './Components/Updates/Updates';
import Sustainable from './Components/Sustain/Sustainable';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className='relative h-full w-full overflow-hidden'>
      <div className='h-screen relative overflow-hidden'>
        <Video />
        <Navbar />
        <Herotext />
      </div>
      <About />
      <Product />
      <Customer />
      <World />
      <Updates />
      <Sustainable />
      <Info />
      <Footer />
    </div>
  )
}

export default App
