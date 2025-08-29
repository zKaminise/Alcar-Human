// Central data file for articles - easy to add new articles here
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

export const articlesData: { [key: number]: Article } = {
  1: {
    id: 1,
    title: "O Futuro da Gestão de Pessoas: Tendências para 2024",
    excerpt: "Explore as principais tendências que estão moldando o futuro da gestão de pessoas e como se preparar para elas.",
    author: "Mariana Silva",
    date: "15 de Janeiro, 2024",
    category: "Gestão de Pessoas",
    readTime: "8 min",
    image: "/api/placeholder/400/250",
    content: `
      <h2>A Evolução da Gestão de Pessoas</h2>
      <p>A gestão de pessoas está passando por uma transformação radical. Com o avanço da tecnologia e as mudanças nas expectativas dos colaboradores, as organizações precisam se adaptar rapidamente para permanecer competitivas.</p>
      
      <h3>1. Trabalho Híbrido como Nova Realidade</h3>
      <p>O trabalho híbrido não é mais uma tendência temporária, mas sim uma nova realidade estabelecida. As empresas que conseguirem criar políticas flexíveis e eficazes para o trabalho híbrido terão vantagem competitiva significativa.</p>
      
      <h3>2. Foco no Bem-estar Mental</h3>
      <p>O bem-estar mental dos colaboradores tornou-se uma prioridade estratégica. Programas de apoio psicológico, flexibilidade de horários e ambiente de trabalho saudável são fundamentais.</p>
      
      <h3>3. Desenvolvimento Contínuo</h3>
      <p>A aprendizagem contínua é essencial. As empresas devem investir em plataformas de desenvolvimento e criar trilhas de carreira claras para seus colaboradores.</p>
      
      <h2>Como Se Preparar</h2>
      <p>Para se preparar para essas mudanças, as organizações devem:</p>
      <ul>
        <li>Investir em tecnologia para facilitar o trabalho remoto</li>
        <li>Criar políticas de bem-estar abrangentes</li>
        <li>Desenvolver lideranças preparadas para o novo cenário</li>
        <li>Implementar processos de feedback contínuo</li>
      </ul>
    `
  },
  2: {
    id: 2,
    title: "Desenvolvimento de Liderança: Estratégias Práticas",
    excerpt: "Descubra metodologias comprovadas para desenvolver líderes eficazes em sua organização.",
    author: "João Santos",
    date: "10 de Janeiro, 2024",
    category: "Liderança",
    readTime: "6 min",
    image: "/api/placeholder/400/250",
    content: `
      <h2>A Importância da Liderança Eficaz</h2>
      <p>Líderes eficazes são o diferencial competitivo de qualquer organização. Eles inspiram, motivam e direcionam equipes para alcançar resultados excepcionais.</p>
      
      <h3>Características de um Líder Eficaz</h3>
      <ul>
        <li>Comunicação clara e assertiva</li>
        <li>Capacidade de inspirar e motivar</li>
        <li>Inteligência emocional desenvolvida</li>
        <li>Visão estratégica</li>
        <li>Capacidade de tomar decisões</li>
      </ul>
      
      <h3>Estratégias de Desenvolvimento</h3>
      <p>Para desenvolver líderes em sua organização, considere:</p>
      <ol>
        <li><strong>Mentoria estruturada:</strong> Conecte líderes experientes com talentos em desenvolvimento</li>
        <li><strong>Treinamentos práticos:</strong> Foque em situações reais e estudos de caso</li>
        <li><strong>Feedback 360°:</strong> Implemente processos de avaliação multidirecionais</li>
        <li><strong>Projetos desafiadores:</strong> Ofereça oportunidades de crescimento através de desafios</li>
      </ol>
    `
  },
  3: {
    id: 3,
    title: "Cultura Organizacional: Como Transformar Sua Empresa",
    excerpt: "Um guia completo para entender e transformar a cultura da sua organização.",
    author: "Ana Costa",
    date: "5 de Janeiro, 2024",
    category: "Cultura",
    readTime: "10 min",
    image: "/api/placeholder/400/250",
    content: `
      <h2>Entendendo a Cultura Organizacional</h2>
      <p>A cultura organizacional é o conjunto de valores, crenças, práticas e comportamentos que definem como uma empresa opera. É o DNA da organização.</p>
      
      <h3>Elementos da Cultura Organizacional</h3>
      <p>A cultura é composta por:</p>
      <ul>
        <li>Valores fundamentais</li>
        <li>Rituais e tradições</li>
        <li>Símbolos e linguagem</li>
        <li>Estrutura organizacional</li>
        <li>Políticas e procedimentos</li>
      </ul>
      
      <h3>Processo de Transformação Cultural</h3>
      <p>Transformar a cultura organizacional é um processo complexo que requer:</p>
      <ol>
        <li><strong>Diagnóstico atual:</strong> Avalie a cultura existente</li>
        <li><strong>Definição da cultura desejada:</strong> Estabeleça onde quer chegar</li>
        <li><strong>Plano de ação:</strong> Crie estratégias específicas</li>
        <li><strong>Implementação:</strong> Execute as mudanças de forma consistente</li>
        <li><strong>Monitoramento:</strong> Acompanhe o progresso continuamente</li>
      </ol>
      
      <h2>Desafios Comuns</h2>
      <p>Os principais desafios na transformação cultural incluem:</p>
      <ul>
        <li>Resistência à mudança</li>
        <li>Falta de alinhamento da liderança</li>
        <li>Comunicação inadequada</li>
        <li>Expectativas irreais sobre o tempo necessário</li>
      </ul>
    `
  },
  4: {
    id: 4,
    title: "Mapeamento Estratégico: Ferramenta de Transformação",
    excerpt: "Como utilizar o mapeamento estratégico para impulsionar resultados organizacionais.",
    author: "Carlos Oliveira",
    date: "28 de Dezembro, 2023",
    category: "Estratégia",
    readTime: "7 min",
    image: "/api/placeholder/400/250",
    content: `
      <h2>O Que é Mapeamento Estratégico</h2>
      <p>O mapeamento estratégico é uma ferramenta visual que conecta os objetivos estratégicos de uma organização, mostrando as relações de causa e efeito entre diferentes perspectivas do negócio.</p>
      
      <h3>As Quatro Perspectivas</h3>
      <p>O mapeamento estratégico tradicionalmente utiliza quatro perspectivas:</p>
      <ol>
        <li><strong>Financeira:</strong> Como aparecer aos acionistas</li>
        <li><strong>Clientes:</strong> Como aparecer aos clientes</li>
        <li><strong>Processos Internos:</strong> Em que processos devemos nos destacar</li>
        <li><strong>Aprendizado e Crescimento:</strong> Como sustentar a capacidade de mudar e melhorar</li>
      </ol>
      
      <h3>Benefícios do Mapeamento Estratégico</h3>
      <ul>
        <li>Clareza na estratégia organizacional</li>
        <li>Alinhamento entre diferentes áreas</li>
        <li>Foco nos objetivos principais</li>
        <li>Facilitação da comunicação estratégica</li>
        <li>Base para indicadores de desempenho</li>
      </ul>
      
      <h2>Como Implementar</h2>
      <p>Para implementar o mapeamento estratégico em sua organização:</p>
      <ol>
        <li>Defina a visão e missão claramente</li>
        <li>Identifique os objetivos estratégicos</li>
        <li>Estabeleça as relações de causa e efeito</li>
        <li>Crie indicadores para cada objetivo</li>
        <li>Monitore e ajuste regularmente</li>
      </ol>
    `
  },
  5: {
    id: 5,
    title: "Mentoria Corporativa: Maximizando o Potencial Humano",
    excerpt: "Os benefícios da mentoria corporativa e como implementar um programa eficaz.",
    author: "Mariana Silva",
    date: "22 de Dezembro, 2023",
    category: "Desenvolvimento",
    readTime: "5 min",
    image: "/api/placeholder/400/250",
    content: `
      <h2>O Poder da Mentoria Corporativa</h2>
      <p>A mentoria corporativa é uma das ferramentas mais eficazes para desenvolver talentos e acelerar o crescimento profissional dentro das organizações.</p>
      
      <h3>Benefícios para o Mentorado</h3>
      <ul>
        <li>Desenvolvimento acelerado de competências</li>
        <li>Ampliação da rede de contatos</li>
        <li>Maior clareza sobre objetivos de carreira</li>
        <li>Aumento da confiança e autoestima</li>
        <li>Melhor compreensão da cultura organizacional</li>
      </ul>
      
      <h3>Benefícios para o Mentor</h3>
      <ul>
        <li>Desenvolvimento de habilidades de liderança</li>
        <li>Satisfação pessoal ao ajudar outros</li>
        <li>Nova perspectiva sobre desafios</li>
        <li>Reconhecimento dentro da organização</li>
      </ul>
      
      <h2>Implementando um Programa de Mentoria</h2>
      <p>Para criar um programa de mentoria eficaz:</p>
      <ol>
        <li><strong>Defina objetivos claros:</strong> Estabeleça metas específicas</li>
        <li><strong>Selecione mentores qualificados:</strong> Escolha pessoas experientes e dispostas</li>
        <li><strong>Faça matching adequado:</strong> Combine mentores e mentorados compatíveis</li>
        <li><strong>Forneça treinamento:</strong> Prepare mentores para o papel</li>
        <li><strong>Monitore o progresso:</strong> Acompanhe regularmente os resultados</li>
      </ol>
    `
  },
  6: {
    id: 6,
    title: "Palestras Motivacionais: Impacto nos Resultados",
    excerpt: "Como palestras e workshops podem transformar a motivação e produtividade das equipes.",
    author: "Roberto Lima",
    date: "18 de Dezembro, 2023",
    category: "Motivação",
    readTime: "9 min",
    image: "/api/placeholder/400/250",
    content: `
      <h2>O Impacto das Palestras Motivacionais</h2>
      <p>Palestras motivacionais bem estruturadas podem ser catalisadores poderosos para mudanças positivas na organização, impactando diretamente a motivação, engajamento e produtividade das equipes.</p>
      
      <h3>Elementos de uma Palestra Eficaz</h3>
      <ul>
        <li>Conteúdo relevante e aplicável</li>
        <li>Palestrante experiente e carismático</li>
        <li>Interação com a audiência</li>
        <li>Exemplos práticos e casos reais</li>
        <li>Call to action claro</li>
      </ul>
      
      <h3>Tipos de Palestras Corporativas</h3>
      <p>Diferentes tipos de palestras podem atender necessidades específicas:</p>
      <ol>
        <li><strong>Liderança:</strong> Desenvolvimento de habilidades de liderança</li>
        <li><strong>Trabalho em equipe:</strong> Fortalecimento da colaboração</li>
        <li><strong>Inovação:</strong> Estímulo à criatividade e inovação</li>
        <li><strong>Vendas:</strong> Técnicas e motivação para equipes comerciais</li>
        <li><strong>Mudança:</strong> Gestão e adaptação a mudanças</li>
      </ol>
      
      <h2>Medindo o Impacto</h2>
      <p>Para avaliar a eficácia das palestras:</p>
      <ul>
        <li>Pesquisas de satisfação imediatas</li>
        <li>Avaliação de mudanças comportamentais</li>
        <li>Indicadores de produtividade</li>
        <li>Feedback dos gestores</li>
        <li>ROI do investimento em treinamento</li>
      </ul>
      
      <h3>Maximizando os Resultados</h3>
      <p>Para potencializar o impacto das palestras:</p>
      <ol>
        <li>Prepare a audiência com antecedência</li>
        <li>Conecte o conteúdo aos objetivos organizacionais</li>
        <li>Crie ações de follow-up</li>
        <li>Implemente práticas discutidas</li>
        <li>Monitore resultados a longo prazo</li>
      </ol>
    `
  }
};

// Helper function to get all articles as array (for listing pages)
export const getAllArticles = (): Article[] => {
  return Object.values(articlesData);
};

// Helper function to get article by ID
export const getArticleById = (id: number): Article | undefined => {
  return articlesData[id];
};

// Helper function to get all categories
export const getAllCategories = (): string[] => {
  const categories = Array.from(new Set(Object.values(articlesData).map(article => article.category)));
  return ["Todos", ...categories];
};