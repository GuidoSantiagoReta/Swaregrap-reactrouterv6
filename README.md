
# REACT ROUTER V6 Y REACTBOOTSTRAP:


- __npm install react-bootstrap bootstrap__
- __npm install react-router-dom__
- __import "bootstrap/dist/css/bootstrap.min.css";__  (importar bootstrap en el index.js).
- Crear carpeta components dentro de src (para crear nuestros componentes).
- Crear carpeta layouts (para crear presentaciones que pinten la estructura básica de las distintas vistas / rutas de la aplicación).
- Empezar a crear el navbar e importar los comoponentes que vayamos a usar.

- __En reactRouter v6__ los links se configuran de la siguiente manera para no perder los estilos de reactBootstrap.

```
<Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
</Nav>

```

___importar browserRouter en el app.js___
- Estructura simple para las rutas en la versión v6 de react-router( ya no se  utiliza switch)
- Importar los componentes para utilizar en las rutas

### __App.js__

```

import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
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
        < Route path='about' element={<About />}/>
        < Route path='contact' element={<Contact />}/>
         <Route path='*' element={<Navigate replace to='/'/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


```

## Creando layouts con ReactBootstrap



## Recursos
- https://heroicons.com/ (iconos)
- uigradients
- react-icons __npm install react-icons__
- npm install animate.css --save