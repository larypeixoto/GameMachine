type Game = {
  id: number;
  title: string;
  description: string;
  route: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Jo-ken-pô",
    description:
      "A pedra quebra a tesoura, a tesoura corta o papel e o papel embrulha a pedra.",
    route: "/jokenpo",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description:
      "Quem conseguir três símbolos em linha primeiro vence.",
    route: "/tictactoe",
  },
];
