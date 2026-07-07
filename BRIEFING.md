# Kenay Site — Briefing & Design System

> Documento de referência gerado na fase de descoberta. Serve como fonte da verdade para todas as decisões de design e desenvolvimento.

---

## Posicionamento

**Headline principal:**
> Tecnologia que transforma processos em resultados reais.

**Tagline secundária:**
> Desenvolvemos sistemas, aplicativos e integrações que automatizam operações, conectam pessoas e impulsionam o crescimento das empresas.

**Decisão:** O posicionamento é amplo e agnóstico de nicho. Não usar "mercado condominial" ou "condomínios" como posicionamento da marca — o público-alvo atual inclui condomínios, mas isso não define a identidade da Kenay.

---

## Conceito Visual

**Premium Tecnológico com propósito.**

| Atributo | Justificativa |
|---|---|
| Moderno | Público B2B exige credibilidade visual contemporânea |
| Tecnológico | Software é o produto; o site deve sentir que nasceu digital |
| Premium | Administradoras e gestores avaliam fornecedores pela imagem |
| Confiável | Gestão de encomendas, leituras e backoffice são missão crítica |
| Objetivo | Decisores B2B não têm tempo — hierarquia clara, zero ruído |

Referências de abordagem: Linear (precisão), Vercel (tech premium), Stripe (confiança corporativa).

---

## Identidade Visual

- **Personalidade:** Séria, confiável, inovadora, orientada a resultados
- **Tom:** Direto, técnico-acessível, sem jargão desnecessário
- **Sensação:** "Isso foi feito por quem entende de tecnologia e de gestão"
- **Linguagem visual:** Fundos escuros com luz focal, tipografia forte, ícones outline, gradientes sutis, espaço negativo generoso

---

## Paleta de Cores

### Primárias

| Token | HEX | Uso |
|---|---|---|
| `--color-primary` | `#2272A8` | CTA principal, links, destaques |
| `--color-primary-dark` | `#1A5A87` | Hover, estados ativos, navbar |
| `--color-primary-light` | `#3A90CC` | Gradientes, ícones, backgrounds sutis |

### Secundária

| Token | HEX | Uso |
|---|---|---|
| `--color-secondary` | `#8DC63F` | Badges, CTAs secundários |
| `--color-secondary-dark` | `#6FA030` | Hover do secundário |

### Destaque

| Token | HEX | Uso |
|---|---|---|
| `--color-accent` | `#0EA5E9` | Highlights, glow, links inline |

### Neutros

| Token | HEX | Uso |
|---|---|---|
| `--color-neutral-950` | `#0A0E1A` | Fundo hero, navbar dark |
| `--color-neutral-900` | `#111827` | Fundo dark sections |
| `--color-neutral-800` | `#1F2937` | Cards dark |
| `--color-neutral-600` | `#4B5563` | Textos secundários dark |
| `--color-neutral-400` | `#9CA3AF` | Texto muted, placeholders |
| `--color-neutral-200` | `#E5E7EB` | Bordas, divisores light |
| `--color-neutral-100` | `#F3F4F6` | Backgrounds alternas |
| `--color-neutral-50` | `#F9FAFB` | Background padrão light |

### Fundo e Textos

| Token | HEX | Uso |
|---|---|---|
| `--color-bg-dark` | `#080C18` | Fundo hero |
| `--color-bg-light` | `#F9FAFB` | Fundo seções claras |
| `--color-text-primary` | `#0F172A` | Texto principal light |
| `--color-text-secondary` | `#475569` | Texto secundário light |
| `--color-text-inverse` | `#F8FAFC` | Texto sobre fundos escuros |
| `--color-text-muted` | `#94A3B8` | Texto suave sobre escuro |

### Semânticas

| Token | HEX | Uso |
|---|---|---|
| `--color-success` | `#22C55E` | Confirmações, status OK |
| `--color-warning` | `#F59E0B` | Alertas |
| `--color-error` | `#EF4444` | Erros |
| `--color-info` | `#06B6D4` | Informações |

### Badges por Produto

| Produto | HEX |
|---|---|
| Sendfly | `#0EA5E9` |
| Metrix | `#22C55E` |
| Nexus | `#6366F1` |

---

## Tipografia

