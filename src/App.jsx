import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { BrowserRouter, Routes, Route } from 'react-router'
import Administrador from "./page/Administrador";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* otras rutas */}
        <Route path="/administrador" element={<Administrador />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;