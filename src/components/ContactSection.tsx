import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Building,
  Users,
  Target
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    hp: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Consultoria Estratégica em Negócios',
    'Desenvolvimento de Cultura Organizacional',
    'Treinamentos e Capacitação',
    'Gestão de Pessoas',
    'Diagnóstico Organizacional',
    'Outro'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Avenida Afonso Pena, 5723. 15º andar. Park Office. Edifício Evolution. Bairro Santa Fé. Campo Grande - MS. CEP 79006251',
      action: () => window.open('https://maps.google.com/?q=Avenida+Afonso+Pena+5723+Campo+Grande+MS', '_blank')
    },
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      content: '(67) 99644-2404',
      action: () => window.open('https://wa.me/5567996442404', '_blank')
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@alcarhumana.com.br',
      action: () => window.open('mailto:contato@alcarhumana.com.br', '_self')
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h',
      action: null
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Falha no envio');

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '', hp: '' });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      alert('Não foi possível enviar sua mensagem. Tente novamente em instantes.');
    }
  };


  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Mensagem Enviada com Sucesso!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve
              para discutir como podemos ajudar sua organização.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="relative py-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(/contato-hero.jpg)`,
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
              Entre em Contato
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos <span className="text-white">Revolucionar</span> sua
              <span className="text-secondary"> Empresa</span> Juntos
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Conecte-se conosco para desenvolver estratégias inovadoras e soluções sob medida
              que impulsionarão o crescimento e a excelência da sua organização.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>
                <p className="mb-8 opacity-90">
                  Nossa equipe está sempre disponível para atender você.
                  Escolha a forma de contato mais conveniente.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm opacity-80">Resposta Rápida</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm opacity-80">Anos de Experiência</div>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                <Button
                  onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card
                      key={index}
                      className={`shadow-card border-border ${info.action ? 'cursor-pointer hover:shadow-elegant transition-all duration-300' : ''}`}
                      onClick={info.action || undefined}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground text-sm whitespace-pre-line">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        Solicite uma Proposta
                      </h3>
                      <p className="text-muted-foreground">
                        Preencha o formulário e entraremos em contato em até 24 horas
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome completo"
                          className="border-border focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail Corporativo *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="seu@email.com"
                          className="border-border focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Nome da sua empresa"
                          className="border-border focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(67) 99999-9999"
                          className="border-border focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço de Interesse *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Conte-nos mais sobre suas necessidades e desafios..."
                        rows={5}
                        className="border-border focus:ring-primary resize-none"
                      />
                    </div>

                    {/* dentro do <form> */}
                    <input
                      type="text"
                      name="hp"
                      value={formData.hp}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Enviar Proposta
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </form>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                    <div className="text-center">
                      <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Empresa Estabelecida</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Equipe Especializada</div>
                    </div>
                    <div className="text-center">
                      <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Resultados Comprovados</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps Integration */}
          <div className="mt-16">
            <Card className="overflow-hidden shadow-card border-border">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-primary mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Nossa Localização
                    </h3>
                    <p className="text-muted-foreground">
                      Avenida Afonso Pena, 5723 - Campo Grande, MS
                    </p>
                  </div>
                </div>
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4744444444444!2d-54.618611!3d-20.471944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7fffffff!2sAv.+Afonso+Pena%2C+5723+-+Santa+F%C3%A9%2C+Campo+Grande+-+MS!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://maps.google.com/?q=Avenida+Afonso+Pena+5723+Campo+Grande+MS', '_blank')}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Abrir no Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;