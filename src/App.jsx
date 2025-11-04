import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 transition-colors duration-300">
      <ThemeToggle />
      <h1 className="text-3xl font-bold mt-6">Modo dinámico funcionando</h1>
      <Footer />
    </div>
  );
}

export default App;