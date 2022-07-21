// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>

      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/auth/login' element={<Auth login />} />
        <Route path='/auth/register' element={<Auth register />} />
      </Routes>

    </Router>
    
  );
}

export default App;