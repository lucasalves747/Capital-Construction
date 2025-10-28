import { Building2, Mail, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/hero-background.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shadow-glow">
                  <img src={logo} alt="" />
                </div>
                <span className="text-2xl font-bold">Capital Construction</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Transformando empresários brasileiros em investidores-construtores de sucesso no mercado imobiliário americano através de mentoria premium e operações reais.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-smooth" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-smooth" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-smooth" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#sobre" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Sobre a Mentoria
                  </a>
                </li>
                <li>
                  <a href="#valores" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Nossos Valores
                  </a>
                </li>
                <li>
                  <a href="#mentor" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Valmar Nunes
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground">Contato</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <a href="mailto:contato@capitalconstruction.com" className="hover:text-accent transition-smooth">
                    contato@capitalconstruction.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-accent transition-smooth">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="text-sm">
                  Miami, Florida
                  <br />
                  United States
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-primary-foreground/70">
                © {currentYear} Capital Construction. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
                <a href="#privacidade" className="hover:text-accent transition-smooth">
                  Política de Privacidade
                </a>
                <a href="#termos" className="hover:text-accent transition-smooth">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
