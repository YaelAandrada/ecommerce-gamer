import { BrowserRouter, Routes, Route } from "react-router-dom"
import Categorias from "./page/categorias"
import Footer from "./components/footer"

function App() {

  return (
   <BrowserRouter>
      <Routes>
        {/* Rutas de la aplicación */}
        <Route
          path="/"
          element={
            
            <div>
              <h1 className='text-red-600'>hola</h1>
            </div>
          }
        />

        {/* Página de error 404 */}
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/footer" element={<Footer />} />

        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
