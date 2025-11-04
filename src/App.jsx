
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

        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
