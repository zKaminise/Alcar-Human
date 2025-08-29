import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Heart, Download } from 'lucide-react';

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/quem-somos-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Conectamos pessoas, transformamos organizações e construímos pontes para o futuro
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Alçar Humà nasceu da visão de que as organizações são, acima de tudo, 
                  formadas por pessoas. Fundada com o propósito de conectar potencial humano 
                  com resultados organizacionais, somos especialistas em gestão de pessoas 
                  e desenvolvimento estratégico.
                </p>
                <p>
                  Nossa abordagem única combina metodologias comprovadas com soluções 
                  personalizadas, sempre focando no que realmente importa: as pessoas 
                  que fazem a diferença em cada organização.
                </p>
                <p>
                  Ao longo dos anos, construímos uma trajetória sólida, trabalhando com 
                  empresas de diversos segmentos e portes, sempre com o compromisso de 
                  gerar resultados sustentáveis e transformações duradouras.
                </p>
              </div>
              <Button className="mt-6" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Material Institucional
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Excelência em consultoria empresarial"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Pilares
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os fundamentos que guiam nossa atuação e definem nosso compromisso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Conectar o potencial humano com resultados organizacionais, 
                  desenvolvendo pessoas e transformando empresas através de 
                  soluções inovadoras em gestão de pessoas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência nacional em consultoria de gestão de pessoas, 
                  reconhecida pela excelência, inovação e pelos resultados 
                  sustentáveis que geramos para nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>• Excelência e qualidade</p>
                  <p>• Ética e transparência</p>
                  <p>• Inovação e criatividade</p>
                  <p>• Compromisso com resultados</p>
                  <p>• Respeito e valorização humana</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais experientes e apaixonados por desenvolvimento humano
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-elegant">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Profissional experiente em liderança e consultoria"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Liderança Experiente
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Nossa equipe é formada por profissionais com vasta experiência 
                      em gestão de pessoas, desenvolvimento organizacional e consultoria 
                      estratégica. Cada membro traz expertise única que enriquece 
                      nossas soluções.
                    </p>
                    <p className="text-muted-foreground">
                      Combinamos conhecimento técnico, experiência prática e paixão 
                      pelo desenvolvimento humano para entregar resultados excepcionais 
                      aos nossos clientes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;