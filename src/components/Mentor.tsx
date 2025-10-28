import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import mentorImage from "@/assets/valmar-nunes.jpg";

const Mentor = () => {
  const achievements = [
    "Mais de 20 anos de experiência no mercado imobiliário americano",
    "VGV superior a $100 milhões em projetos desenvolvidos",
    "Especialista em estruturação de operações imobiliárias complexas",
    "Track record comprovado em construção e investimentos",
    "Network consolidado com investidores e construtores nos EUA",
    "Mentor de dezenas de investidores brasileiros de sucesso",
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-4">
              Seu Mentor
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Valmar Nunes
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Investidor-Construtor | Especialista em Mercado Imobiliário Americano
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-premium">
                <img
                  src={mentorImage}
                  alt="Valmar Nunes - Investidor e Construtor"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-accent rounded-3xl -z-10 blur-2xl opacity-50" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Da Construção ao Capital: Uma Jornada de Excelência
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com mais de duas décadas de experiência no mercado imobiliário dos Estados Unidos, Valmar Nunes construiu uma carreira sólida que une visão de investidor e expertise de construtor.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sua abordagem única combina análise criteriosa de oportunidades, estruturação inteligente de capital e execução impecável de projetos – gerando centenas de milhões em valor para investidores.
                </p>
              </div>

              {/* Achievements List */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="bg-card p-6 rounded-xl border-l-4 border-accent shadow-elegant">
                <p className="text-lg text-card-foreground italic leading-relaxed">
                  "Minha missão é transformar empresários brasileiros em investidores-construtores de sucesso, compartilhando não apenas conhecimento, mas experiência prática em operações reais que geram riqueza e constroem legados duradouros."
                </p>
                <p className="text-sm text-muted-foreground mt-4 font-semibold">— Valmar Nunes</p>
              </div>

              {/* CTA */}
              <Button size="xl" variant="premium" className="group w-full sm:w-auto">
                Conhecer a Mentoria
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
