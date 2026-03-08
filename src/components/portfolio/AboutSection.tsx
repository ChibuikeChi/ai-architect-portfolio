import { useEffect, useRef, useState } from "react";
import { MapPin, GraduationCap, Cpu, Zap } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const timeline = [
  {
    year: "2020",
    title: "Started Mechatronics Engineering",
    desc: "Enrolled at Bells University, beginning the journey of merging hardware and software intelligence.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Industrial Training – Green Fuel",
    desc: "Gained hands-on experience in industrial operations, data collection, and mechanical systems.",
    icon: Cpu,
  },
  {
    year: "2024",
    title: "ML & AI Deep Dive",
    desc: "Pivoted focus to machine learning — building models with TensorFlow, PyTorch, and Scikit-learn.",
    icon: Zap,
  },
  {
    year: "2024",
    title: "Mechatronics Engineer – Automedics",
    desc: "Applied engineering expertise in automotive diagnostics and intelligent fault detection systems.",
    icon: Cpu,
  },
  {
    year: "2025",
    title: "First-Class Graduate",
    desc: "Graduated with First Class Honours. Built multiple ML projects including NLP, UHI mapping, and Fuzzy Logic systems.",
    icon: GraduationCap,
  },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(174 80% 55%), transparent)" }} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">01 — About</p>
          <h2 className="section-title text-4xl md:text-5xl">Who I Am</h2>
          <div className="divider-glow mt-4 w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo + bio */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-DEFAULT/40 to-transparent blur-lg" />
              <img
                src={profileImg}
                alt="Chibuike Chigbundu"
                className="relative w-64 h-64 object-cover rounded-2xl border border-border"
              />
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 border border-cyan-DEFAULT/20">
                <p className="font-mono text-xs text-cyan-DEFAULT">@chibuike.dev</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
              <MapPin size={14} className="text-cyan-DEFAULT" />
              <span>Ota, Ogun State, Nigeria</span>
            </div>

            <p className="text-text-secondary leading-relaxed text-base mb-4">
              I'm a <span className="text-foreground font-medium">first-class Mechatronics Engineering graduate</span> with a deep
              passion for machine learning and intelligent systems. I bridge the gap between hardware intuition and software intelligence
              to build solutions that matter.
            </p>
            <p className="text-text-secondary leading-relaxed text-base mb-6">
              From classifying Urban Heat Islands using satellite imagery to building LSTM emotion-detection networks achieving{" "}
              <span className="text-cyan-DEFAULT font-medium">94% accuracy</span>, I'm driven by the challenge of making machines
              understand the world — and using those insights to solve real problems.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Model Accuracy", value: "94%" },
                { label: "Projects Built", value: "5+" },
                { label: "Frameworks", value: "8+" },
                { label: "Graduating", value: "1st Class" },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card rounded-xl p-4">
                  <p className="text-2xl font-grotesk font-bold gradient-text">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="font-grotesk font-semibold text-lg text-foreground mb-8">Journey</h3>
            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 timeline-line" />
              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`relative flex gap-6 transition-all duration-500`}
                      style={{ transitionDelay: `${i * 100 + 400}ms` }}
                    >
                      <div className="relative flex-shrink-0 w-10 h-10 glass rounded-full border border-cyan-DEFAULT/30 flex items-center justify-center z-10">
                        <Icon size={16} className="text-cyan-DEFAULT" />
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-mono text-xs text-cyan-DEFAULT">{item.year}</span>
                          <span className="text-xs text-muted-foreground">—</span>
                        </div>
                        <h4 className="font-grotesk font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
