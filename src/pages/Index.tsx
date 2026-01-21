import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
