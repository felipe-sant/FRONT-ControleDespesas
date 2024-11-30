import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import CadastroPage from "../pages/cadastroPage";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}