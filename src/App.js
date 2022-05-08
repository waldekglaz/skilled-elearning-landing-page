import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
