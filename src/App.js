
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import NavBar from './layouts/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>  {/* ruta raíz */}
       
        {/* rutas relativas */}
        <Route index element={<Home />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='services' element={<Services />}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
