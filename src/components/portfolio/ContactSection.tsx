import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "chigbunduchibuike06@gmail.com",
    href: "mailto:chigbunduchibuike06@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/Chibuike-Chigbundu-O",
    href: "https://linkedin.com/in/Chibuike-Chigbundu-O",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/chibuike-chigbundu",
    href: "https://github.com",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@chibuike_dev",
    href: "https://twitter.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 903 021 2366",
    href: "tel:+2349030212366",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ota, Ogun State, Nigeria",
    href: "#",
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

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(sectionRef);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(174 80% 55%), transparent)" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">06 — Contact</p>
          <h2 className="section-title text-4xl md:text-5xl">Let's Build Together</h2>
          <div className="divider-glow mt-4 w-24" />
          <p className="text-text-secondary mt-4 max-w-xl">
            Whether you're looking for an ML engineer, have a project in mind, or want to collaborate — I'm open to exciting opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="glass-card rounded-2xl p-8 mb-6">
              <h3 className="font-grotesk font-semibold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 glass rounded-xl border border-border flex items-center justify-center group-hover:border-cyan-DEFAULT/40 group-hover:text-cyan-DEFAULT transition-all">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider">{label}</p>
                      <p className="text-sm text-text-secondary group-hover:text-cyan-DEFAULT transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-cyan-DEFAULT/20">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-DEFAULT animate-pulse-glow" />
                <div>
                  <p className="font-grotesk font-semibold text-foreground text-sm">Available for Opportunities</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Open to full-time roles, internships & freelance projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                  <CheckCircle size={48} className="text-cyan-DEFAULT" />
                  <h3 className="font-grotesk font-bold text-foreground text-xl">Message Sent!</h3>
                  <p className="text-text-secondary text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-sm py-2 px-4 mt-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-grotesk font-semibold text-foreground mb-6">Send a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-surface-1 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-DEFAULT/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-surface-1 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-DEFAULT/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full bg-surface-1 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-DEFAULT/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-surface-1 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-DEFAULT/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
