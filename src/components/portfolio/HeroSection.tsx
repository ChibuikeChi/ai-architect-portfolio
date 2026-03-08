import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const titles = [
  "Machine Learning Engineer",
  "Software Developer",
  "AI Systems Builder",
  "Data Scientist",
];

export default function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = titles[titleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setTitleIdx((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, typing, titleIdx]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(174 80% 55% / 0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in-up opacity-0 stagger-1">
          <span className="w-2 h-2 rounded-full bg-cyan-DEFAULT animate-pulse-glow" />
          <span className="section-label text-[0.7rem]">Open to Opportunities</span>
        </div>

        {/* Name */}
        <h1 className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 animate-fade-in-up opacity-0 stagger-2">
          Chibuike{" "}
          <span className="gradient-text">Chigbundu</span>
        </h1>

        {/* Typewriter title */}
        <div className="h-10 flex items-center justify-center mb-6 animate-fade-in-up opacity-0 stagger-3">
          <span className="font-mono text-lg sm:text-xl md:text-2xl text-text-secondary">
            {displayed}
            <span className="cursor-blink text-cyan-DEFAULT">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up opacity-0 stagger-4">
          Building{" "}
          <span className="text-foreground font-medium">intelligent systems</span>{" "}
          that solve real-world problems. Turning complex data into{" "}
          <span className="text-foreground font-medium">impactful technology</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 stagger-5">
          <button onClick={scrollToProjects} className="btn-primary text-base w-full sm:w-auto">
            View Projects
          </button>
          <button onClick={scrollToContact} className="btn-outline text-base w-full sm:w-auto">
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          {[
            { icon: Github, href: "https://github.com/chibuike-chigbundu", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/Chibuike-Chigbundu-O", label: "LinkedIn" },
            { icon: Mail, href: "mailto:chigbunduchibuike06@gmail.com", label: "Email" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 glass rounded-xl text-muted-foreground hover:text-cyan-DEFAULT hover:border-cyan-DEFAULT/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan-DEFAULT transition-colors animate-float"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[0.65rem] tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
