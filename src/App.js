import React from "react";
import Header from "./components/Header";
import AnimatedSection from "./components/AnimatedSection";
import Features from "./components/Features";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <AnimatedSection />
        <Features />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
