import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Handshake, Mail, Phone, MapPin, Building, Users, Target, Award, ArrowRight } from 'lucide-react';
import bannerParceiros from "@/assets/parceiros-hero.jpg";

const SejaParceiroForm = () => {
  const [f, setF] = useState({
    empresa: "",
    setor: "",
    contato_nome: "",
    cargo: "",
    email: "",
    telefone: "",
    tipo_parceria: "",
    descricao_proposta: "",
    experiencia: "",
    hp: "",                   // honeypot
    source: "seja-parceiro",  // identifica o formulário
  });
  const [sending, setSending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id ? id.replace(/-/g, "_") : "";
    if (!key) return;
    setF((p) => ({ ...p, [key]: value }));
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario-parceria')
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
       })
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error();
      alert("Proposta de parceria enviada!");
      setF({
        empresa: "", setor: "", contato_nome: "", cargo: "", email: "", telefone: "",
        tipo_parceria: "", descricao_proposta: "", experiencia: "", hp: "", source: "seja-parceiro",
      });
    } catch {
      alert("Falha ao enviar. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bannerParceiros} 
            alt="Parceria empresarial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Handshake className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Seja Nosso Parceiro
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
              Juntos, podemos transformar mais organizações e desenvolver mais pessoas
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              onClick={scrollToForm}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Começar Parceria
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por que Ser Nosso Parceiro?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubra as vantagens de fazer parte da nossa rede de parceiros
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Rede de Oportunidades</h3>
                  <p className="text-muted-foreground">
                    Acesso a uma rede qualificada de clientes e projetos em diversos segmentos.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Colaboração Estratégica</h3>
                  <p className="text-muted-foreground">
                    Parcerias estratégicas que potencializam competências e resultados.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Suporte Especializado</h3>
                  <p className="text-muted-foreground">
                    Equipe dedicada para apoiar o desenvolvimento da parceria.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Informações de Contato */}
              <div className="lg:col-span-2">
                <Card className="h-fit shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Entre em Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Telefone</p>
                          <p className="text-muted-foreground">(67) 99644-2404</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">E-mail</p>
                          <p className="text-muted-foreground">parceiros@alcarhumana.com.br</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Localização</p>
                          <p className="text-muted-foreground">Campo Grande, MS</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário */}
              <div className="lg:col-span-3">
                <Card className="shadow-lg border-0" id="formulario-parceria" >

                  <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/50 rounded-t-lg">
                    <CardTitle className="text-2xl">Formulário de Parceria</CardTitle>
                    <p className="text-muted-foreground">
                      Preencha os dados abaixo e vamos conversar sobre como podemos trabalhar juntos
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form className="space-y-8" onSubmit={onSubmit}>
                      {/* honeypot invisível */}
                      <input
                        type="text"
                        value={f.hp}
                        onChange={(e) => setF((p) => ({ ...p, hp: e.target.value }))}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4 bg-muted/20 border-0">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground" htmlFor="empresa">Nome da Empresa *</label>
                            <Input 
                              id="empresa"
                              placeholder="Digite o nome da sua empresa" 
                              className="border-0 bg-background/80 focus:bg-background"
                              value={f.empresa}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-muted/20 border-0">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Setor de Atuação *</label>
                            <Select value={f.setor} onValueChange={(v) => setF((p) => ({ ...p, setor: v }))}>
                              <SelectTrigger className="border-0 bg-background/80 focus:bg-background">
                                <SelectValue placeholder="Selecione o setor" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                                <SelectItem value="saude">Saúde</SelectItem>
                                <SelectItem value="educacao">Educação</SelectItem>
                                <SelectItem value="financeiro">Financeiro</SelectItem>
                                <SelectItem value="varejo">Varejo</SelectItem>
                                <SelectItem value="industria">Indústria</SelectItem>
                                <SelectItem value="agronegocio">Agronegócio</SelectItem>
                                <SelectItem value="servicos">Serviços</SelectItem>
                                <SelectItem value="outros">Outros</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </Card>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4 bg-muted/20 border-0">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground" htmlFor="contato_nome">Nome do Contato *</label>
                            <Input 
                              id="contato_nome"
                              placeholder="Seu nome completo" 
                              className="border-0 bg-background/80 focus:bg-background"
                              value={f.contato_nome}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-muted/20 border-0">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground" htmlFor="cargo">Cargo *</label>
                            <Input 
                              id="cargo"
                              placeholder="Seu cargo na empresa" 
                              className="border-0 bg-background/80 focus:bg-background"
                              value={f.cargo}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </Card>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4 bg-muted/20 border-0">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground" htmlFor="email">E-mail *</label>
                            <Input 
                              id="email"
                              type="email" 
                              placeholder="seu@email.com" 
                              className="border-0 bg-background/80 focus:bg-background"
                              value={f.email}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-muted/20 border-0">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground" htmlFor="telefone">Telefone *</label>
                            <Input 
                              id="telefone"
                              placeholder="(00) 00000-0000" 
                              className="border-0 bg-background/80 focus:bg-background"
                              value={f.telefone}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </Card>
                      </div>

                      <Card className="p-4 bg-muted/20 border-0">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Tipo de Parceria</label>
                          <Select value={f.tipo_parceria} onValueChange={(v) => setF((p) => ({ ...p, tipo_parceria: v }))}>
                            <SelectTrigger className="border-0 bg-background/80 focus:bg-background">
                              <SelectValue placeholder="Selecione o tipo de parceria" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fornecedor">Fornecedor de Serviços</SelectItem>
                              <SelectItem value="consultor">Consultor Associado</SelectItem>
                              <SelectItem value="indicacao">Programa de Indicação</SelectItem>
                              <SelectItem value="estrategica">Parceria Estratégica</SelectItem>
                              <SelectItem value="outros">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </Card>

                      <Card className="p-4 bg-muted/20 border-0">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground" htmlFor="descricao_proposta">Descrição da Proposta *</label>
                          <Textarea 
                            id="descricao_proposta"
                            placeholder="Descreva como nossa parceria pode gerar valor mútuo, suas principais competências e expectativas..."
                            rows={5}
                            className="border-0 bg-background/80 focus:bg-background resize-none"
                            value={f.descricao_proposta}
                            onChange={onChange}
                            required
                          />
                        </div>
                      </Card>

                      <Card className="p-4 bg-muted/20 border-0">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground" htmlFor="experiencia">Experiência Relevante</label>
                          <Textarea 
                            id="experiencia"
                            placeholder="Conte sobre sua experiência em gestão de pessoas, consultoria ou áreas relacionadas..."
                            rows={3}
                            className="border-0 bg-background/80 focus:bg-background resize-none"
                            value={f.experiencia}
                            onChange={onChange}
                          />
                        </div>
                      </Card>

                      <div className="pt-4">
                        <Button className="w-full" size="lg" type="submit" disabled={sending}>
                          <Mail className="w-5 h-5 mr-2" />
                          {sending ? "Enviando..." : "Enviar Proposta de Parceria"}
                        </Button>

                        <p className="text-sm text-muted-foreground text-center mt-4">
                          * Campos obrigatórios. Entraremos em contato em até 48 horas.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejaParceiroForm;