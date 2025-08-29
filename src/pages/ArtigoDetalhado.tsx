import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, BookOpen, Share2, Heart, MessageCircle } from 'lucide-react';
import { getArticleById } from '@/data/articlesData';

const ArtigoDetalhado: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  console.log('ArtigoDetalhado - ID from params:', id);
  
  const article = getArticleById(Number(id));
  
  console.log('ArtigoDetalhado - Article found:', article);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-20">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-6">O artigo que você procura não existe ou foi removido.</p>
          <Button onClick={() => navigate('/artigos')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Artigos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <div className="bg-muted/30 border-b border-border pt-20 pb-4">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/artigos')}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Artigos
          </Button>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="default" className="text-sm px-4 py-1">
                {article.category}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
            </div>
            
            {/* Social actions */}
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Heart className="w-4 h-4" />
                Curtir
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Comentar
              </Button>
            </div>
          </header>

          {/* Article image placeholder */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-12 shadow-lg">
            <BookOpen className="w-24 h-24 text-primary/70" />
          </div>

          {/* Article content */}
          <div 
            className="prose prose-lg prose-slate max-w-none 
                       prose-headings:text-foreground prose-headings:font-bold
                       prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                       prose-strong:text-foreground prose-strong:font-semibold
                       prose-ul:text-muted-foreground prose-ol:text-muted-foreground 
                       prose-li:text-muted-foreground prose-li:text-lg prose-li:leading-relaxed
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                       prose-p:mb-6 prose-ul:mb-6 prose-ol:mb-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author info and call to action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Gostou deste artigo?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Descubra como nossos serviços podem transformar sua organização. 
                Entre em contato conosco para uma conversa personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/contato')}>
                  Entre em Contato
                </Button>
                <Button variant="outline" size="lg" className="bg-white border-primary border-2 text-primary hover:bg-primary hover:text-white" onClick={() => navigate('/solucoes')}>
                  Conheça Nossas Soluções
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related articles suggestion */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Continue Lendo
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore mais insights e conhecimentos em nosso blog
            </p>
            <Button variant="outline" size="lg" className="bg-white border-primary border-2 text-primary hover:bg-primary hover:text-white" onClick={() => navigate('/artigos')}>
              Ver Todos os Artigos
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArtigoDetalhado;