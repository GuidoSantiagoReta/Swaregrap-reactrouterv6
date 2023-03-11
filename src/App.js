import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./layouts/NavBar";
import AboutUs from "./components/AboutUs";
import ServicesWeb from "./components/webservices/WebServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            {" "}
            {/* ruta raíz */}
            {/* rutas relativas */}
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<ServicesWeb />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
