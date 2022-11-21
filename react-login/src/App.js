import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Main/SignUp';
import Login from './Main/Login';
import Home from './Main/Home';
import Gallary from './Main/Gallary';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element = {<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gallery" element={<Gallary />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
