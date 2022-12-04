import logo from "./logo.svg";
import "./App.css";

// 1 - Config react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width={200} alt="logo" />
      </header>

      <h1>React Router</h1>
      {/* Elementos a cima do BrowserRouter serão repetidos em varias paginas */}
      <BrowserRouter>
        {/* 2 Links com react router  */}
        <Navbar />

        {/* Rotas dos componentes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
