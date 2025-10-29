import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./page/Error404.jsx";


function App() {

  return (
   <BrowserRouter>
      <Routes>
        {/* Rutas de la aplicación */}
        <Route
          path="/"
          element={
            
            <div>
              <h1>hola</h1>
            </div>
          }
        />

        {/* Página de error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
