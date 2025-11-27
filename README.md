# Portfolio - Cleverton Santos

Portfolio pessoal desenvolvido com Vue.js 3, TypeScript e Vite. Uma aplicação moderna e responsiva que apresenta projetos, experiências profissionais, educação e informações de contato, com suporte completo a múltiplos idiomas (Português, Inglês e Espanhol).

## 🚀 Tecnologias

- **Vue.js 3.4.21** - Framework JavaScript progressivo para construção de interfaces
- **TypeScript 5.4** - Superset JavaScript com tipagem estática
- **Vite 5.2.8** - Build tool rápida e otimizada
- **Vue Router 4.3.0** - Roteamento oficial para Vue.js
- **Vue I18n 9** - Sistema de internacionalização para Vue.js
- **Tailwind CSS 3.4.3** - Framework CSS utility-first

## ✨ Funcionalidades

- 🌐 **Multi-idioma**: Suporte completo para Português (PT), Inglês (EN) e Espanhol (ES)
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- 🎨 **UI Moderna**: Design glassmorphism com efeitos visuais elegantes
- 📄 **Seções Completas**:
  - **Hero Section**: Apresentação pessoal com links para redes sociais
  - **Experiência**: Histórico profissional detalhado
  - **Projetos**: Portfólio de projetos principais e secundários
  - **Sobre**: Informações sobre educação e conquistas
  - **Contato**: Formulário de contato e informações de redes sociais
- 🔄 **Vue I18n**: Sistema de internacionalização reativo e integrado
- 💾 **Composables**: Hooks reutilizáveis para gerenciamento de dados localizados
- 🎯 **SEO Otimizado**: Configuração para melhor indexação
- ⚡ **Performance**: Build otimizada com Vite para carregamento rápido

## 📁 Estrutura do Projeto

