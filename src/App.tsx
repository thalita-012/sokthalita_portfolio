/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  Palette, 
  Mail, 
  MapPin,
  ChevronRight,
  Download,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

// --- Components ---

const Navbar = ({ isLightMode, onToggleTheme }: { isLightMode: boolean; onToggleTheme: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-xl font-bold tracking-tighter">
        Sok<span className="text-brand-orange">Thalita</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#home" className="text-brand-orange">Home</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
          className="p-2 text-white/70 hover:text-white transition-colors"
        >
          {isLightMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a
          href="/resume.pdf"
          download="SOK Thalita Resume.pdf"
          className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-orange/20 flex items-center gap-2"
        >
          Download Resume <Download size={16} />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] orange-halo animate-halo-pulse pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for Projects
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Crafting Digital <br />
          <span className="text-brand-orange">Experiences</span> with <br />
          Precision.
        </h1>
        <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
          Junior Web Developer focused on building high-performance 
          applications with intuitive design. Based in Phnom Penh, I am 
          dedicated to modern technologies and user-centric solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#experience" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand-orange/20">
            VIEW WORK
          </a>
          <a href="#contact" className="border border-brand-orange/30 hover:border-brand-orange text-white px-8 py-4 rounded-full font-bold transition-all bg-white/5 backdrop-blur-sm">
            HIRE ME
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative aspect-square flex items-center justify-center"
      >
        <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl">
          <img 
            src="/profile.jpg" 
            alt="Sok Thalita Profile" 
            className="w-full h-full object-cover transition-all duration-700" 
          />
        </div>
        {/* Decorative corner accents matching the screenshot */}
        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-orange/40 rounded-tl-[3rem]" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-orange/40 rounded-br-[3rem]" />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-black/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm font-bold text-white/50 uppercase tracking-[0.2em] mb-4">About Me</h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
            I am a Cambodian female developer who is energetic, 
            responsible, and hopeful to learn new skills. Based in 
            Phnom Penh, I am a hardworking person with good 
            communication skills and always motivated to achieve 
            personal and professional growth.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-surface-card border border-white/5 hover:border-brand-orange/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Architecture</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Scalable system design and cloud infrastructure optimization.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-surface-card border border-white/5 hover:border-brand-orange/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                <Palette size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">UI/UX Design</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Modern, responsive, and accessible interfaces with focus on UX.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="relative rounded-3xl overflow-hidden h-[300px]">
             <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600" className="w-full h-full object-cover grayscale brightness-75" />
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[300px] mt-12 bg-brand-orange p-8 flex flex-col justify-end">
             <div className="text-4xl font-serif text-black/20 absolute top-4 left-4">"</div>
             <p className="text-white font-medium text-lg leading-snug italic relative z-10 font-serif">
               Design is not just what it looks like and feels like. Design is how it works.
             </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[300px] col-span-2">
             <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200" className="w-full h-full object-cover grayscale brightness-75" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsCard = ({ icon: Icon, title, desc, tag }: any) => (
  <div className="p-8 rounded-2xl bg-surface-card border border-white/5 hover:border-brand-orange/30 transition-all flex flex-col items-start group">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
        <Icon size={20} />
      </div>
      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{tag}</span>
    </div>
    <h3 className="text-white/60 font-medium mb-1">{title}</h3>
  </div>
);

const Competencies = () => (
  <section id="skills" className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
        <p className="text-white/50 text-sm tracking-wide">Mastering the tools of the trade to build the future of the web.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <SkillsCard icon={Code2} title="HTML, CSS, SASS" tag="UI" />
        <SkillsCard icon={Code2} title="JavaScript, Node.js, PHP, MySQL" tag="JS" />
        <SkillsCard icon={Code2} title="TypeScript (OOP), Data Analyze" tag="TS" />
        <SkillsCard icon={Cloud} title="AWS, GitHub, Jira" tag="Cloud" />
        <SkillsCard icon={Palette} title="Figma, Canva" tag="Design" />
      </div>

      <div className="flex justify-center flex-wrap gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
         <Code2 size={40} />
         <Cloud size={40} />
         <Layout size={40} />
         <Database size={40} />
         <Palette size={40} />
      </div>
    </div>
  </section>
);

const JourneyItem = ({ date, title, subtitle, desc, tags }: any) => (
  <div className="grid md:grid-cols-[1fr,2fr] gap-12 py-12 border-b border-white/5 last:border-0 group">
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] mb-4">{date}</span>
      <h3 className="text-xl font-bold mb-1 group-hover:text-brand-orange transition-colors">{title}</h3>
      <p className="text-sm text-white/40">{subtitle}</p>
    </div>
    <div>
      <p className="text-white/60 leading-relaxed mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-bold uppercase tracking-wider text-white/40 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProfessionalJourney = () => (
  <section id="experience" className="py-32 bg-black/30">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-sm font-bold text-white/50 uppercase tracking-[0.2em] mb-12">Professional Journey</h2>
      
      <div className="space-y-4">
        <JourneyItem 
          date="FEB 2026 - APR 2026"
          title="Developer"
          subtitle="Virtual Company 1 Project - EliLibrary"
          desc="Worked with development team on Laravel, ReactJS, CSS, GitHub, AWS, Jira. Managed Backend structure, content, deployment, and server handling on AWS."
          tags={['LARAVEL', 'REACTJS', 'AWS', 'JIRA']}
        />
        <JourneyItem 
          date="DEC 2025 - JAN 2026"
          title="Project Manager & FE Developer"
          subtitle="JavaScript Project - Quiz App"
          desc="Worked with development team on HTML, CSS, JS, GitHub, Vercel. Managed website design, content, deployment, and task division."
          tags={['HTML', 'CSS', 'JS', 'VERCEL']}
        />
        <JourneyItem 
          date="OCT 2025 - NOV 2025"
          title="BE & FE Developer"
          subtitle="Algorithms Project - Movie Management System"
          desc="Individual project: Worked on Django Framework, HTML, CSS, JS, GitHub. Managed design, content, and development."
          tags={['DJANGO', 'HTML', 'JS']}
        />
        <JourneyItem
          date="SEP 2025 - OCT 2025"
          title="Individual Developer"
          subtitle="Web Design Project - Ecommerce - DLK CAMBODIA"
          desc="Worked on HTML, CSS, GitHub, Vercel. Managed website design, content, and development."
          tags={['HTML', 'CSS', 'VERCEL']}
        />
        <JourneyItem
          date="MAY 2025 - JUNE 2025"
          title="UI Designer"
          subtitle="UI Design Project - Elearning"
          desc="Team project: Worked on Figma. Managed website design, content, and UI design."
          tags={['FIGMA', 'UI/UX']}
        />
      </div>
    </div>
  </section>
);

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "Portfolio visitor";
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim() || "Portfolio inquiry";
    const message = formData.get("message")?.toString().trim();
    const body = [
      `Name: ${name}`,
      email ? `Email: ${email}` : "",
      "",
      message || "Hello, I would like to contact you about a project.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:thalita.sok@student.passerellesnumeriques.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
  <section id="contact" className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Let's build something <br />
            <span className="text-brand-orange">exceptional.</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my 
            best to get back to you!
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Email</p>
                <p className="text-lg font-medium">thalita.sok@student.passerellesnumeriques.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Location</p>
                <p className="text-lg font-medium leading-tight">
                  Street 371, Phum Tropeang Chhuk, Sangkat Terk Thla, <br />
                  Khan sen Sok, Phnom Penh
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-surface-card border border-white/5 shadow-2xl relative overflow-hidden group">
          {/* Subtle glow in card */}
          <div className="absolute top-0 right-0 w-64 h-64 orange-halo -translate-y-1/2 translate-x-1/2 opacity-20 group-hover:opacity-40 transition-opacity" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                <input name="name" type="text" placeholder="John Doe" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange/50 outline-none transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                <input name="email" type="email" placeholder="john@example.com" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange/50 outline-none transition-all text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Subject</label>
              <input name="subject" type="text" placeholder="Project Inquiry" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange/50 outline-none transition-all text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Message</label>
              <textarea name="message" rows={4} placeholder="Tell me about your project..." className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange/50 outline-none transition-all text-sm resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-brand-orange/20">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5 mt-20">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-xl font-bold tracking-tighter">
        Sok<span className="text-brand-orange">Thalita</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
        <p>© 2024 Sok Thalita. Built with Precision.</p>
        <p>© 2024 Sok Thalita. Built with Precision.</p>
        <p>© 2024 Sok Thalita. Built with Precision.</p>
        <p>© 2024 Sok Thalita. Built with Precision.</p>
      </div>
      <div className="flex gap-6 text-white/40">
        <Github size={20} className="hover:text-brand-orange transition-colors cursor-pointer" />
        <Linkedin size={20} className="hover:text-brand-orange transition-colors cursor-pointer" />
        <Twitter size={20} className="hover:text-brand-orange transition-colors cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  return (
    <div className={`min-h-screen bg-surface-dark selection:bg-brand-orange selection:text-white ${isLightMode ? "theme-light" : "theme-dark"}`}>
      <Navbar
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode((current) => !current)}
      />
      <main>
        <Hero />
        <About />
        <Competencies />
        <ProfessionalJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
