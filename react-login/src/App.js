import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Main/SignUp';
import Login from './Main/Login';
import Home from './Main/Home';
import Gallary from './Main/Gallary';
import About from './Main/About';
import Services from './Main/Services';
import Header from './Main/Header';


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route exact path = '/' element={<Home />} />
            <Route exact path='/login' element = {<Login/>} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact  path="/gallery" element={<Gallary />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
