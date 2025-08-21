import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Search, BookOpen, TrendingUp } from 'lucide-react';

const Artigos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const articles = [
    {
      id: 1,
      title: "O Futuro da Gestão de Pessoas: Tendências para 2024",
      excerpt: "Explore as principais tendências que estão moldando o futuro da gestão de pessoas e como se preparar para elas.",
      author: "Mariana Silva",
      date: "15 de Janeiro, 2024",
      category: "Gestão de Pessoas",
      readTime: "8 min",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Desenvolvimento de Liderança: Estratégias Práticas",
      excerpt: "Descubra metodologias comprovadas para desenvolver líderes eficazes em sua organização.",
      author: "João Santos",
      date: "10 de Janeiro, 2024",
      category: "Liderança",
      readTime: "6 min",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cultura Organizacional: Como Transformar Sua Empresa",
      excerpt: "Um guia completo para entender e transformar a cultura da sua organização.",
      author: "Ana Costa",
      date: "5 de Janeiro, 2024",
      category: "Cultura",
      readTime: "10 min",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Mapeamento Estratégico: Ferramenta de Transformação",
      excerpt: "Como utilizar o mapeamento estratégico para impulsionar resultados organizacionais.",
      author: "Carlos Oliveira",
      date: "28 de Dezembro, 2023",
      category: "Estratégia",
      readTime: "7 min",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Mentoria Corporativa: Maximizando o Potencial Humano",
      excerpt: "Os benefícios da mentoria corporativa e como implementar um programa eficaz.",
      author: "Mariana Silva",
      date: "22 de Dezembro, 2023",
      category: "Desenvolvimento",
      readTime: "5 min",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Palestras Motivacionais: Impacto nos Resultados",
      excerpt: "Como palestras e workshops podem transformar a motivação e produtividade das equipes.",
      author: "Roberto Lima",
      date: "18 de Dezembro, 2023",
      category: "Motivação",
      readTime: "9 min",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["Todos", "Gestão de Pessoas", "Liderança", "Cultura", "Estratégia", "Desenvolvimento", "Motivação"];

  // Filter articles based on category and search term
  const filteredArticles = useMemo(() => {
    let filtered = articles;
    
    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm, articles]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/artigos-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Artigos e Insights
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Conhecimento prático para transformar pessoas e organizações
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === selectedCategory ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Buscar artigos..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime} de leitura</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                      Ler mais →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Receba Nossos Insights
            </h2>
            <p className="text-muted-foreground mb-8">
              Assine nossa newsletter e receba semanalmente conteúdos exclusivos 
              sobre gestão de pessoas e desenvolvimento organizacional.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Seu melhor e-mail"
                className="flex-1"
              />
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artigos;