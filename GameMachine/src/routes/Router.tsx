import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Jokenpo } from "../pages/jokenpo/jokenpo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jokenpo" element={<Jokenpo />} />
    </Routes>
  );
}
