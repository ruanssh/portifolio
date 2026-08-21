import { Github, Linkedin } from "lucide-react";
import { Container } from "./Container";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { icon: Github, href: "https://github.com/ruanssh", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ruanppereira/",
    label: "LinkedIn",
  },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.footer.home, href: "#home" },
    { label: t.footer.about, href: "#about" },
    { label: t.footer.contact, href: "mailto:ruanpinheiro762@gmail.com" },
    { label: t.footer.projects, href: "#projects" },
    { label: t.footer.experience, href: "#experience" },
  ];

  return (
    <footer className="border-t border-line py-12 mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-3 hover:text-ink-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-ink-2 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-line/60 text-center">
          <p className="text-sm text-ink-3">
            © {currentYear} Ruan Pereira. {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