| Uso | Fonte | Pesos |
|---|---|---|
| Títulos / Display | Plus Jakarta Sans | 700, 600 |
| Corpo / Interface | Inter | 400, 500, 600 |
| Código / Técnico | JetBrains Mono | 400 |

### Escala

```
Display:  clamp(3rem, 5vw, 4.5rem)
H1:       clamp(2.5rem, 4vw, 3.5rem)
H2:       clamp(1.75rem, 3vw, 2.25rem)
H3:       clamp(1.25rem, 2vw, 1.5rem)
H4:       1.125rem
Body LG:  1.125rem / line-height 1.75
Body:     1rem / line-height 1.7
Body SM:  0.875rem / line-height 1.6
Caption:  0.75rem / line-height 1.5
```

### Letter-spacing

```
Display/H1: -0.03em
H2/H3:      -0.02em
Body:        0
Caption:    +0.08em
```

---

## Grid e Espaçamento

### Containers

```
Principal:  1200px
Estreito:   780px  (texto corrido, FAQ)
Wide:       1400px (hero apenas)
```

### Escala de Espaçamento (base 4px)

```
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128
```

### Border-radius

```
sm:   4px
md:   8px
lg:   12px
xl:   16px
2xl:  24px
full: 9999px
```

### Sombras

```
--shadow-sm:        0 1px 2px rgba(0,0,0,.05)
--shadow-md:        0 4px 12px rgba(0,0,0,.08), 0 1px 3px rgba(0,0,0,.06)
--shadow-lg:        0 12px 32px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)
--shadow-xl:        0 24px 64px rgba(0,0,0,.16), 0 8px 16px rgba(0,0,0,.08)
--shadow-glow:      0 0 0 1px rgba(34,114,168,.3), 0 8px 32px rgba(34,114,168,.2)
--shadow-card-dark: 0 1px 0 rgba(255,255,255,.06) inset, 0 16px 40px rgba(0,0,0,.3)
```

---

## Componentes

### Botões

| Variante | Aparência |
|---|---|
| Primary | `#2272A8` fill → hover `#1A5A87`, radius 8px, padding 12×28 |
| Secondary | outline `#2272A8`, hover fill rgba |
| Ghost | border rgba white, para fundos escuros |
| CTA Hero | gradiente `135deg, #2272A8, #1A5A87`, padding 14×32 |

Transição padrão: `200ms ease`. Hover: `translateY(-1px)` + shadow.

### Cards

| Variante | Aparência |
|---|---|
| Solução | white / radius 16px / shadow-md / hover lift -4px / accent bar top 3px |
| Diferencial | rgba primary 6% / border rgba / hover glow |
| Depoimento | white / shadow-lg / aspas decorativas / avatar circular |

### Inputs

Border 1.5px neutral-200 → focus: border primary + shadow-glow. Radius 8px. Padding 12×16.

### Navbar

Fixed top. Transparente sobre hero → scrolled: `backdrop-filter: blur(20px)` + bg `rgba(8,12,24,.85)`.

### Rodapé

Background `#0A0E1A`. 4 colunas. Texto muted. Border superior `rgba(255,255,255,.08)`.

---

## Ilustrações

- **Estilo:** UI Mockup Photography — capturas realistas dos produtos em frames de dispositivos
- **Hero:** Dashboard Kenay em laptop (baseado no banner.png existente)
- **Sendfly:** App mobile com recurso-grafico_sendfly.png
- **Decorativo:** dot grid, linhas de circuito (referência ao logo), gradientes blur
- **Sem:** ilustrações vetoriais genéricas, ícones coloridos excessivos

---

## Animações

| Animação | Técnica | Duração | Easing |
|---|---|---|---|
| Reveal on scroll | Intersection Observer → opacity + translateY(20px→0) | 600ms | cubic-bezier(0.16,1,0.3,1) |
| Stagger cards | delay 50ms por filho | 600ms | cubic-bezier(0.16,1,0.3,1) |
| Hero fade-in | opacity 0→1 ao carregar | 800ms | ease-out |
| Navbar blur | background + backdrop-filter ao scroll | 300ms | ease |
| Hover botão | translateY(-1px) + box-shadow | 150ms | ease |
| Hover card | translateY(-4px) + box-shadow | 200ms | ease |
| FAQ accordion | max-height + opacity | 300ms | ease |
| Back to top | opacity + scale via scroll | 200ms | ease |
| Smooth scroll | CSS scroll-behavior: smooth | nativo | — |
| Mobile menu | translateX + opacity | 250ms | cubic-bezier(0.16,1,0.3,1) |
| Counter stats | JS requestAnimationFrame | 1500ms | ease-out |
| Glow pulse CTA | CSS @keyframes infinito | 3s | ease-in-out |

