import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoLThWMTZ6bTAgMjR2OGgtOHYtOHptMjQtMjR2OGgtOFYxNnptMCAyNHY4aC04di04em0tMjQgMHY4aDh2LTh6bS0yNC0yNHY4aDhWMTZ6bTAgMjR2OGg4di04em0tOC04djhoOHYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex w-20 h-20 rounded-2xl gradient-accent items-center justify-center shadow-glow mb-4">
            <Calendar className="w-10 h-10 text-accent-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Pronto Para Construir Seu{" "}
            <span className="text-accent">Legado Imobiliário?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa estratégica com Valmar Nunes e descubra como a Capital Construction pode acelerar sua jornada no mercado imobiliário americano.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Análise Personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>100% Confidencial</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="xl" variant="premium" className="group">
              Agendar Conversa Estratégica
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="hero">
              Baixar Material Gratuito
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">
              Vagas limitadas para garantir qualidade da mentoria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
