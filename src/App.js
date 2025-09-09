
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import logo from "./logo.png";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About VIT" },
  { id: "club", label: "About Health Club" },
  { id: "vision", label: "Vision & Mission" },
  { id: "contact", label: "Contact" },
];

function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-primary text-white">
      <motion.img 
        src={logo} 
        alt="Health Club Logo" 
        className="w-32 h-32 mb-6" 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <p className="text-xl font-semibold">Loading Health Club Portal...</p>
    </div>
  );
}

function Header({ active }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => document.getElementById("home").scrollIntoView({behavior: "smooth"})} className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full cursor-pointer" />
          <span className="font-bold text-primary">Health Club</span>
        </button>
        <nav className="hidden md:flex gap-4">
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => document.getElementById(s.id).scrollIntoView({behavior:"smooth"})} className={active===s.id?"text-primary underline":"text-gray-700 hover:text-primary"}>
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-gray-700">{children}</p>
      </div>
    </section>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("home");
  const observersRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{ if(entry.isIntersecting) setActive(entry.target.id); });
    }, {threshold:0.5});
    sections.forEach(s=>obs.observe(s));
    observersRef.current = obs;
    return ()=>obs.disconnect();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div>
      <Header active={active} />
      <main className="pt-16">
        <Section id="home" title="Welcome to Health Club VIT Vellore">
          A student-driven wellness and fitness community at VIT Vellore.
        </Section>
        <Section id="about" title="About VIT">
          VIT Vellore is one of India’s top universities, known for academic excellence, innovation, and a vibrant campus culture.
        </Section>
        <Section id="club" title="About the Health Club">
          The Health Club promotes student wellbeing through fitness sessions, yoga, nutrition talks, and wellness workshops.
        </Section>
        <Section id="vision" title="Vision & Mission">
          Vision: To build a campus culture of holistic wellness.<br/>
          Mission: To empower students with lifelong healthy habits through inclusive and engaging activities.
        </Section>
        <Section id="contact" title="Contact Us">
          Get in touch with us via campus coordinators or official channels.
        </Section>
      </main>
    </div>
  );
}