Todas respeitam `prefers-reduced-motion`. Implementação: CSS + JS puro.

---

## Regras de Consistência

1. Nunca usar mais de 2 fontes na mesma tela
2. CTA principal sempre azul primário (`#2272A8`)
3. Verde Kenay apenas para produto/sucesso, nunca como CTA
4. Mínimo 4.5:1 de contraste em qualquer texto
5. Espaçamento sempre múltiplo de 4px
6. Hover sempre com transição ≥ 150ms
7. Border-radius máximo de 24px em cards
8. Sombras apenas em elementos sobre background
9. Gradientes: máximo 2 cores, ângulo 135°
10. Grid max-width 1200px — elementos full-bleed apenas no hero

---

## Arquitetura de Conteúdo

### Estrutura da Página (ordem)

```
1.  Navbar
2.  Hero
3.  Social Proof (números)
4.  Quem Somos
5.  Soluções (Sendfly / Metrix / Nexus)
6.  Diferenciais
7.  Como Funciona
8.  Depoimentos
9.  FAQ
10. CTA Final
11. Rodapé
```

### Fluxo Narrativo do Usuário

```
CHEGA     → Hero (quem somos em 5s)
CONFIA    → Números + Quem somos
ENTENDE   → Soluções (o que você vai usar)
COMPARA   → Diferenciais (por que a Kenay)
VISUALIZA → Como funciona (jornada clara)
VALIDA    → Depoimentos (prova social)
DÚVIDAS   → FAQ
CONVERTE  → CTA Final
```

---

## Copywriting por Seção

### Navbar

```
[Logo]   Soluções · Sobre · Como Funciona · FAQ   [Solicitar Demo →]
```

### Hero

- **Badge:** `⚡ Inovação em software para gestão empresarial`
- **H1:** Tecnologia que transforma processos em resultados reais.
- **Sub:** Desenvolvemos sistemas, aplicativos e integrações que automatizam operações, conectam pessoas e impulsionam o crescimento das empresas.
- **CTA 1:** `Solicitar demonstração →`
- **CTA 2:** `Conhecer soluções`

### Social Proof

| Métrica | Valor | Label |
|---|---|---|
| Clientes ativos | +200 | empresas confiam na Kenay |
| Encomendas | +1M | entregas processadas |
| Uptime | 99,9% | disponibilidade garantida |
| Suporte | 24/7 | atendimento especializado |

> ⚠️ Ajustar com dados reais antes do go-live.

### Quem Somos

- **Label:** `Sobre a Kenay`
- **H2:** Somos uma empresa de tecnologia focada em resolver problemas reais de gestão.
- **Texto:** Nascemos para transformar a forma como empresas gerenciam suas operações. Combinamos tecnologia de ponta com profundo conhecimento dos desafios do dia a dia — e construímos soluções que realmente funcionam. Nossa plataforma conecta pessoas, automatiza processos e entrega dados que permitem decisões mais rápidas e inteligentes.
- **4 pilares:** Foco no cliente · Inovação constante · Confiança · Crescimento

### Soluções

- **Label:** `Nossas Soluções`
- **H2:** Uma plataforma completa para sua operação.
- **Sub:** Três produtos integrados, desenvolvidos para resolver os desafios mais críticos da gestão empresarial.

**Sendfly** — `Gestão de Entregas`
> Controle total sobre cada encomenda. Do recebimento à notificação, cada etapa é registrada, rastreada e comunicada automaticamente.
- Notificações automáticas por WhatsApp
- Registro com foto e assinatura digital
- Rastreamento em tempo real
- Relatórios de movimentação

**Metrix** — `Leitura de Consumo`
> Precisão na leitura de água, gás e energia. Elimina erros humanos e gera cobranças justas e transparentes para cada unidade.
- Leitura digital com histórico completo
- Rateio automático por unidade
- Alertas de consumo anormal
- Integração com sistemas de cobrança

