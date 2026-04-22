import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
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
