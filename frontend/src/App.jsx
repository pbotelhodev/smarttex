import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Auth";
import Admin from "./pages/Admin";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      {/* Rota inicial */}
      <Route path="/" element={<Home />} />

      {/* Rota admin */}
      <Route path="/smtx-entry" element={<Admin />} />

      {/* Rota login */}
      <Route path="/login" element={<Login />} />

      {/* Rota Portfolio */}
      <Route path="/portfolio" element={<Portfolio/>} />
    </Routes>
  );
}

export default App;
