import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <Marquee />
      <Skills />
      <Projects />
      <Pricing />
      <Contact />

      <footer style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        background: 'var(--bg-secondary)'
      }}>
        <p>© {new Date().getFullYear()} Flo.Dev. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
