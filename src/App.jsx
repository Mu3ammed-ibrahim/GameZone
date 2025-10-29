import "./App.css";
import { Button } from "./Components/ui/button";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import CustomersSay from "./Sections/CustomersSay";
import TopSelling from "./Sections/TopSelling";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TopSelling />
      <CustomersSay />
      <Footer />
    </>
  );
}

export default App;
