import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  accuracy?: string;
  github?: string;
  demo?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "EY Urban Heat Island Mapping",
    subtitle: "Geospatial ML · Zindi Competition",
    description:
      "Multi-class LightGBM model classifying Urban Heat Island intensity using Sentinel-2 satellite imagery and OpenStreetMap data. Resolved model drift between South America and Africa via domain adaptation.",
    highlights: [
      "85.85% training accuracy",
      "NDVI, NDBI, NDWI spectral indices",
      "Cross-continent domain adaptation",
      "GeoPandas + Rasterio pipelines",
    ],
    tags: ["LightGBM", "GeoPandas", "Rasterio", "Sentinel-2", "Domain Adaptation", "Python"],
    accuracy: "85.85%",
    github: "https://github.com",
    gradient: "from-cyan-500/10 to-blue-600/5",
  },
  {
    title: "AI Sentiment & Emotion Analytics",
    subtitle: "NLP · Deep Learning · LSTM",
    description:
      "LSTM-based deep learning network classifying text into 6 emotional categories (Sadness, Joy, Love, Anger, Fear, Surprise) with 94% accuracy on unseen data.",
    highlights: [
      "94% multi-class accuracy",
      "6-emotion classification",
      "Tokenization + embedding pipeline",
      "Dropout regularization",
    ],
    tags: ["LSTM", "TensorFlow", "Keras", "NLP", "Tokenization", "Seaborn"],
    accuracy: "94%",
    github: "https://github.com",
    gradient: "from-violet-500/10 to-cyan-500/5",
  },
  {
    title: "Expert System: Energy Demand Forecasting",
    subtitle: "Fuzzy Logic · Explainable AI",
    description:
      "Hybrid ML + Fuzzy Logic inference system for energy consumption forecasting. Custom Mamdani-style rule base handling non-linear relationships across temperature, peak hours, and load data.",
    highlights: [
      "Fuzzy Inference System (FIS)",
      "Mamdani-style inference rules",
      "XAI & approximate reasoning",
      "ControlSystem simulation",
    ],
    tags: ["scikit-fuzzy", "Python", "Fuzzy Logic", "XAI", "Energy Forecasting"],
    github: "https://github.com",
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    title: "Fraud Detection System",
    subtitle: "Anomaly Detection · Unsupervised ML",
    description:
      "Unsupervised anomaly detection pipeline using DBSCAN clustering and PCA dimensionality reduction to identify fraudulent transactions in financial data streams.",
    highlights: [
      "DBSCAN clustering",
      "PCA dimensionality reduction",
      "Real-time anomaly scoring",
      "Feature importance analysis",
    ],
    tags: ["Scikit-learn", "DBSCAN", "PCA", "Pandas", "Python"],
    github: "https://github.com",
    gradient: "from-rose-500/10 to-orange-500/5",
  },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(sectionRef);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent)" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">03 — Projects</p>
          <h2 className="section-title text-4xl md:text-5xl">Featured Work</h2>
          <div className="divider-glow mt-4 w-24" />
          <p className="text-text-secondary mt-4 max-w-xl">
            Real-world ML systems built from scratch — from satellite imagery to neural emotion detection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className="glass-card rounded-2xl p-6 group cursor-default transition-all duration-700"
              style={{
                transitionDelay: `${i * 100 + 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {/* Top bar */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="section-label text-[0.65rem]">{proj.subtitle}</span>
                  <h3 className="font-grotesk font-bold text-foreground text-lg mt-1 group-hover:text-cyan-DEFAULT transition-colors">
                    {proj.title}
                  </h3>
                </div>
                {proj.accuracy && (
                  <div className="flex-shrink-0 ml-4 glass rounded-lg px-3 py-1.5 border border-cyan-DEFAULT/20">
                    <p className="font-mono text-xs text-cyan-DEFAULT">{proj.accuracy}</p>
                    <p className="font-mono text-[0.6rem] text-muted-foreground">accuracy</p>
                  </div>
                )}
              </div>

              {/* Gradient bar */}
              <div className={`h-0.5 w-full rounded bg-gradient-to-r ${proj.gradient} mb-4 opacity-60`}
                style={{ background: "var(--gradient-cyan)", opacity: 0.3 }} />

              <p className="text-text-secondary text-sm leading-relaxed mb-5">{proj.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {proj.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-text-secondary">
                    <ArrowRight size={12} className="text-cyan-DEFAULT flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-cyan-DEFAULT transition-colors"
                  >
                    <Github size={14} />
                    <span>Source</span>
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-cyan-DEFAULT transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
