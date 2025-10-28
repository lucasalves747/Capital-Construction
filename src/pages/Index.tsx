import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Mentor from "@/components/Mentor";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Values />
      <Mentor />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
