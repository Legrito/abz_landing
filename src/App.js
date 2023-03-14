import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Shared/Main";
import UsersSection from "./components/UsersSection/UsersSection";

import "./App.sass";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main>
        <Hero />
        <UsersSection />
      </Main>
    </div>
  );
}

export default App;
