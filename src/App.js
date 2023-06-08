import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Context from './context/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Context>
    </div>
  );
}

export default App; 
