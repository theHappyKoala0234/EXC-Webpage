import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow z-50">
        <img
          src="/logo.png"
          alt="Health Club Logo"
          className="h-12 cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <h1 className="text-xl font-bold">VIT Vellore – Health & Wellness Club</h1>
      </header>

      {/* Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Sections */}
      <main className="pt-20 scroll-smooth">
        <section id="home" className="h-screen flex items-center justify-center bg-gray-50 text-3xl font-bold">
          Welcome to Health & Wellness Club, VIT Vellore
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 text-center">
          <h2 className="text-4xl font-bold mb-6">About VIT</h2>
          <p className="max-w-3xl mb-10 text-lg">
            Vellore Institute of Technology (VIT), Vellore, is one of India’s premier institutions of higher learning. 
            It is renowned for excellence in education, research, innovation, and holistic student development. 
            VIT provides an environment that fosters creativity, critical thinking, and leadership, preparing students 
            to meet global challenges with confidence.
          </p>

          <h2 className="text-4xl font-bold mb-6">About the Health & Wellness Club</h2>
          <p className="max-w-3xl mb-10 text-lg">
            The Health & Wellness Club of VIT Vellore is a student-driven initiative aimed at promoting healthy living, 
            physical fitness, mental well-being, and holistic growth. The club conducts awareness campaigns, wellness sessions, 
            fitness events, and health check-ups, empowering students to lead a balanced lifestyle amidst academic rigor.
          </p>

          <h2 className="text-4xl font-bold mb-6">Vision</h2>
          <p className="max-w-3xl mb-10 text-lg">
            To create a vibrant and health-conscious community at VIT that prioritizes wellness, balance, and fitness 
            as integral components of student life.
          </p>

          <h2 className="text-4xl font-bold mb-6">Mission</h2>
          <p className="max-w-3xl text-lg">
            Our mission is to empower students with knowledge, opportunities, and a supportive environment 
            to embrace healthier lifestyles, enhance mental resilience, and foster physical and emotional well-being 
            through engaging events, collaborations, and continuous learning.
          </p>
        </section>

        <section id="board-members" className="h-screen flex items-center justify-center bg-gray-200 text-3xl font-bold">
          Board Members Section
        </section>
        <section id="faculty-coordinator" className="h-screen flex items-center justify-center bg-gray-300 text-3xl font-bold">
          Faculty Coordinator Section
        </section>
        <section id="gravitas" className="h-screen flex items-center justify-center bg-gray-400 text-3xl font-bold">
          Gravitas Section
        </section>
        <section id="riviera" className="h-screen flex items-center justify-center bg-gray-500 text-3xl font-bold text-white">
          Riviera Section
        </section>
        <section id="blogs" className="h-screen flex items-center justify-center bg-gray-600 text-3xl font-bold text-white">
          Blogs Section
        </section>
        <section id="major-events" className="h-screen flex items-center justify-center bg-gray-700 text-3xl font-bold text-white">
          Major Events Section
        </section>
        <section id="contact" className="h-screen flex items-center justify-center bg-gray-800 text-3xl font-bold text-white">
          Contact Section
        </section>
      </main>
    </div>
  );
}

export default App;
