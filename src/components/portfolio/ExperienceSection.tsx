import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, FlaskConical, Code } from "lucide-react";

const experiences = [
  {
    type: "education",
    icon: GraduationCap,
    date: "Oct 2020 – Jul 2025",
    title: "BEng Mechatronics Engineering",
    company: "Bells University of Technology",
    location: "Ota, Ogun State",
    grade: "First Class Honours",
    points: [
      "Graduated with First-Class Honours in Mechatronics Engineering.",
      "Specialized in intelligent systems, automation, and machine learning integration.",
      "Final year projects focused on AI and energy systems.",
    ],
  },
  {
    type: "work",
    icon: Briefcase,
    date: "Mar 2024 – Aug 2024",
    title: "Mechatronics Engineer",
    company: "Automedics Limited",
    location: "Lagos, Nigeria",
    points: [
      "Performed advanced vehicle diagnostics on Mercedes-Benz, Toyota, BMW, Ford, and Hyundai.",
      "Automated fault data collection and pattern matching for common vehicle failure modes.",
      "Assisted in electrical fault resolution, engine diagnostics, and timing reset procedures.",
      "Documented diagnostic outcomes to build a local knowledge base for recurring faults.",
    ],
  },
  {
    type: "internship",
    icon: FlaskConical,
    date: "Aug 2023 – Oct 2023",
    title: "Industrial Training (SIWES)",
    company: "Green Fuel Limited",
    location: "Ota, Nigeria",
    points: [
      "Collected and analyzed compressor operational data — pressure, temperature, motor current.",
      "Supported mechanical maintenance: pipe welding, piston servicing, compressor overhaul.",
      "Managed inventory, waybills, and gas quantity calculations for production records.",
    ],
  },
  {
    type: "project",
    icon: Code,
    date: "2023 – 2025",
    title: "Independent ML Research & Projects",
    company: "Self-Directed",
    location: "Remote",
    points: [
      "Competed in Zindi Africa EY Urban Heat Island challenge — 85.85% model accuracy.",
      "Built LSTM emotion detection NLP model with 94% multiclass accuracy.",
      "Implemented Fuzzy Logic Energy Demand Forecasting system exploring Explainable AI.",
      "Developed RESTful APIs with Flask/FastAPI to serve ML models in production.",
    ],
  },
];

const typeColors: Record<string, string> = {
  education: "text-cyan-DEFAULT border-cyan-DEFAULT/30",
  work: "text-blue-400 border-blue-400/30",
  internship: "text-emerald-400 border-emerald-400/30",
  project: "text-violet-400 border-violet-400/30",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  work: "Work",
  internship: "Training",
  project: "Research",
};

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(sectionRef);

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 rounded-full opacity-4"
          style={{ background: "radial-gradient(circle, hsl(174 80% 55%), transparent)" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">04 — Experience</p>
          <h2 className="section-title text-4xl md:text-5xl">Journey & Growth</h2>
          <div className="divider-glow mt-4 w-24" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-DEFAULT/40 via-border to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const color = typeColors[exp.type];
              return (
                <div
                  key={i}
                  className={`relative flex gap-6 transition-all duration-700`}
                  style={{
                    transitionDelay: `${i * 120 + 200}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-20px)",
                  }}
                >
                  {/* Icon */}
                  <div className={`relative hidden md:flex flex-shrink-0 w-16 h-16 glass rounded-2xl border items-center justify-center z-10 ${color}`}>
                    <Icon size={20} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card rounded-2xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-mono text-[0.65rem] px-2 py-0.5 rounded border ${color} bg-current/5`}>
                            {typeLabels[exp.type]}
                          </span>
                          {exp.grade && (
                            <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded border border-cyan-DEFAULT/30 text-cyan-DEFAULT">
                              {exp.grade}
                            </span>
                          )}
                        </div>
                        <h3 className="font-grotesk font-bold text-foreground text-base">{exp.title}</h3>
                        <p className="text-sm text-text-secondary">{exp.company} · {exp.location}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground flex-shrink-0">{exp.date}</span>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-cyan-DEFAULT mt-1.5 text-[0.5rem]">◆</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
