import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, CheckCircle, Lightbulb, Target, Users, Brain } from 'lucide-react';

const MentoriasConsultorias = () => {
  const benefits = [
    "Orientação estratégica personalizada",
    "Aceleração no desenvolvimento profissional",
    "Soluções práticas para desafios específicos",
    "Transferência de conhecimento especializado",
    "Melhoria na tomada de decisões",
    "Desenvolvimento de novas perspectivas"
  ];

  const services = [
    {
      icon: MessageCircle,
      title: "Mentoria Executiva",
      description: "Acompanhamento personalizado para líderes e executivos que buscam excelência em gestão."
    },
    {
      icon: Lightbulb,
      title: "Consultoria Estratégica",
      description: "Soluções especializadas para desafios organizacionais e estratégicos complexos."
    },
    {
      icon: Brain,
      title: "Mentoria de Carreira",
      description: "Orientação para profissionais que querem acelerar seu crescimento e desenvolvimento."
    },
    {
      icon: Target,
      title: "Consultoria em RH",
      description: "Expertise em gestão de pessoas, processos e desenvolvimento organizacional."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/src/assets/mentorias-consultorias-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">Serviços</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mentorias e Consultorias
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Orientação especializada e consultoria para acelerar seus resultados
            </p>
            <Button size="lg" variant="secondary">
              Solicitar Mentoria
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
                Experiência e Conhecimento ao Seu Alcance
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nossas mentorias e consultorias combinam anos de experiência prática 
                  com metodologias comprovadas para acelerar seu desenvolvimento e 
                  resolver desafios complexos de gestão e liderança.
                </p>
                <p>
                  Oferecemos um acompanhamento próximo e personalizado, adaptando 
                  nossas abordagens às necessidades específicas de cada cliente, 
                  seja individual ou organizacional.
                </p>
                <p>
                  Nossa expertise abrange desde desenvolvimento de lideranças até 
                  soluções estratégicas para transformação organizacional, sempre 
                  com foco em resultados práticos e sustentáveis.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                <MessageCircle className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Serviços */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções especializadas para diferentes necessidades e desafios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" size="sm">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado para maximizar os resultados da mentoria e consultoria
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Diagnóstico Inicial</h3>
                <p className="text-sm text-muted-foreground">
                  Análise das necessidades e definição de objetivos específicos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Plano Personalizado</h3>
                <p className="text-sm text-muted-foreground">
                  Criação de um roteiro customizado para alcançar os resultados desejados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Sessões Regulares</h3>
                <p className="text-sm text-muted-foreground">
                  Encontros periódicos para orientação, feedback e acompanhamento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Resultados</h3>
                <p className="text-sm text-muted-foreground">
                  Avaliação dos progressos e consolidação dos aprendizados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                <Users className="w-32 h-32 text-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefícios da Mentoria
              </h2>
              <p className="text-muted-foreground mb-8">
                Nossos programas de mentoria e consultoria oferecem vantagens únicas:
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

      {/* Para Quem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Para Quem é Indicado?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais e organizações que buscam acelerar resultados e desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Executivos e Líderes</h3>
                <p className="text-muted-foreground">
                  Profissionais em posições de liderança que querem aprimorar 
                  suas competências e resultados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Empreendedores</h3>
                <p className="text-muted-foreground">
                  Donos de negócios que buscam orientação estratégica 
                  para crescer e escalar suas empresas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Equipes de RH</h3>
                <p className="text-muted-foreground">
                  Profissionais de recursos humanos que querem se especializar 
                  em gestão de pessoas.
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
              Acelere Seus Resultados com Nossa Expertise
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Aproveite nossa experiência para superar desafios e alcançar seus objetivos mais rapidamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Solicitar Mentoria
              </Button>
              <Button size="lg" variant="outline">
                Consultoria Personalizada
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentoriasConsultorias;