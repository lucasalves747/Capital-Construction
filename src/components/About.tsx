import { Building2, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Operações Reais",
      description: "Aprenda investindo em projetos reais, não apenas teoria. Participe de operações estruturadas do início ao fim.",
    },
    {
      icon: TrendingUp,
      title: "Capital Inteligente",
      description: "Estratégias comprovadas de alocação de capital e estruturação de deals no mercado americano.",
    },
    {
      icon: Shield,
      title: "Execução Impecável",
      description: "Processos testados e validados em centenas de milhões investidos ao longo de duas décadas.",
    },
  ];

  return (
    <section className="py-24 md:py-32 gradient-subtle">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Uma Mentoria Diferente de Tudo que Você Já Viu
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A Capital Construction não é apenas consultoria. É uma jornada de transformação onde você se torna um verdadeiro investidor-construtor.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-premium transition-smooth border border-border"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 shadow-glow">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-primary text-primary-foreground p-10 md:p-16 rounded-3xl shadow-premium">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="text-accent text-sm font-semibold tracking-wider uppercase">Nossa Missão</div>
              <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                Transformar Mentorados em Investidores-Construtores de Sucesso
              </h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Através de operações estruturadas e mentoria intensiva, capacitamos empresários brasileiros a construir portfólios sólidos no mercado imobiliário americano, gerando riqueza consistente e um legado duradouro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
