import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Jokenpo } from "../pages/jokenpo/jokenpo";
import { TicTacToe } from "../pages/tictactoe/tictactoe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jokenpo" element={<Jokenpo />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
    </Routes>
  );
}
