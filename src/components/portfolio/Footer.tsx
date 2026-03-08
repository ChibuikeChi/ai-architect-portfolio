import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/Chibuike-Chigbundu-O", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chigbunduchibuike06@gmail.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-mono text-lg font-semibold mb-3">
              <span className="glow-text">{"<"}</span>
              <span className="text-foreground">CC</span>
              <span className="glow-text">{"/>"}</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Machine Learning Engineer & Software Developer building intelligent systems for real-world impact.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-grotesk font-semibold text-foreground text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => {
                      const id = href.slice(1);
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-text-secondary text-sm hover:text-cyan-DEFAULT transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-grotesk font-semibold text-foreground text-sm mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-cyan-DEFAULT hover:border-cyan-DEFAULT/30 transition-all hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="font-mono text-xs text-muted-foreground">chigbunduchibuike06@gmail.com</p>
          </div>
        </div>

        <div className="divider-glow mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Chibuike Chigbundu. Built with precision & purpose.
          </p>
          <button
            onClick={scrollTop}
            className="w-8 h-8 glass rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-cyan-DEFAULT hover:border-cyan-DEFAULT/30 transition-all hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
