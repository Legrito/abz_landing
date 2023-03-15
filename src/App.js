import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Shared/Main";
import UsersSection from "./components/UsersSection/UsersSection";
import FormSection from "./components/FormSection/FormSection";

import "./App.sass";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    const items = document.querySelectorAll("[data-item]");

    const options = { threshold: 0.2 };
    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    items.forEach(item => {
      observer.observe(item);
    });
  };
  return (
    <div className="wrapper">
      <Header />
      <Main>
        <Hero />
        <UsersSection />
        <FormSection />
      </Main>
    </div>
  );
}

export default App;
