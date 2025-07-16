# Landing Page - Psicologia

Este projeto é uma landing page desenvolvida com [Next.js](https://nextjs.org/) e React, voltada para consultório de psicologia.

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

---

## Estrutura de Pastas

```
landing-page/
├── components/
│   ├── AboutSection.tsx
│   ├── AreasSection.tsx
│   ├── BenefitsSection.tsx
│   ├── CountersSection.tsx
│   ├── FirstSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ScheduleSection.tsx
│   ├── TestimonialSection.tsx
│   ├── styles/
│   │   ├── _colors.scss
│   │   ├── _mixins.scss
│   │   ├── _placeholders.scss
│   │   └── _sizes.scss
├── public/
│   └── (imagens e assets)
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── globals.css
│       └── page.module.css
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## Observações
- O projeto utiliza TypeScript e módulos SCSS para estilização.
- Para deploy, recomenda-se o [Vercel](https://vercel.com/) ou outra plataforma compatível com Next.js.
- Edite os componentes em `components/` para personalizar as seções da landing page.

---

Desenvolvido por borbabeats
