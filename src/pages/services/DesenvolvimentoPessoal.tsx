import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, CheckCircle, Star, TrendingUp, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesenvolvimentoPessoal = () => {
  const benefits = [
    "Aumento da autoconfiança e autoestima",
    "Melhoria nas habilidades de comunicação",
    "Desenvolvimento de liderança pessoal",
    "Maior clareza sobre objetivos de carreira",
    "Aprimoramento de competências técnicas e comportamentais",
    "Melhores resultados profissionais e pessoais"
  ];

  const areas = [
    {
      icon: Star,
      title: "Liderança Pessoal",
      description: "Desenvolva suas habilidades de liderança e influência para alcançar seus objetivos."
    },
    {
      icon: Users,
      title: "Comunicação Eficaz",
      description: "Aprimore sua capacidade de comunicação e relacionamento interpessoal."
    },
    {
      icon: TrendingUp,
      title: "Gestão de Carreira",
      description: "Planeje e execute estratégias para acelerar seu crescimento profissional."
    },
    {
      icon: BookOpen,
      title: "Competências Técnicas",
      description: "Desenvolva conhecimentos e habilidades específicas para sua área de atuação."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/desenvolvimento-pessoal-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white">Serviços</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Desenvolvimento Pessoal
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Capacitação e crescimento individual para alcançar seu máximo potencial
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link to="/contato">
                  Iniciar Jornada de Desenvolvimento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Serviço */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforme Seu Potencial em Resultados
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nosso programa de Desenvolvimento Pessoal é desenhado para profissionais
                  que querem acelerar seu crescimento e alcançar novos patamares em suas
                  carreiras e vidas pessoais.
                </p>
                <p>
                  Através de metodologias comprovadas e acompanhamento personalizado,
                  ajudamos você a identificar suas forças, superar limitações e
                  desenvolver as competências necessárias para o sucesso.
                </p>
                <p>
                  Cada jornada é única e personalizada, considerando seus objetivos
                  específicos, estilo de aprendizagem e contexto profissional.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Planejamento estratégico e análise de negócios"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Desenvolvimento */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Áreas de Desenvolvimento
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos diferentes dimensões do seu crescimento profissional e pessoal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <area.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Planejamento estratégico e análise de negócios"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Resultados do Desenvolvimento
              </h2>
              <p className="text-muted-foreground mb-8">
                Nossos programas de desenvolvimento pessoal geram impactos reais e mensuráveis:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma abordagem estruturada e personalizada para seu desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Diagnóstico</h3>
                <p className="text-muted-foreground">
                  Avaliação completa do seu perfil, competências atuais e objetivos de desenvolvimento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Plano Personalizado</h3>
                <p className="text-muted-foreground">
                  Criação de um plano de desenvolvimento customizado para suas necessidades específicas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Acompanhamento</h3>
                <p className="text-muted-foreground">
                  Suporte contínuo e monitoramento do progresso com ajustes quando necessário.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comece Sua Jornada de Desenvolvimento Hoje
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Invista no seu crescimento e alcance novos patamares profissionais e pessoais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link to="/contato">
                  Iniciar Desenvolvimento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-white border-primary border-2 text-primary hover:bg-primary hover:text-white">
                <a
                  href="https://wa.me/5567996442404?text=Quero%20agendar%20uma%20conversa%20para%20entender%20mais%20sobre%20o%20Desenvolvimento%20Pessoal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Conversa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesenvolvimentoPessoal;