import Header from "./components/Header"
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <Header />
      <Home />
    </div>
  );
}

export default App;