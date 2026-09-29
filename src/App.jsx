import LayoutBase from "./components/layoutsuperior";
import PortaisLista from "./components/portaisLista";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTA PRINCIPAL: O Jornal Medieval Geral contendo todos os Portais */}
        <Route
          path="/"
          element={
            <LayoutBase>
              <PortaisLista />
            </LayoutBase>
          }
        />

        {/* Caso outros grupos criem páginas internas futuramente, as rotas entrarão abaixo */}
        {/* <Route path="/movimentos" element={<MovimentosPage />} /> */}
        {/* <Route path="/contexto" element={<ContextoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
