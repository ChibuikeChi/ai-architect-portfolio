import { useEffect, useRef, useState } from "react";
import { BookOpen, ArrowRight, Brain, Code, Cpu } from "lucide-react";

const posts = [
  {
    icon: Brain,
    label: "Machine Learning",
    title: "Domain Adaptation: Bridging the Geographic Gap in ML Models",
    excerpt:
      "How I successfully adapted a South American-trained LightGBM model to accurately predict Urban Heat Islands in Sierra Leone — and what that taught me about geospatial bias.",
    readTime: "8 min read",
    tag: "ML Research",
    color: "text-cyan-DEFAULT",
  },
  {
    icon: Code,
    label: "Deep Learning",
    title: "Building a 94% Accurate Emotion Detector with LSTM",
    excerpt:
      "A deep dive into constructing an LSTM pipeline for multi-class emotion classification — from tokenization to deployment-ready model artifacts using Keras and Joblib.",
    readTime: "6 min read",
    tag: "NLP",
    color: "text-violet-400",
  },
  {
    icon: Cpu,
    label: "Explainable AI",
    title: "Fuzzy Logic vs. Statistical Learning: A Practical Comparison",
    excerpt:
      "Exploring the intersection of Expert Systems and modern ML through an energy demand forecasting problem. When does human-readable logic outperform black-box models?",
    readTime: "7 min read",
    tag: "XAI",
    color: "text-emerald-400",
  },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function InsightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(sectionRef);

  return (
    <section id="insights" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">05 — Insights</p>
          <h2 className="section-title text-4xl md:text-5xl">Technical Writing</h2>
          <div className="divider-glow mt-4 w-24" />
          <p className="text-text-secondary mt-4 max-w-xl">
            Sharing what I learn building ML systems — from competition breakdowns to architecture decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => {
            const Icon = post.icon;
            return (
              <article
                key={post.title}
                className="glass-card rounded-2xl p-6 group cursor-pointer transition-all duration-700"
                style={{
                  transitionDelay: `${i * 120 + 200}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 glass rounded-lg border border-border ${post.color}`}>
                    <Icon size={16} />
                  </div>
                  <span className="tag">{post.tag}</span>
                </div>

                <h3 className="font-grotesk font-semibold text-foreground text-base leading-snug mb-3 group-hover:text-cyan-DEFAULT transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                  <span className="flex items-center gap-1 text-xs text-cyan-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 glass rounded-xl px-5 py-3 border border-border text-text-secondary text-sm">
            <BookOpen size={14} className="text-cyan-DEFAULT" />
            <span>Blog launching soon — follow on LinkedIn for updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
