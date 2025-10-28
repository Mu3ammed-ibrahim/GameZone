import "./App.css";
import { Button } from "./Components/ui/button";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import TopSelling from "./Sections/TopSelling";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TopSelling />
      <Footer />
    </>
  );
}

export default App;
