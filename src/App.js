import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Shared/Main";
import UsersSection from "./components/UsersSection/UsersSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer";
import SuccessSection from "./components/SuccessSection";

import "./App.sass";

export const AppContext = createContext();

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    onLoad();
  }, []);

  const handleRegistered = isRegistrationSucceeded => {
    setIsRegistered(isRegistrationSucceeded);
  };

  const onLoad = () => {
    const items = document.querySelectorAll("[data-item]");

    const options = { threshold: 0.5 };
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
    <AppContext.Provider value={{ isRegistered, handleRegistered }}>
      <div className="wrapper">
        <Header />
        <Main>
          <Hero />
          <UsersSection />
          {isRegistered ? <SuccessSection /> : <FormSection />}
        </Main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
