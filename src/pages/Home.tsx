import React from 'react';
import Carousel from '@/components/Carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Building2,
  Lightbulb,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos soluções sob medida para cada organização',
      link: '/solucoes'
    },
    {
      icon: Users,
      title: 'Desenvolvimento de Pessoas',
      description: 'Capacitação e engajamento de equipes de alta performance',
      link: '/solucoes'
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Mais de 15 anos transformando organizações',
      link: '/cases'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Sustentável',
      description: 'Impacto duradouro no crescimento dos nossos clientes',
      link: '/diferenciais'
    }
  ];

  const services = [
    {
      title: 'Consultoria Estratégica',
      description: 'Planejamento e implementação de estratégias que impulsionam o crescimento sustentável.',
      features: ['Diagnóstico Organizacional', 'Planejamento Estratégico', 'Implementação de Mudanças'],
      color: 'primary'
    },
    {
      title: 'Cultura Organizacional',
      description: 'Desenvolvimento de culturas sólidas que engajam e motivam equipes de alto desempenho.',
      features: ['Mapeamento Cultural', 'Engajamento', 'Valores Organizacionais'],
      color: 'secondary'
    },
    {
      title: 'Gestão de Pessoas',
      description: 'Soluções completas para otimização do capital humano e desenvolvimento de talentos.',
      features: ['Recrutamento & Seleção', 'Avaliação de Performance', 'Retenção de Talentos'],
      color: 'accent'
    }
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '100+', label: 'Empresas Atendidas', icon: Building2 },
    { number: '1000+', label: 'Profissionais Capacitados', icon: Users },
    { number: '95%', label: 'Taxa de Sucesso', icon: TrendingUp }
  ];

  const differentials = [
    {
      icon: Lightbulb,
      title: 'Metodologia Própria',
      description: 'Framework exclusivo baseado em melhores práticas globais'
    },
    {
      icon: Shield,
      title: 'Confidencialidade Total',
      description: 'Proteção absoluta das informações estratégicas dos clientes'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Todos os projetos orientados para ROI mensurável'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <Carousel />

      {/* Services Overview */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Nossas Especialidades
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Soluções que <span className="text-primary">Transformam</span> Organizações
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos um portfólio completo de soluções estratégicas para impulsionar 
              o crescimento e a performance da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card border-border hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Target className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Link to="/solucoes">
                Ver Todas as Soluções
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Números que <span className="text-primary">Comprovam</span> nossa Excelência
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center shadow-card border-border">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Por que Escolher a <span className="text-primary">Alçar Humà</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="shadow-card border-border hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{highlight.description}</p>
                    <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-semibold">
                      <Link to={highlight.link}>
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                Nossos Diferenciais
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                O que nos torna <span className="text-primary">Únicos</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Combinamos experiência, metodologia própria e foco em resultados 
                para entregar soluções que realmente transformam organizações.
              </p>
              
              <div className="space-y-6 mb-8">
                {differentials.map((diff, index) => {
                  const IconComponent = diff.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{diff.title}</h4>
                        <p className="text-muted-foreground">{diff.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link to="/diferenciais">
                  Conheça Nossa Metodologia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Excelência Comprovada</h3>
                  <p className="text-muted-foreground">15+ anos transformando organizações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Transformar sua Organização?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Descubra como nossas soluções estratégicas podem impulsionar 
            o crescimento e a performance da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-primary hover:text-white">
              <Link to="/contato">
                Solicitar Proposta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-none text-white bg-primary hover:bg-white hover:text-primary"
            >
              <Link to="/cases">
                Ver Cases de Sucesso
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;