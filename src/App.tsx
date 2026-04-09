import { Router } from "./routes/Router";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Router />
    </>
  );
}

export default App;