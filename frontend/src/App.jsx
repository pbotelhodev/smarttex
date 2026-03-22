import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Auth";
import Admin from "./pages/Admin";
import Portfolio from "./pages/Portfolio";
import ProjectView from "./pages/ProjectView";

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
      <Route path="/portfolio" element={<Portfolio />} />

      {/* Rota de visualização dos projetos */}
      <Route path="/portfolio/projetos" element={<ProjectView />} />
    </Routes>
  );
}

export default App;
