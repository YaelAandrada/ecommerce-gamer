import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nosotros from './page/nosotros'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        {/* Rutas de la aplicación */}
        <Route
          path="/"
          element={
            
            <div>
              <p>Hola</p>
            </div>
          }
        />

        <Route path="/nosotros" element={<Nosotros />} />

        {/* Página de error 404 */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
