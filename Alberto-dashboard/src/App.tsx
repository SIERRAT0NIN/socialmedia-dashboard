import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import { Hero } from "./Components/Hero";

function App() {
  return (
    <div className="w-screen h-screen">
      <div>
        <Header />
      </div>
      <Hero />

      <div className="bg-white">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