**Nexus** — `Backoffice Administrativo`
> O backoffice que organiza toda a sua operação. Financeiro, comunicados, documentos e relatórios — tudo em um só lugar.
- Gestão financeira integrada
- Comunicados e assembleias digitais
- Repositório de documentos
- Dashboard com indicadores em tempo real

### Diferenciais

- **Label:** `Por que a Kenay`
- **H2:** Tecnologia construída para quem não pode parar.

| # | Título | Descrição |
|---|---|---|
| 1 | Plataforma Cloud | Acesse de qualquer lugar, sem instalações ou servidores locais |
| 2 | API REST | Integre com qualquer sistema que sua empresa já utiliza |
| 3 | WhatsApp nativo | Notificações e comunicação onde seus clientes já estão |
| 4 | Segurança enterprise | Dados criptografados, backups automáticos e conformidade |
| 5 | Escalabilidade | Cresce com o seu negócio sem perda de performance |
| 6 | Atualizações constantes | Melhorias contínuas sem interrupção de serviço |
| 7 | Implantação rápida | Em funcionamento em dias, não meses |
| 8 | Suporte especializado | Time dedicado que conhece o seu negócio |
| 9 | Multi-dispositivo | Web, mobile e tablet com experiência consistente |

### Como Funciona

- **Label:** `O processo`
- **H2:** Do primeiro contato ao sucesso da operação.

| # | Etapa | Descrição |
|---|---|---|
| 1 | Contato | Você fala com um especialista que entende o seu negócio |
| 2 | Demonstração | Mostramos a plataforma funcionando com casos reais |
| 3 | Implantação | Configuramos tudo de acordo com a sua operação |
| 4 | Treinamento | Capacitamos sua equipe para extrair o máximo das soluções |
| 5 | Suporte contínuo | Acompanhamos a sua operação e evoluímos junto com você |

### Depoimentos

- **Label:** `Quem usa, aprova`
- **H2:** Empresas que transformaram sua operação com a Kenay.

Placeholders para 3 depoimentos reais.

### FAQ

| Pergunta | Resposta |
|---|---|
| Os sistemas funcionam integrados? | Sim. Sendfly, Metrix e Nexus se integram nativamente, compartilhando dados e notificações. |
| Quanto tempo leva a implantação? | Em média entre 3 e 7 dias úteis, dependendo do porte da operação. |
| Preciso instalar algum software? | Não. Nossa plataforma é 100% em nuvem. Basta um navegador ou o app móvel. |
| Há suporte técnico disponível? | Sim. Suporte especializado em horário comercial via WhatsApp e e-mail. |
| É possível integrar com sistemas que já uso? | Sim. Disponibilizamos API REST completa e documentada. |
| Como funciona a segurança dos dados? | Criptografia em trânsito e em repouso, backups automáticos diários e infraestrutura certificada. |

### CTA Final

- **H2:** Pronto para transformar sua operação?
- **Sub:** Fale com um especialista e veja como a Kenay pode automatizar seus processos e gerar resultados reais para o seu negócio.
- **CTA 1:** `Solicitar demonstração gratuita →`
- **CTA 2:** `Falar pelo WhatsApp`
- **Micro-copy:** `✓ Sem compromisso   ✓ Implantação em dias   ✓ Suporte especializado`

### Rodapé

```
[Logo Kenay]                    Soluções    Empresa         Contato
Innovative Software Solutions   Sendfly     Sobre nós       contato@kenay.com.br
                                Metrix      Como funciona   WhatsApp
                                Nexus       FAQ             LinkedIn

© 2025 Kenay. Todos os direitos reservados.   Privacidade · Termos de Uso
```

---

## Assets Disponíveis

| Arquivo | Uso |
|---|---|
| `assets/logo completo.jpg` | Logo principal (azul + verde) |
| `assets/banner.png` | Referência visual hero — dashboard em dispositivos |
| `assets/logo_sendfly.png` | Logo do produto Sendfly (asa azul) |
| `assets/recurso-grafico_sendfly.png` | Banner do Sendfly com mockup mobile |

---

*Documento gerado em 2025-07-07. Atualizar conforme decisões evoluem.*
