import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Patientlogin from './components/Patientlogin';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/patientlogin' element={<Patientlogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
