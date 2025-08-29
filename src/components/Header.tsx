import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicosMenu = [
    { label: 'Mapeamento Estratégico', href: '/servicos/mapeamento-estrategico', description: 'Planejamento estratégico e análise organizacional' },
    { label: 'Desenvolvimento Pessoal', href: '/servicos/desenvolvimento-pessoal', description: 'Capacitação e crescimento individual' },
    { label: 'Mentorias e Consultorias', href: '/servicos/mentorias-consultorias', description: 'Orientação especializada e consultoria' },
    { label: 'Palestras e Workshops', href: '/servicos/palestras-workshops', description: 'Eventos e capacitações presenciais' }
  ];

  const handleDropdownEnter = (menu: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Delay de 150ms antes de fechar
    setDropdownTimeout(timeout);
  };

  const closeDropdowns = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-card border-b border-border' 
          : 'bg-gradient-to-b from-black/70 via-black/50 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className="transition-all duration-300 hover:scale-105"
            >
              <img 
                src="/Logo4.png" 
                alt="Alçar Humà - Gestão e Pessoas" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/quem-somos"
              className={`transition-colors font-medium relative group drop-shadow-md ${
                isScrolled 
                  ? `text-foreground hover:text-primary ${location.pathname === '/quem-somos' ? 'text-primary' : ''}`
                  : `text-white hover:text-white/80 ${location.pathname === '/quem-somos' ? 'text-white' : ''}`
              }`}
            >
              Quem Somos
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Serviços Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('servicos')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center transition-colors font-medium relative group drop-shadow-md ${
                  isScrolled 
                    ? `text-foreground hover:text-primary ${location.pathname.startsWith('/servicos') ? 'text-primary' : ''}`
                    : `text-white hover:text-white/80 ${location.pathname.startsWith('/servicos') ? 'text-white' : ''}`
                }`}
              >
                Serviços
                <ChevronDown className="w-4 h-4 ml-1" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {activeDropdown === 'servicos' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-card rounded-lg shadow-elegant border border-border p-6 animate-fade-in z-50"
                  onMouseEnter={() => handleDropdownEnter('servicos')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="space-y-3">
                    {servicosMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={closeDropdowns}
                      >
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/parceiros"
              className={`transition-colors font-medium relative group drop-shadow-md ${
                isScrolled 
                  ? `text-foreground hover:text-primary ${location.pathname === '/parceiros' ? 'text-primary' : ''}`
                  : `text-white hover:text-white/80 ${location.pathname === '/parceiros' ? 'text-white' : ''}`
              }`}
            >
              Parceiros
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/artigos"
              className={`transition-colors font-medium relative group drop-shadow-md ${
                isScrolled 
                  ? `text-foreground hover:text-primary ${location.pathname === '/artigos' ? 'text-primary' : ''}`
                  : `text-white hover:text-white/80 ${location.pathname === '/artigos' ? 'text-white' : ''}`
              }`}
            >
              Artigos
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link
              to="/contato"
              className={`transition-colors font-medium relative group drop-shadow-md ${
                isScrolled 
                  ? `text-foreground hover:text-primary ${location.pathname === '/contato' ? 'text-primary' : ''}`
                  : `text-white hover:text-white/80 ${location.pathname === '/contato' ? 'text-white' : ''}`
              }`}
            >
              Contato
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+5567996442404', '_self')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="w-4 h-4 mr-2" />
              (67) 99644-2404
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <Link to="/seja-parceiro">
                Seja Nosso Parceiro
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="py-4 space-y-2">
              <Link
                to="/quem-somos"
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>

              {/* Serviços - Mobile */}
              <div className="px-4 py-2">
                <div className="font-medium text-foreground mb-2">Serviços</div>
                <div className="pl-4 space-y-1">
                  {servicosMenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded px-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/parceiros"
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Parceiros
              </Link>

              <Link
                to="/artigos"
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Artigos
              </Link>

              <Link
                to="/contato"
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>

              <div className="px-4 pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('tel:+5567996442404', '_self')}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (67) 99644-2404
                </Button>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <Link to="/seja-parceiro">
                    Seja Nosso Parceiro
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;