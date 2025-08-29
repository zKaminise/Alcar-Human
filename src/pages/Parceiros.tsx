import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, Handshake, TrendingUp, Award, Mail, ArrowRight } from "lucide-react";
import bannerParceiros from "@/assets/parceiros-hero.jpg";

const benefits = [
  { icon: Handshake, title: "Parcerias Estratégicas", description: "Construímos relacionamentos duradouros baseados em confiança mútua e resultados compartilhados." },
  { icon: TrendingUp, title: "Crescimento Conjunto", description: "Nossos parceiros crescem conosco através de oportunidades exclusivas e projetos colaborativos." },
  { icon: Users, title: "Rede Especializada", description: "Acesso a uma rede qualificada de profissionais e empresas do setor de desenvolvimento humano." },
  { icon: Award, title: "Certificações e Reconhecimento", description: "Oferecemos certificações e reconhecimento oficial para parceiros qualificados." }
];

const currentPartners = [
  { name: "Instituto de Liderança Empresarial", logo: "https://via.placeholder.com/200x100/2563eb/ffffff?text=ILE", description: "Parceria estratégica em programas de desenvolvimento de liderança." },
  { name: "Consultoria Estratégica Brasil", logo: "https://via.placeholder.com/200x100/dc2626/ffffff?text=CEB", description: "Colaboração em projetos de mapeamento estratégico empresarial." },
  { name: "Centro de Desenvolvimento Profissional", logo: "https://via.placeholder.com/200x100/16a34a/ffffff?text=CDP", description: "Parceria em cursos e workshops de capacitação profissional." },
  { name: "Grupo Inovação Corporativa", logo: "https://via.placeholder.com/200x100/7c3aed/ffffff?text=GIC", description: "Projetos conjuntos em transformação digital e inovação." }
];

const Parceiros = () => {
  // estado do formulário (controlado)
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    cargo: "",
    interesse: "",
    empresa_info: "",
    hp: "",                // honeypot
    source: "parceiros",   // identifica o formulário
  });
  const [sending, setSending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // substitui hífens por underline sem usar replaceAll
    const key = id ? id.replace(/-/g, "_") : "";
    if (!key) return;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Falha ao enviar");
      alert("Proposta de parceria enviada com sucesso!");
      setForm({
        nome: "", empresa: "", email: "", telefone: "", cargo: "",
        interesse: "", empresa_info: "", hp: "", source: "parceiros",
      });
    } catch {
      alert("Não foi possível enviar. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative py-32 bg-cover bg-center text-white"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerParceiros})` }}
        >
          <div className="container-section relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nossos Parceiros
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                Construímos relacionamentos estratégicos que geram valor mútuo e
                amplificam nosso impacto no desenvolvimento humano e empresarial.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios da Parceria */}
        <section className="py-20 bg-background">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Por que ser um <span className="text-gradient-primary">Parceiro Alçar</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Oferecemos uma parceria estratégica que vai além do tradicional,
                criando oportunidades de crescimento mútuo e impacto conjunto.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Card
                      key={index}
                      className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <CardHeader className="pb-4">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-lg font-semibold">
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Parceiros Atuais */}
        <section className="py-20  bg-muted/50">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Empresas Parceiras
              </h2>
              <p className="text-xl text-muted-foreground">
                Conheça as organizações que já fazem parte da nossa rede de parceiros.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentPartners.map((partner, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-32 h-16 object-contain bg-gray-50 rounded-lg p-2"
                        />
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {partner.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seja um Parceiro */}
        <section className="py-20 bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Seja um <span className="text-gradient-primary">Parceiro Alçar</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Interessado em fazer parte da nossa rede? Preencha o formulário abaixo
                  e entraremos em contato para discutir oportunidades de parceria.
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={onSubmit}>
                    {/* honeypot invisível */}
                    <input
                      type="text"
                      name="hp"
                      value={form.hp}
                      onChange={(e) => setForm((p) => ({ ...p, hp: e.target.value }))}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input id="nome" placeholder="Seu nome completo" className="h-12"
                               value={form.nome} onChange={onChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa *</Label>
                        <Input id="empresa" placeholder="Nome da sua empresa" className="h-12"
                               value={form.empresa} onChange={onChange} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" className="h-12"
                               value={form.email} onChange={onChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input id="telefone" placeholder="(11) 99999-9999" className="h-12"
                               value={form.telefone} onChange={onChange} required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo/Função</Label>
                      <Input id="cargo" placeholder="Seu cargo na empresa" className="h-12"
                             value={form.cargo} onChange={onChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interesse">Área de Interesse para Parceria *</Label>
                      <Textarea id="interesse" placeholder="Descreva qual área de parceria mais lhe interessa e como podemos trabalhar juntos..."
                                className="min-h-32" value={form.interesse} onChange={onChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa-info">Informações da Empresa</Label>
                      <Textarea id="empresa-info" placeholder="Conte-nos mais sobre sua empresa, área de atuação, número de funcionários, etc."
                                className="min-h-24" value={form.empresa_info} onChange={onChange} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="w-full" size="lg" type="submit" disabled={sending}>
                        <Mail className="w-4 h-4 mr-2" />
                        {sending ? "Enviando..." : "Enviar Proposta de Parceria"}
                      </Button>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" size="lg" type="button"
                              onClick={() => window.open("https://wa.me/5567996442404?text=Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falarmos%20mais%20sobre%20Parcerias!", '_blank')}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Agendar Reunião
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Parceiros;
