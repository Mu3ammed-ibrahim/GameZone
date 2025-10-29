import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Accessories from "./Sections/Accessories";
import CustomersSay from "./Sections/CustomersSay";
import CTA from "./Sections/CTA";
import TopSelling from "./Sections/TopSelling";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TopSelling />
      <Accessories />
      <CustomersSay />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
