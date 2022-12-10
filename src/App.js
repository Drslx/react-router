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
import Info from "./pages/Info";
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width={200} alt="logo" />
      </header>

      <h1>React Router</h1>
      {/* Elementos a cima do BrowserRouter serão repetidos em varias paginas */}
      <BrowserRouter>
        {/*  Links para home e about na navbar com react router  */}
        <Navbar />

        <Routes>
          {/* Rotas dos componentes */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />

          {/* Nested routes */}
          <Route path="/products/:id/info" element={<Info />}></Route>
     
     
     {/* No match route */}
     <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
