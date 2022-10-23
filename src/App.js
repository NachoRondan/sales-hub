import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicacionesHome from "./pages/PublicacionesHome";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="mis-publicaciones" element={<PublicacionesHome/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
