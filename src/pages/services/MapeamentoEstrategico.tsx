import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, CheckCircle, Users, TrendingUp, Map, Lightbulb, BarChart3 } from 'lucide-react';

const MapeamentoEstrategico = () => {
  const principalBenefits = [
    "Alinhamento estratégico completo da organização",
    "Identificação de oportunidades e ameaças",
    "Definição clara de objetivos e metas"
  ];

  const process = [
    {
      number: "01",
      title: "Diagnóstico Organizacional",
      description: "Análise completa da situação atual da empresa, identificando pontos fortes, fracos, oportunidades e ameaças."
    },
    {
      number: "02",
      title: "Definição de Objetivos", 
      description: "Estabelecimento de objetivos estratégicos claros, mensuráveis e alinhados com a visão da empresa."
    },
    {
      number: "03",
      title: "Mapeamento de Processos",
      description: "Identificação e otimização dos principais processos organizacionais para atingir os objetivos definidos."
    },
    {
      number: "04",
      title: "Implementação e Monitoramento",
      description: "Execução do plano estratégico com acompanhamento contínuo e ajustes quando necessário."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias customizadas para cada organização"
    },
    {
      icon: BarChart3,
      title: "Análise de Performance", 
      description: "Criação de indicadores e métricas para acompanhamento de resultados"
    },
    {
      icon: Users,
      title: "Alinhamento de Equipes",
      description: "Engajamento de todos os níveis organizacionais no processo estratégico"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description: "Estratégias focadas em crescimento consistente e duradouro"
    }
  ];

  const allBenefits = [
    "Alinhamento estratégico completo da organização",
    "Identificação de oportunidades e ameaças",
    "Definição clara de objetivos e metas",
    "Criação de indicadores de performance (KPIs)",
    "Roadmap estratégico detalhado",
    "Acompanhamento e monitoramento contínuo"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/mapeamento-estrategico-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">Serviços</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mapeamento Estratégico
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Planejamento estratégico e análise organizacional para impulsionar resultados
            </p>
            <Button size="lg" variant="secondary">
              Solicitar Consultoria
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* O que é Mapeamento Estratégico */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O que é Mapeamento Estratégico?
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  O Mapeamento Estratégico é um processo estruturado que traduz a missão e visão da sua organização em objetivos específicos, mensuráveis e interconectados. Através desta metodologia, criamos um roteiro claro que alinha toda a empresa em direção aos mesmos resultados.
                </p>
                <p>
                  Nossa abordagem combina as melhores práticas do mercado com uma análise profunda da realidade da sua empresa, garantindo que o planejamento seja não apenas ambicioso, mas também viável e adaptado à sua cultura organizacional.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Benefícios Principais:</h3>
                <div className="space-y-3">
                  {principalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3-6 meses</div>
                  <div className="text-sm text-muted-foreground">Duração típica do projeto</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Customizado para sua empresa</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/4ed9b06a-4b64-4e1c-b495-4837d042d2a8.png" 
                  alt="Dashboard estratégico em laptop"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Metodologia */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Processo estruturado em 4 etapas que garante resultados consistentes e sustentáveis.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que Oferecemos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que Oferecemos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serviços completos que cobrem todos os aspectos do planejamento estratégico organizacional.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Todos os Benefícios */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Todos os Benefícios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados comprovados que transformam organizações.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {allBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Público-Alvo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Para Quem é Este Serviço?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ideal para organizações que buscam clareza estratégica e resultados sustentáveis
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Empresas em Crescimento</h3>
                  <p className="text-muted-foreground">
                    Organizações que precisam estruturar seus processos e estratégias 
                    para sustentar o crescimento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Empresas em Transição</h3>
                  <p className="text-muted-foreground">
                    Companhias passando por mudanças significativas que precisam 
                    realinhar sua estratégia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Lideranças Visionárias</h3>
                  <p className="text-muted-foreground">
                    Líderes que buscam ferramentas para tomar decisões mais 
                    assertivas e estratégicas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para Mapear o Futuro da Sua Empresa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato e descubra como nosso Mapeamento Estratégico pode 
              transformar os resultados da sua organização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Solicitar Consultoria
              </Button>
              <Button size="lg" variant="outline">
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapeamentoEstrategico;