# FM Team — Guia de Estilo Visual (Área de Membros)

Documento portátil do "modelo visual" usado na home e nas páginas internas.
Feito para reconstruir o mesmo visual em **outro projeto React + Tailwind CSS**.
Copie os tokens, o CSS e os padrões de componente abaixo.

Stack de referência: **Vite + React + TypeScript + Tailwind CSS**.

---

## 1. DNA visual (resumo)

Tema **preto + dourado cinematográfico**, estilo Netflix premium.

- **Fundo:** preto quase puro (`#0a0a0b` / `#0b0b0b`).
- **Acento:** dourado (gradiente `#f4dfa0 → #e6b450 → #b8860b`) e a escala **amber** do Tailwind.
- **Títulos:** serif de alto contraste (**Playfair Display**).
- **Corpo/labels:** **Inter**.
- **Marca/wordmark:** **Clash Display**.
- **Assinaturas:** brilho radial quente (`warm-glow`), sombra dourada difusa (`gold-glow`),
  fio de luz dourado (`gold-hairline`), cards com pôster em cima + título centralizado embaixo,
  entrada escalonada dos cards e varredura de brilho no hover.

---

## 2. Paleta de cores

| Uso | Valor |
|---|---|
| Fundo base | `#0a0a0b` |
| Fundo seções | `#0b0b0b` |
| Fundo card | `#0e0e0f` |
| Gradiente do hero | `linear-gradient(135deg, #16161c 0%, #0e0e13 100%)` |
| **Dourado (texto/realce)** | `linear-gradient(120deg, #f4dfa0 0%, #e6b450 42%, #b8860b 100%)` |
| Dourado sólido claro | `#FCD34D` (amber-300) |
| Dourado sólido | `#FBBF24` (amber-400) |
| Dourado forte | `#F59E0B` (amber-500) |
| Dourado escuro | `#D97706` (amber-600) |
| Texto principal | `#fafafa` / `zinc-100` |
| Texto secundário | `zinc-300` / `zinc-400` |
| Texto sobre dourado | preto `#000` |

A escala **amber** é a padrão do Tailwind (`amber-50…900`). O botão primário usa
`bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600` com texto preto.

---

## 3. Tipografia

| Papel | Fonte | Peso | Classe |
|---|---|---|---|
| Títulos display (H1/H2 grandes) | Playfair Display (serif) | 800 | `.font-display` |
| Subtítulos de seção / modal | Inter | 500 | `.font-heading` |
| Wordmark da marca | Clash Display | 700 | `.font-wordmark` |
| Corpo | Inter | 300–700 | (padrão do `body`) |

### Carregamento das fontes (`index.html`)

```html
<!-- Google Fonts: Playfair Display + Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
<!-- Clash Display (Fontshare) — usado só no wordmark -->
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap" rel="stylesheet" />
```

`body { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif; }`

---

## 4. Utilitários CSS (cole no seu `index.css`, dentro de `@layer components`)

```css
/* Títulos serif premium */
.font-display {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-weight: 800;
  letter-spacing: 0;
}

/* Subtítulos / cabeçalhos */
.font-heading {
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  font-weight: 500;
  letter-spacing: -0.005em;
}

/* Wordmark da marca */
.font-wordmark {
  font-family: 'Clash Display', 'Inter', ui-sans-serif, system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* Texto com preenchimento dourado (usar em <span class="text-gold">) */
.text-gold {
  background: linear-gradient(120deg, #f4dfa0 0%, #e6b450 42%, #b8860b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Fio de luz dourado (divisor fino) */
.gold-hairline {
  height: 1px;
  background: linear-gradient(90deg, rgba(230, 180, 80, 0.9), rgba(230, 180, 80, 0));
}

/* Sombra dourada difusa (hover de cards em destaque) */
.gold-glow {
  box-shadow: 0 20px 60px -20px rgba(230, 180, 80, 0.35);
}

/* Brilho radial quente (hero e fundo de cards) */
.warm-glow {
  background: radial-gradient(
    60% 80% at 78% 42%,
    rgba(230, 180, 80, 0.35) 0%,
    rgba(184, 134, 11, 0.14) 35%,
    rgba(10, 10, 11, 0) 70%
  );
}

/* Entrada escalonada dos cards (Netflix-style) */
.card-enter {
  opacity: 0;
  animation: cardEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* Varredura de brilho no hover do card (colocar dentro de um pai .group) */
.card-sheen {
  background: linear-gradient(115deg, transparent 30%, rgba(244, 223, 160, 0.14) 48%, transparent 66%);
  transform: translateX(-120%);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.group:hover .card-sheen {
  transform: translateX(120%);
}

@keyframes cardEnter {
  from { opacity: 0; transform: translateY(26px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
```

> Dica de acessibilidade: envolva as animações em `@media (prefers-reduced-motion: reduce)`
> desligando `animation`/`transition` para quem prefere menos movimento.

---

## 5. Tailwind config (trecho)

```ts
// tailwind.config.ts
export default {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // paleta primária = amber
        primary: {
          DEFAULT: '#F59E0B',
          300: '#FCD34D', 400: '#FBBF24', 500: '#F59E0B', 600: '#D97706', 700: '#B45309',
        },
      },
      borderRadius: { lg: '0.75rem' },
    },
  },
};
```

A escala `amber-*` e `zinc-*` já vêm no Tailwind — o projeto usa direto (`text-amber-300`, `text-zinc-400`, etc.).

---

## 6. Padrões de componente (recipes de classe)

### 6.1 Card (pôster 16:10 + faixa de título embaixo)

```tsx
<button className="card-enter group relative w-[240px] shrink-0 snap-start text-left sm:w-[300px]">
  <div className="overflow-hidden rounded-xl border border-amber-500/20 bg-[#0e0e0f]
                  shadow-[0_12px_45px_-18px_rgba(0,0,0,0.9)] transition-all duration-300
                  group-hover:-translate-y-1.5 group-hover:border-amber-400/70 group-hover:gold-glow">
    {/* Pôster */}
    <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0b]">
      <img src={img} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      <div className="warm-glow absolute inset-0 opacity-40 mix-blend-soft-light" />
      <div className="card-sheen pointer-events-none absolute inset-0" />
    </div>
    {/* Faixa de título */}
    <div className="border-t border-amber-500/15 bg-black/70 px-4 py-4 text-center">
      <h3 className="font-display text-base font-semibold text-amber-50 sm:text-lg">{titulo}</h3>
    </div>
  </div>
</button>
```

**Card em destaque** (ex.: "Comece por aqui"): trocar a borda por
`border-amber-400/70 ring-1 ring-amber-400/30 gold-glow` e usar um selo dourado sólido
`bg-gradient-to-r from-amber-300 to-amber-500 text-black`.

### 6.2 Hero

```tsx
<div className="relative flex min-h-[58vh] w-full items-center overflow-hidden bg-[#0a0a0b] pt-10 pb-10">
  <div className="warm-glow pointer-events-none absolute inset-0 hero-glow-drift" />
  <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10">
    <h1 className="font-display text-4xl font-bold leading-[1.1] text-white drop-shadow sm:text-6xl">
      Bem-vindo ao <span className="text-gold">Time!</span>
    </h1>
    <div className="gold-hairline my-6 w-40" />
    <p className="max-w-xl text-sm text-zinc-300 sm:text-base">…</p>
  </div>
</div>
```

### 6.3 Botões

```tsx
{/* Primário (dourado) */}
<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
                   bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3
                   text-sm font-bold text-black shadow-lg transition-all hover:brightness-110 sm:text-base">
  Assistir
</button>

{/* Secundário (contorno) */}
<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
                   border border-amber-500/40 bg-white/5 px-7 py-3 text-sm font-semibold text-amber-100
                   backdrop-blur transition-colors hover:border-amber-400/70 hover:bg-white/10 sm:text-base">
  Explorar
</button>

{/* Voltar premium (pílula com blur) */}
<button className="group inline-flex items-center gap-2 rounded-full border border-amber-400/30
                   bg-black/45 px-4 py-2 text-sm font-semibold text-amber-50 shadow-lg ring-1 ring-white/5
                   backdrop-blur-md transition-all hover:border-amber-300/60 hover:bg-black/65">
  ← Voltar
</button>
```

### 6.4 Fileira horizontal (Netflix) + setas + bolinhas

```tsx
{/* Scroller: snap horizontal, scrollbar escondida, folga p/ o hover não cortar */}
<div className="flex snap-x gap-4 overflow-x-auto scroll-smooth pt-3 pb-3
                [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
  {cards}
</div>

{/* Setas (desktop, aparecem no hover do .group/row que envolve o scroller) */}
<button className="absolute inset-y-0 left-0 z-10 hidden w-12 items-center justify-center
                   bg-gradient-to-r from-black/80 to-transparent text-white opacity-0
                   transition-opacity hover:from-black md:flex group-hover/row:opacity-100"> ‹ </button>

{/* Bolinha de paginação: usar um <span> interno p/ ficar fina (contorna min-height de button) */}
<span className="block h-[3px] rounded-full transition-all duration-500
                 [&.active]:w-4 [&.active]:bg-amber-300 w-[3px] bg-white/20" />
```

---

## 7. Como reusar em um projeto novo

1. **Fontes:** cole os `<link>` da seção 3 no `index.html`.
2. **Tailwind:** garanta `darkMode: ['class']` e a paleta amber (já é padrão). Aplique um fundo escuro global (`bg-[#0a0a0b] text-zinc-100`).
3. **CSS:** cole os utilitários da seção 4 no seu `index.css` (dentro de `@layer components`, com os `@keyframes` fora do layer).
4. **Componentes:** recrie os padrões da seção 6 (card, hero, botões, fileira). São só classes Tailwind + as classes custom.
5. **Ícones:** o projeto usa **lucide-react**. Instale se quiser os mesmos ícones.

Com esses 5 passos, qualquer projeto React + Tailwind reproduz o mesmo visual da home.

---

*Gerado a partir do código real de `src/components/netflix/*`, `src/index.css`, `tailwind.config.ts` e `index.html`.*
