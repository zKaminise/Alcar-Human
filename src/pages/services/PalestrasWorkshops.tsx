import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Presentation, CheckCircle, Users, Mic, Calendar, Star } from 'lucide-react';

const PalestrasWorkshops = () => {
  const benefits = [
    "Motivação e engajamento das equipes",
    "Desenvolvimento de competências específicas",
    "Melhoria no clima organizacional",
    "Transferência de conhecimento prático",
    "Fortalecimento da cultura empresarial",
    "Aumento da produtividade e resultados"
  ];

  const formats = [
    {
      icon: Mic,
      title: "Palestras Motivacionais",
      description: "Apresentações inspiradoras para motivar e engajar suas equipes em eventos e convenções."
    },
    {
      icon: Users,
      title: "Workshops Práticos",
      description: "Sessões interativas focadas no desenvolvimento de habilidades específicas e aplicação prática."
    },
    {
      icon: Calendar,
      title: "Treinamentos Corporativos",
      description: "Programas estruturados de capacitação customizados para as necessidades da sua empresa."
    },
    {
      icon: Star,
      title: "Eventos Temáticos",
      description: "Eventos especiais sobre temas específicos como liderança, inovação e desenvolvimento pessoal."
    }
  ];

  const topics = [
    "Liderança e Gestão de Equipes",
    "Motivação e Engajamento",
    "Comunicação Eficaz",
    "Gestão de Mudanças",
    "Desenvolvimento de Talentos",
    "Cultura Organizacional",
    "Inovação e Criatividade",
    "Gestão de Conflitos",
    "Trabalho em Equipe",
    "Inteligência Emocional"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/palestras-workshops-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">Serviços</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Palestras e Workshops
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Eventos e capacitações presenciais que transformam pessoas e organizações
            </p>
            <Button size="lg" variant="secondary">
              Solicitar Palestra
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
                Inspiração e Conhecimento em Ação
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nossas palestras e workshops são experiências transformadoras que 
                  combinam conteúdo relevante, metodologias interativas e a energia 
                  necessária para gerar mudanças reais nas pessoas e organizações.
                </p>
                <p>
                  Cada evento é cuidadosamente planejado e customizado para atender 
                  aos objetivos específicos da sua empresa, garantindo máximo engajamento 
                  e aplicação prática do conhecimento compartilhado.
                </p>
                <p>
                  Nossa abordagem vai além da teoria, oferecendo ferramentas práticas 
                  e insights que os participantes podem aplicar imediatamente em 
                  seu dia a dia profissional.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                <Presentation className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formatos Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diferentes modalidades para atender às necessidades da sua organização
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {formats.map((format, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <format.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{format.title}</h3>
                  <p className="text-muted-foreground mb-6">{format.description}</p>
                  <Button variant="outline" size="sm">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Temas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Temas Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdos relevantes e atuais para o desenvolvimento organizacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground">{topic}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Não encontrou o tema que procura?
            </p>
            <Button variant="outline">
              Solicitar Tema Personalizado
            </Button>
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
                Impacto dos Nossos Eventos
              </h2>
              <p className="text-muted-foreground mb-8">
                Nossas palestras e workshops geram resultados tangíveis para sua organização:
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

      {/* Como Contratar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Contratar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo simples para levar conhecimento e inspiração para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Briefing</h3>
                <p className="text-sm text-muted-foreground">
                  Conversamos sobre seus objetivos e necessidades específicas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Proposta</h3>
                <p className="text-sm text-muted-foreground">
                  Elaboramos uma proposta customizada com tema e formato ideais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Planejamento</h3>
                <p className="text-sm text-muted-foreground">
                  Organizamos todos os detalhes logísticos e de conteúdo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Evento</h3>
                <p className="text-sm text-muted-foreground">
                  Realizamos o evento com máximo profissionalismo e impacto.
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
              Transforme Sua Equipe com Nossos Eventos
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Leve inspiração, conhecimento e motivação para dentro da sua organização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Solicitar Palestra
              </Button>
              <Button size="lg" variant="outline">
                Workshop Personalizado
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PalestrasWorkshops;