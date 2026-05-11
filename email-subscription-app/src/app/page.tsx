import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <Hero />
      <Categories />
      <Benefits />
      <CTASection />
      <Footer />
    </div>
  );
}