```
portifolio/
├── public/                    # Arquivos estáticos
│   ├── cv.pdf               # Currículo em PDF
│   └── favicon.ico          # Favicon
├── src/                      # Código fonte
│   ├── assets/             # Recursos estáticos
│   │   ├── img/           # Imagens do projeto
│   │   └── main.css       # Estilos globais
│   ├── components/         # Componentes Vue
│   │   ├── home/         # Componentes das seções principais
│   │   │   ├── HeroSection.vue
│   │   │   ├── ExperienceSection.vue
│   │   │   ├── ProjectsSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── icons/        # Componentes de ícones SVG
│   │   ├── AppNavbar.vue  # Barra de navegação
│   │   ├── AppFooter.vue  # Rodapé
│   │   ├── LanguageSelector.vue  # Seletor de idioma
│   │   └── GlassButton.vue  # Botão com efeito glassmorphism
│   ├── composables/       # Composables Vue (hooks)
│   │   ├── LocalizedData.ts  # Hook para dados localizados
│   │   └── LocalizedDate.ts  # Hook para formatação de datas
│   ├── i18n/             # Arquivos de internacionalização
│   │   ├── pt/          # Conteúdo em Português
│   │   │   ├── pt_hero.ts
│   │   │   ├── pt-experience.ts
│   │   │   ├── pt-projects.ts
│   │   │   ├── pt_about.ts
│   │   │   └── pt_contact.ts
│   │   ├── en/          # Conteúdo em Inglês
│   │   ├── es/          # Conteúdo em Espanhol
│   │   ├── messages.ts  # Configuração de mensagens i18n
│   │   └── profiles.ts  # Links de perfis sociais
│   ├── router/          # Configuração de rotas
│   │   └── index.ts     # Router Vue
│   ├── views/           # Views/Vistas
│   │   └── HomeView.vue # Página principal
│   ├── App.vue          # Componente raiz
│   ├── main.ts          # Ponto de entrada da aplicação
│   └── types.d.ts       # Definições TypeScript
├── index.html           # HTML principal
├── vite.config.ts       # Configuração do Vite
├── tailwind.config.js   # Configuração do Tailwind CSS
├── tsconfig.json        # Configuração TypeScript
└── package.json         # Dependências do projeto
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/ClevertonCodev/portifolio.git
cd portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em [http://localhost:5173](http://localhost:5173)

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot-reload
- `npm run build` - Cria uma build de produção otimizada
- `npm run preview` - Visualiza a build de produção localmente
- `npm run type-check` - Executa verificação de tipos TypeScript
- `npm run lint` - Executa o linter ESLint e corrige problemas automaticamente
- `npm run format` - Formata o código com Prettier

## 🌍 Internacionalização

O projeto utiliza Vue I18n para gerenciamento de idiomas. Os conteúdos estão organizados por idioma na pasta `src/i18n/`:

- **Português (pt)**: Idioma padrão
- **Inglês (en)**: Tradução completa disponível
- **Espanhol (es)**: Tradução completa disponível

O sistema utiliza composables Vue (`useLocalizedData`) para reatividade automática quando o idioma é alterado. A preferência de idioma pode ser persistida no `localStorage` através do componente `LanguageSelector`.

### Estrutura de Conteúdo

Cada idioma possui os seguintes arquivos:
- `*_hero.ts` - Seção hero/apresentação
- `*_experience.ts` - Experiências profissionais
- `*_projects.ts` - Projetos do portfólio
- `*_about.ts` - Informações sobre educação e conquistas
- `*_contact.ts` - Informações de contato

## 🎨 Estilização

O projeto utiliza Tailwind CSS 3 com configuração customizada para:
- Cores primárias e neutras personalizadas
- Efeitos glassmorphism
- Animações e transições suaves
- Design responsivo com breakpoints otimizados
- Suporte a modo escuro (dark mode)

Fontes utilizadas:
- **Open Sans Variable** - Fonte principal variável
- **Source Sans Pro** - Fonte secundária

## 📦 Build de Produção

Para criar uma build otimizada para produção:

```bash
npm run build
npm run preview
```

A aplicação será gerada na pasta `dist/`, otimizada e pronta para deploy em plataformas como:
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor estático

## 🔧 Configuração

### Personalização de Conteúdo

Para personalizar o conteúdo do portfólio, edite os arquivos em `src/i18n/[idioma]/`:
- `pt_hero.ts` / `en_hero.ts` / `es_hero.ts` - Seção hero
- `pt-experience.ts` / `en_experience.ts` / `es_experience.ts` - Experiências profissionais
- `pt-projects.ts` / `en_projects.ts` / `es_projects.ts` - Projetos
- `pt_about.ts` / `en_about.ts` / `es_about.ts` - Informações sobre
- `pt_contact.ts` / `en_contact.ts` / `es_contact.ts` - Informações de contato

### Links de Perfis Sociais

Edite `src/i18n/profiles.ts` para atualizar os links das redes sociais.

### Configuração do Vite

O arquivo `vite.config.ts` pode ser customizado para:
- Configurar aliases de importação
- Adicionar plugins adicionais
- Configurar variáveis de ambiente
- Otimizar a build

### Configuração do Tailwind

O arquivo `tailwind.config.js` permite:
- Personalizar cores do tema
- Adicionar classes customizadas
- Configurar plugins do Tailwind
- Ajustar breakpoints responsivos

## 🧩 Composables

O projeto utiliza composables Vue para lógica reutilizável:

- **`useLocalizedData<T>`**: Hook para obter dados localizados reativos do Vue I18n
- **`useLocalizedDate`**: Hook para formatação de datas localizadas

## 📝 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

## 👤 Autor

**Cleverton Santos**
- LinkedIn: [cleverton-santos-5548a1233](https://www.linkedin.com/in/cleverton-santos-5548a1233/)
- GitHub: [ClevertonCodev](https://github.com/ClevertonCodev)
- Email: clevertonsantoscodev@gmail.com
- Website: [clevertonsantos.com](https://www.clevertonsantos.com/)

---

Desenvolvido com ❤️ usando Vue.js e TypeScript

