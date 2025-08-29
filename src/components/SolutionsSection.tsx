import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Users,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  Building
} from 'lucide-react';

const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      icon: BarChart3,
      title: 'Consultoria Estratégica em Negócios',
      shortDescription: 'Planejamento e implementação de estratégias que impulsionam o crescimento.',
      fullDescription: 'Nossa consultoria estratégica oferece análise profunda do negócio, identificação de oportunidades e desenvolvimento de planos de ação personalizados. Trabalhamos com diagnóstico organizacional, planejamento estratégico, redesenho de processos e implementação de mudanças.',
      benefits: [
        'Diagnóstico organizacional completo',
        'Planejamento estratégico personalizado',
        'Implementação de mudanças estruturais',
        'Acompanhamento de resultados'
      ],
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      icon: Building,
      title: 'Desenvolvimento de Cultura Organizacional',
      shortDescription: 'Construção de culturas sólidas que engajam e motivam equipes.',
      fullDescription: 'Desenvolvemos culturas organizacionais alinhadas com os valores e objetivos da empresa. Nossa abordagem inclui mapeamento cultural, definição de valores, criação de práticas e rituais, e programas de engajamento que fortalecem a identidade organizacional.',
      benefits: [
        'Mapeamento e diagnóstico cultural',
        'Definição de valores e propósito',
        'Programas de engajamento',
        'Rituais e práticas organizacionais'
      ],
      color: 'secondart',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      icon: GraduationCap,
      title: 'Treinamentos e Capacitação',
      shortDescription: 'Programas de desenvolvimento que potencializam talentos e competências.',
      fullDescription: 'Oferecemos programas de capacitação personalizados para diferentes níveis hierárquicos. Nossos treinamentos abrangem liderança, gestão de pessoas, comunicação, vendas, atendimento ao cliente e competências técnicas específicas do setor.',
      benefits: [
        'Programas customizados por área',
        'Metodologias ativas de aprendizagem',
        'Acompanhamento pós-treinamento',
        'Certificações e avaliações'
      ],
      color: 'accent',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      icon: Users,
      title: 'Gestão de Pessoas',
      shortDescription: 'Soluções completas para otimização do capital humano.',
      fullDescription: 'Implementamos sistemas e processos para gestão eficaz de pessoas, incluindo recrutamento e seleção, avaliação de desempenho, planos de carreira, políticas de remuneração e programas de retenção de talentos.',
      benefits: [
        'Processos de recrutamento e seleção',
        'Sistemas de avaliação de performance',
        'Planos de carreira estruturados',
        'Programas de retenção de talentos'
      ],
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    }
  ];

  return (
    <section id="solucoes" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Nossas Soluções
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções <span className="text-primary">Estratégicas</span> que
            <span className="text-secondary"> Transformam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos um portfólio completo de soluções para impulsionar o crescimento
            e a performance da sua organização através do desenvolvimento estratégico.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isActive = activeSolution === index;

            return (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 border-2 ${isActive
                    ? 'border-primary shadow-corporate scale-105'
                    : 'border-border hover:border-primary/50 hover:shadow-card'
                  }`}
                onClick={() => setActiveSolution(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.shortDescription}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Active Solution Details */}
        <div className="bg-neutral-light rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                {React.createElement(solutions[activeSolution].icon, {
                  className: "w-8 h-8 text-primary mr-3"
                })}
                <h3 className="text-3xl font-bold text-foreground">
                  {solutions[activeSolution].title}
                </h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {solutions[activeSolution].fullDescription}
              </p>

              <div className="space-y-3 mb-8">
                {solutions[activeSolution].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary-dark text-primary-foreground group"
              >
                Solicitar Proposta
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elegant aspect-[4/3]">
                <img
                  src={solutions[activeSolution].image}
                  alt={solutions[activeSolution].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Implementar Soluções Estratégicas?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está preparada para desenvolver soluções personalizadas
              que atendam às necessidades específicas da sua organização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link to="/diferenciais">
                  Falar com especialista
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-white border-primary border-2 text-primary hover:bg-primary hover:text-white">
                <Link to="/contato">
                  Ver Cases de Sucesso
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;