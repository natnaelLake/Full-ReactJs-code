import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Main/SignUp';
import Login from './Main/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Login/>} />
          <Route path="/signup" element={ <SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
