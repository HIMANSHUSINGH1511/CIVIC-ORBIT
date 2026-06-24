import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Background from "../components/Background";
import Features from "../components/Features";
import CitySkyline from "../components/CitySkyline";
import ComplaintMarkers from "../components/ComplaintMarkers";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#050B1D] min-h-screen overflow-hidden">
      <Background />
      <Navbar />
      <Hero />
      <CitySkyline />
      <ComplaintMarkers />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;