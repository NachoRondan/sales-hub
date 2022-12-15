import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PublicacionesHome from "./pages/PublicacionesHome";
import Perfil from "./pages/Perfil";
/* import Dashboard from "./pages/dashboard/Dashboard"; */
import LandingHome from "./pages/LandingHome";

import SeleccionarCategoria from "./components/SeleccionarCategoria";
import SeleccionarSubcategoria from "./components/SeleccionarSubCategoria";
import DetalleProducto from "./components/DetalleProducto";
import SeleccionarPlataformas from "./components/SeleccionarPlataformas";
import PublicacionesActivas from "./pages/PublicacionesActivas";

import Dashboard from './pages/dashboard/Dashboard';
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<LandingHome />} />
        <Route path="login" element={<Login />} />
        <Route path="mi-perfil" element={<Perfil />} />
        <Route path="publicaciones-activas" element={<PublicacionesActivas />} />
        <Route path="mis-publicaciones" element={<PublicacionesHome />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="nueva-publicacion">
          <Route path="categoria" element={<SeleccionarCategoria />} />
          <Route path="subcategoria" element={<SeleccionarSubcategoria />} />
          <Route path="detalle-producto" element={<DetalleProducto />} />
          <Route path="plataformas" element={<SeleccionarPlataformas />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
