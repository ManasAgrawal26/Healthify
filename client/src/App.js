import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Patientlogin from './components/Patientlogin';
import Patientmain from './components/Patientmain';
import Doctormain from './components/Doctormain';
import Labmain from './components/Labmain';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/patientlogin' element={<Patientlogin/>}/>
      <Route path='/patientmain' element={<Patientmain/>}/>
      <Route path='/doctormain' element={<Doctormain/>}/>
      <Route path='/labmain' element={<Labmain/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
