import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, ArrowLeft, ArrowRight, Building2, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CasesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      client: 'Empresa de Tecnologia',
      sector: 'Tecnologia',
      challenge: 'Restructuração organizacional e desenvolvimento de liderança',
      solution: 'Implementação de programa de desenvolvimento de líderes e reestruturação de processos',
      results: [
        '40% aumento na produtividade',
        '60% melhoria no engajamento',
        '25% redução no turnover'
      ],
      testimonial: 'A Alçar Humà foi fundamental para nossa transformação organizacional. Sua metodologia e expertise nos permitiram alcançar resultados extraordinários.',
      author: 'João Silva',
      position: 'CEO',
      rating: 5
    },
    {
      client: 'Indústria Farmacêutica',
      sector: 'Saúde',
      challenge: 'Desenvolvimento de cultura de inovação e melhoria de processos',
      solution: 'Programa de cultura organizacional e treinamentos especializados',
      results: [
        '50% aumento na inovação',
        '35% melhoria na qualidade',
        '45% redução de retrabalho'
      ],
      testimonial: 'Os resultados superaram nossas expectativas. A equipe da Alçar Humà demonstrou profundo conhecimento e comprometimento com nosso sucesso.',
      author: 'Maria Santos',
      position: 'Diretora de Operações',
      rating: 5
    },
    {
      client: 'Rede de Varejo',
      sector: 'Varejo',
      challenge: 'Padronização de processos e desenvolvimento de equipes',
      solution: 'Implementação de metodologias de gestão e capacitação de equipes',
      results: [
        '30% aumento nas vendas',
        '55% melhoria no atendimento',
        '20% redução de custos'
      ],
      testimonial: 'A parceria com a Alçar Humà transformou nossa empresa. Conseguimos padronizar processos e desenvolver nossa equipe de forma extraordinária.',
      author: 'Carlos Oliveira',
      position: 'Diretor Comercial',
      rating: 5
    }
  ];

  const stats = [
    { number: '95%', label: 'Taxa de Sucesso', icon: TrendingUp },
    { number: '50+', label: 'Empresas Atendidas', icon: Building2 },
    { number: '1000+', label: 'Profissionais Capacitados', icon: Users }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="cases" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Cases de Sucesso
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resultados que <span className="text-primary">Comprovam</span> 
            nossa <span className="text-secondary">Excelência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que transformaram organizações e 
            geraram resultados mensuráveis para nossos clientes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center shadow-card border-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Study Carousel */}
        <div className="bg-neutral-light rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Case Details */}
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {cases[currentCase].sector}
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevCase}
                    className="w-10 h-10 p-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextCase}
                    className="w-10 h-10 p-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {cases[currentCase].client}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Desafio</h4>
                  <p className="text-muted-foreground">{cases[currentCase].challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solução</h4>
                  <p className="text-muted-foreground">{cases[currentCase].solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Resultados</h4>
                  <div className="grid gap-3">
                    {cases[currentCase].results.map((result, index) => (
                      <div key={index} className="flex items-center bg-primary/5 rounded-lg p-3">
                        <TrendingUp className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <Quote className="w-10 h-10 text-primary mb-6" />
              
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{cases[currentCase].testimonial}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">
                    {cases[currentCase].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cases[currentCase].position}
                  </div>
                </div>

                <div className="flex">
                  {renderStars(cases[currentCase].rating)}
                </div>
              </div>
            </div>
          </div>

          {/* Case Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCase ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para ser nosso Próximo Case de Sucesso?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Descubra como podemos transformar sua organização e gerar 
              resultados extraordinários como fizemos com nossos clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link to="/diferenciais">
                  Iniciar Projeto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            <Button size="lg" asChild className="bg-white border-primary border-2 text-primary hover:bg-primary hover:text-white">
              <Link to="/contato">
                Solicitar Proposta
              </Link>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;