
import React from 'react';

import Navbar from './components/Navbar';

function App(){
  return (
    <div clasName="App">

    </div>
  )
}

function App() {

  return (
   <BrowserRouter>
      <Routes>
        {/* Rutas de la aplicación */}
        <Route
          path="/"
          element={
            
            <div>
              
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
