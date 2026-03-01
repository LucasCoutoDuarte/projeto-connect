import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doacao from "./pages/doacao/Doacao";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import Home from "./pages/home/Home";
import Mentoria from "./pages/mentoria/Mentoria";
import EventosEP from "./pages/eventosEP/EventosEP";
import Usuario from "./pages/usuario/Usuario";
import "./globalStyles.scss";
import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/eventosEP" element={<EventosEP />} />
          <Route path="/usuario" element={<Usuario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
