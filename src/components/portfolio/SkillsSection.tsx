import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    category: "Machine Learning & AI",
    icon: "🧠",
    skills: [
      { name: "Deep Learning (ANN, CNN, LSTM)", level: 88 },
      { name: "LightGBM / XGBoost", level: 90 },
      { name: "Scikit-learn", level: 92 },
      { name: "Anomaly Detection / Clustering", level: 82 },
      { name: "NLP & Sequence Modeling", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚡",
    skills: [
      { name: "TensorFlow / Keras", level: 86 },
      { name: "PyTorch", level: 78 },
      { name: "NumPy / Pandas", level: 94 },
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "GeoPandas / Rasterio", level: 75 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "🔧",
    skills: [
      { name: "Python", level: 93 },
      { name: "Flask / FastAPI", level: 84 },
      { name: "RESTful API Design", level: 86 },
      { name: "Model Serving & Deployment", level: 80 },
      { name: "Streamlit", level: 88 },
    ],
  },
  {
    category: "Data & Engineering",
    icon: "📊",
    skills: [
      { name: "Feature Engineering", level: 90 },
      { name: "Data Preprocessing Pipelines", level: 91 },
      { name: "Hyperparameter Tuning", level: 85 },
      { name: "Cross-validation & Evaluation", level: 88 },
      { name: "Domain Adaptation", level: 78 },
    ],
  },
];

const techBadges = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "NumPy",
  "Pandas", "Flask", "FastAPI", "Streamlit", "Git", "Docker",
  "LightGBM", "XGBoost", "GeoPandas", "Matplotlib", "Seaborn", "SQL",
  "REST APIs", "Joblib", "scikit-fuzzy", "LSTM", "CNN", "ANN",
];

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-secondary font-inter">{skill.name}</span>
        <span className="font-mono text-xs text-cyan-DEFAULT">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: `${skill.level}%`,
            animationPlayState: inView ? "running" : "paused",
          }}
        />
      </div>
    </div>
  );
}

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(sectionRef);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(174 80% 55%), transparent)" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">02 — Skills</p>
          <h2 className="section-title text-4xl md:text-5xl">Technical Arsenal</h2>
          <div className="divider-glow mt-4 w-24" />
          <p className="text-text-secondary mt-4 max-w-xl">
            A curated set of tools and technologies I wield to build intelligent, production-grade systems.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillData.map((cat, i) => (
            <div
              key={cat.category}
              className={`glass-card rounded-2xl p-6 transition-all duration-700`}
              style={{
                transitionDelay: `${i * 100 + 200}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-grotesk font-semibold text-foreground">{cat.category}</h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} inView={inView} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className={`transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-5">Technologies & Tools</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
