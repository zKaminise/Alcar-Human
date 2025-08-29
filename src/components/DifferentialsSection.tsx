import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Clock,
  Shield,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Target,
      title: 'Metodologia Própria',
      description: 'Desenvolvemos metodologias exclusivas baseadas em melhores práticas internacionais e experiência prática em diversos setores.',
      features: ['Framework proprietário', 'Processos validados', 'Resultados comprovados']
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Time multidisciplinar com vasta experiência em gestão, liderança e desenvolvimento organizacional.',
      features: ['Consultores seniores', 'Expertise multissetorial', 'Formação continuada']
    },
    {
      icon: TrendingUp,
      title: 'Foco em Resultados',
      description: 'Todos os nossos projetos são orientados para gerar impacto mensurável e retorno sobre investimento.',
      features: ['KPIs definidos', 'Acompanhamento contínuo', 'ROI comprovado']
    },
    {
      icon: Clock,
      title: 'Agilidade na Implementação',
      description: 'Processos otimizados que garantem implementação rápida sem comprometer a qualidade dos resultados.',
      features: ['Metodologia ágil', 'Entregas rápidas', 'Flexibilidade adaptativa']
    },
    {
      icon: Shield,
      title: 'Confidencialidade Total',
      description: 'Garantimos total sigilo e proteção das informações estratégicas da sua organização.',
      features: ['NDA rigoroso', 'Dados protegidos', 'Ética profissional']
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Sempre atualizados com as últimas tendências e tecnologias em gestão e desenvolvimento organizacional.',
      features: ['Tendências globais', 'Tecnologias emergentes', 'Benchmarking internacional']
    }
  ];

  const achievements = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '200+', label: 'Projetos Concluídos', icon: CheckCircle2 },
    { number: '98%', label: 'Taxa de Sucesso', icon: TrendingUp },
    { number: '50+', label: 'Empresas Atendidas', icon: Users }
  ];

  return (
    <section id="diferenciais" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Nossos Diferenciais
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nos torna <span className="text-primary">Únicos</span> no Mercado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combinamos experiência, metodologia própria e foco em resultados para 
            entregar soluções que realmente transformam organizações.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="text-center shadow-card border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card border-border hover:shadow-elegant transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {differential.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {differential.description}
                  </p>

                  <div className="space-y-2">
                    {differential.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Methodology Highlight */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Metodologia Alçar Humà
              </h3>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Nossa metodologia proprietária combina diagnóstico organizacional, 
                planejamento estratégico e implementação focada em resultados.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4</div>
                  <div className="text-sm opacity-80">Fases Estruturadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">360°</div>
                  <div className="text-sm opacity-80">Análise Completa</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { phase: '01', title: 'Diagnóstico', description: 'Análise profunda da situação atual' },
                { phase: '02', title: 'Planejamento', description: 'Estratégia personalizada e objetivos claros' },
                { phase: '03', title: 'Implementação', description: 'Execução estruturada com acompanhamento' },
                { phase: '04', title: 'Resultados', description: 'Medição de impacto e otimização contínua' }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/10 rounded-lg p-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">{step.phase}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm opacity-80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Experimente Nossa Metodologia
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como nossa metodologia 
              pode transformar os resultados da sua organização.
            </p>
            <button
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Agendar Consultoria Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;