import { Award, Eye, Lightbulb, Target, Crown } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Padrão máximo de qualidade em cada projeto, decisão e entrega. Não aceitamos menos que o extraordinário.",
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Clareza total em processos, custos e resultados. Você tem acesso completo a cada etapa das operações.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Estratégias atualizadas e adaptadas às dinâmicas do mercado americano. Evoluímos constantemente.",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco absoluto em retorno sobre investimento. Cada ação é orientada para gerar valor mensurável.",
    },
    {
      icon: Crown,
      title: "Legado",
      description: "Construímos mais que patrimônio: criamos estruturas duradouras para gerações futuras.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-4">
              Nossos Pilares
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Valores que Nos Definem
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Estes princípios guiam cada decisão, operação e relacionamento na Capital Construction.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border-2 border-border hover:border-accent transition-smooth shadow-elegant hover:shadow-premium"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-glow transition-smooth">
                    <value.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-smooth" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic">
              "Valores não são palavras na parede. São ações diárias que definem quem somos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
