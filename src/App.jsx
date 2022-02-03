import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Poster from './components/Poster';
import UserPanel from './components/UserPanel';
import Music from './components/Music';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <UserPanel />
      <SideNav />
      <div className='content-area flex wrap around-start'>
        {/* <Poster to="/kobe" url="http://175.178.73.171/static/imgs/kobe.jpg" /> */}
        {/* <Poster to="/hit_it" url="http://175.178.73.171/static/imgs/allen.jpg" /> */}
      </div>
      <Music />
      <Footer />
    </Router>
  )
}

export default App
