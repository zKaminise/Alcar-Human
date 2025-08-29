import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Linkedin, 
  Instagram, 
  Facebook,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Cases', href: '#cases' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contato', href: '#contato' }
  ];

  const services = [
    'Consultoria Estratégica em Negócios',
    'Desenvolvimento de Cultura Organizacional',
    'Treinamentos e Capacitação',
    'Gestão de Pessoas'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/alcar-humana', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/alcarhumana', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/alcarhumana', label: 'Facebook' }
  ];

  return (
    <footer className="relative z-20 bg-neutral-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/e290cf8e-cd03-4d1b-aa14-0b400ec12569.png" 
                alt="Alçar Humà - Gestão e Pessoas" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-sm text-gray-300">
                Gestão e Pessoas
              </p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em Soluções Estratégicas em Gestão de Negócios e Pessoas. 
              Desenvolvimento Corporativo com estratégia, cultura e resultados.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('#solucoes')}
                    className="text-gray-300 hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  Avenida Afonso Pena, 5723.<br />
                  15º andar. Park Office.<br />
                  Edifício Evolution. Bairro Santa Fé.<br />
                  Campo Grande - MS. CEP 79006251
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+5567996442404"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  (67) 99644-2404
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@alcarhumana.com.br"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  contato@alcarhumana.com.br
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/5567996442404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Alçar Humà - Gestão e Pessoas. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('#sobre')}
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => scrollToSection('#sobre')}
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Termos de Uso
              </button>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary hover:bg-primary-dark rounded-lg flex items-center justify-center transition-colors"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;