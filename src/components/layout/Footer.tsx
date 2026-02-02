import { Github, Linkedin } from "lucide-react";
import { Container } from "./Container";

const socialLinks = [
  { icon: Github, href: "https://github.com/ruanssh", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ruanppereira/",
    label: "LinkedIn",
  },
];

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "About", href: "#sobre" },
  { label: "Contact", href: "#contato" },
  { label: "Projects", href: "#projetos" },
  { label: "My journey", href: "#experiencia" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
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
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-zinc-500">
            © {currentYear} Ruan Pereira. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
