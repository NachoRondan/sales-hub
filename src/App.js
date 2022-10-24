import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicacionesHome from "./pages/PublicacionesHome";
import SeleccionarCategoria from "./components/SeleccionarCategoria";
import SeleccionarSubcategoria from "./components/SeleccionarSubCategoria";
import { DetalleProducto } from "./components/DetalleProducto";
import { SeleccionarPlataformas } from "./components/SeleccionarPlataformas";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="mis-publicaciones" element={<PublicacionesHome/>}/>
        <Route path="nueva-publicacion">
          <Route path='categoria' element={<SeleccionarCategoria/>}/>
          <Route path='subcategoria' element={<SeleccionarSubcategoria/>}/>
          <Route path='detalle-producto' element={<DetalleProducto/>}/>
          <Route path='plataformas' element={<SeleccionarPlataformas/>}/>
        </Route> 
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
