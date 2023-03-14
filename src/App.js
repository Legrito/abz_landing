import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Shared/Main";

import "./App.sass";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main>
        <Hero />
      </Main>
    </div>
  );
}

export default App;
