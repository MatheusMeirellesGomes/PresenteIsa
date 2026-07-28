<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff1493&height=120&section=header"/>

<div align="center">
  
# 💝 PresenteIsa

### *Um site especial para celebrar nossos momentos juntos*

</div>

## 📖 Sobre o Projeto

Site desenvolvido como presente, contando nossa história desde o dia em que nos conhecemos: o contador de tempo em tempo real, uma timeline completa com todas as viagens (Brasil e internacional), um globo 3D interativo marcando os lugares por onde passamos, e vales-presente personalizados. Um projeto pessoal, reescrito com carinho pra eternizar cada capítulo.

## ✨ Funcionalidades

- 🌐 **Globo 3D interativo** — pins e arcos de voo conectando Contagem/MG a cada lugar que já visitamos juntos
- ⏰ **Contador de tempo em tempo real** — anos, meses, dias, horas, minutos e segundos desde 04/04/2025, com precisão de calendário real
- 🗓️ **Timeline completa** — de "nos conhecemos" até o próximo capítulo, com uma pasta de fotos por marco
- 📸 **Álbum e modal carinhoso** — clique numa foto e ela abre com uma palavra de carinho
- 🙏 **Seção de Renovação** — versículos e a mensagem da nossa segunda chance
- 🎁 **Vales-presente** — resgate direto pelo WhatsApp
- 📱 **Mobile-first** — pensado pra abrir no celular, sempre no ar via GitHub Pages

## 🛠️ Tecnologias

[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)

React + TypeScript + Vite, cena 3D com `react-three-fiber`/`drei`, roteamento com `react-router-dom` (`HashRouter`, pra funcionar direto no GitHub Pages sem 404 em refresh/link direto no celular).

## 🗂️ Estrutura do Projeto

```
PresenteIsa/
├── src/
│   ├── components/
│   │   ├── hero/        # Globo 3D (Hero3D, Globe, Pin, FlightArc, StarField)
│   │   ├── counter/      # Contador de tempo ao vivo
│   │   ├── timeline/     # Linha do tempo
│   │   ├── gallery/      # Álbum, modal de foto, tira de fotos
│   │   ├── vales/        # Cards de vale-presente
│   │   └── layout/       # Nav e corações flutuantes
│   ├── pages/            # Home, Detalhes, Memórias, Renovação, Vales
│   ├── data/              # timeline.ts, globePins.ts, vales.ts, album.ts...
│   ├── assets/timeline/   # Fotos organizadas por marco da timeline
│   └── utils/ hooks/
├── public/imagens/        # Fotos fixas do primeiro mês
└── .github/workflows/     # Deploy automático pro GitHub Pages
```

## 🚀 Rodando localmente

```bash
git clone https://github.com/MatheusMeirellesGomes/PresenteIsa.git
cd PresenteIsa
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## 🌍 Deploy

Todo push na branch `presenteisa` dispara o workflow em `.github/workflows/deploy.yml`, que builda o projeto e publica em `https://matheusmeirellesgomes.github.io/PresenteIsa/` via GitHub Actions + GitHub Pages. Precisa estar configurado em Settings → Pages → Source: "GitHub Actions" no repositório.

## 📸 Adicionando fotos novas

Cada marco da timeline tem sua própria pasta em `src/assets/timeline/<marco>/` — é só arrastar as fotos pra pasta certa que elas aparecem automaticamente, sem precisar mexer em código.

## 📝 Nota

Este é um projeto pessoal e sentimental. As imagens e conteúdos são privados e fazem parte da nossa história. 💕

---

<div align="center">
  
*Feito com ❤️ por [Matheus Meirelles Gomes](https://github.com/MatheusMeirellesGomes)*

</div>

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff1493&height=120&section=footer"/>
