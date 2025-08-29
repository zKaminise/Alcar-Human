import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Users, Target, TrendingUp, Building2, Lightbulb, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Gestão de Pessoas com Propósito, Estratégia e Resultados",
      subtitle: "Transformando Organizações",
      description: "Desenvolvemos soluções estratégicas que alinham pessoas, processos e resultados para impulsionar o crescimento sustentável da sua organização.",
      buttonText: "Conheça Nossas Soluções",
      buttonLink: "/solucoes",
      background: "from-primary via-primary-dark to-secondary",
      overlayColor: "bg-primary/20",
      icon: Target,
      stats: { number: "15+", label: "Anos de Experiência" },
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 2,
      title: "Cultura Organizacional que Engaja e Transforma",
      subtitle: "Desenvolvimento Corporativo",
      description: "Criamos culturas organizacionais sólidas que engajam colaboradores e impulsionam a performance, gerando resultados excepcionais e crescimento sustentável.",
      buttonText: "Ver Cases de Sucesso",
      buttonLink: "/cases",
      background: "from-secondary via-primary to-primary-dark",
      overlayColor: "bg-secondary/20",
      icon: Users,
      stats: { number: "100+", label: "Empresas Transformadas" },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 3,
      title: "Metodologia Própria com Resultados Comprovados",
      subtitle: "Excelência em Consultoria",
      description: "Nossa metodologia exclusiva combina diagnóstico organizacional, planejamento estratégico e implementação focada em resultados mensuráveis.",
      buttonText: "Conheça a Metodologia",
      buttonLink: "/diferenciais",
      background: "from-primary-dark via-secondary to-primary",
      overlayColor: "bg-primary-dark/20",
      icon: TrendingUp,
      stats: { number: "95%", label: "Taxa de Sucesso" },
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 4,
      title: "Estratégias Corporativas que Geram Valor",
      subtitle: "Consultoria Estratégica",
      description: "Implementamos estratégias corporativas que maximizam o valor da sua organização, através de análises profundas e planejamento estratégico focado em resultados.",
      buttonText: "Solicitar Proposta",
      buttonLink: "/contato",
      background: "from-neutral-dark via-primary to-secondary",
      overlayColor: "bg-neutral-dark/20",
      icon: Building2,
      stats: { number: "1000+", label: "Profissionais Capacitados" },
      image: "/Valor.png"
    },
    {
      id: 5,
      title: "Inovação em Gestão de Pessoas e Processos",
      subtitle: "Metodologia Exclusiva",
      description: "Nossa abordagem inovadora combina tecnologia, metodologia própria e expertise para transformar a gestão de pessoas e otimizar processos organizacionais.",
      buttonText: "Conheça Nossa Metodologia",
      buttonLink: "/diferenciais",
      background: "from-accent via-primary-dark to-primary",
      overlayColor: "bg-accent/20",
      icon: Lightbulb,
      stats: { number: "98%", label: "Satisfação dos Clientes" },
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000); // Aumentado para 10 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src={slides[currentSlide].image}
          alt={slides[currentSlide].subtitle}
          className="w-full h-full object-cover transition-all duration-1000 transform scale-105"
          loading="eager" decoding="async" fetchPriority="high"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background} opacity-70 transition-all duration-1000`} />
        {/* Additional Color Overlay */}
        <div className={`absolute inset-0 ${slides[currentSlide].overlayColor} transition-all duration-1000`} />
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM90 90c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-white animate-fade-in" key={currentSlide}>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              {slides[currentSlide].subtitle}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl mb-8 leading-relaxed opacity-90 max-w-2xl">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-neutral-light hover:scale-105 transition-all duration-300 shadow-glow group"
              >
                <Link to={slides[currentSlide].buttonLink}>
                  {slides[currentSlide].buttonText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contato">
                  Fale Conosco
                </Link>
              </Button>
            </div>

            {/* Current slide stat */}
            <div className="flex items-center space-x-4 pt-8 border-t border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                {React.createElement(slides[currentSlide].icon, {
                  className: "w-6 h-6 text-white"
                })}
              </div>
              <div>
                <div className="text-2xl font-bold">{slides[currentSlide].stats.number}</div>
                <div className="text-sm opacity-80">{slides[currentSlide].stats.label}</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="relative animate-fade-in" key={`visual-${currentSlide}`}>
            <div className="relative">
              {/* Main Visual Card - now shows an image instead of text */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <div className="aspect-[4/3] relative">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].subtitle}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
                </div>
              </div>
              
              {/* Enhanced Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-400/90 to-emerald-500/90 backdrop-blur-lg rounded-xl shadow-2xl p-4 border border-white/30 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-glow"></div>
                  <span className="text-sm font-semibold text-white">Consultoria Ativa</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500/90 to-primary/90 backdrop-blur-lg rounded-xl shadow-2xl p-4 border border-white/30">
                <div className="text-center">
                  <Award className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-sm font-bold text-white">Excelência</div>
                  <div className="text-xs text-white/90">Comprovada</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gradient-to-r from-purple-500/90 to-secondary/90 backdrop-blur-lg rounded-xl shadow-2xl p-3 border border-white/30 hover:scale-110 transition-transform">
                <div className="text-center">
                  <TrendingUp className="w-5 h-5 text-white mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">ROI+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-lg hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/30 hover:scale-110 shadow-glow group"
      >
        <ChevronLeft className="w-7 h-7 text-white transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-lg hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/30 hover:scale-110 shadow-glow group"
      >
        <ChevronRight className="w-7 h-7 text-white transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-4 bg-white rounded-full scale-110 shadow-glow' 
                : 'w-4 h-4 bg-white/50 hover:bg-white/70 rounded-full hover:scale-105'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white/10 to-white/30 z-20">
        <div 
          className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-1000 ease-out shadow-glow"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-6 bg-black/30 backdrop-blur-lg rounded-lg px-4 py-2 text-white text-sm font-medium z-20 border border-white/20">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
};

export default Carousel;