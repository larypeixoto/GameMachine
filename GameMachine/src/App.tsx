import { Router } from "./routes/Router";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;