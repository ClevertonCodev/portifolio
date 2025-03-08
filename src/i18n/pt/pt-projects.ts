import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projetos',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Ingressaê',
      techstack: ['Vue.js', 'PHP', 'Mysql', 'MongoDb'],
      image: 'ingrassae.png',
      description:
        'O Ingressaê é um módulo da Paytour, um e-commercer para venda de ingressos de eventos de qualquer porte. Desenvolvido para oferecer uma experiência intuitiva e segura, ele permite que organizadores gerenciem lotes, combos, formulários, disponibilidade de ingressos e pagamentos de forma prática e eficiente.',
      src: '',
      url: 'https://loja-ingressa-e.paytour-dev.com.br/',
      status: 'Restrito'
    },
    {
      name: 'Portifólio',
      techstack: ['Vuejs', 'TypeScript', 'Tailwind CSS'],
      image: 'portifolio.png',
      description:
        'Desenvolvi um portfólio moderno e responsivo para apresentar meus projetos e habilidades. Utilizei Vue.js para a construção da interface, Typescript para um código mais robusto e Tailwind CSS para um design limpo e eficiente. O portfólio permite navegação intuitiva e uma experiência otimizada em diferentes dispositivos.',
      src: 'https://github.com/ClevertonCodev/projeto-portifolio',
      url: 'https://www.clevertonsantos.com/',
      status: ''
    },
  ],
  other: [
    {
      name: 'E-commerce',
      techstack: ['Python', 'Django'],
      description:
        'Desenvolvi parte  de um e-commerce utilizando Django como backend, garantindo uma estrutura robusta e escalável. O sistema permite que os usuários naveguem pelos produtos, adicionem itens ao carrinho e concluam suas compras de forma intuitiva.',
      url: '',
      src: 'https://github.com/ClevertonCodev/django-ecommerce'
    },
    {
      name: 'Perguntas frequentes',
      techstack: ['Nest.js', 'Typescript', 'Prisma', 'Docker'],
      description:
        'Desenvolvi uma API de perguntas frequentes (FAQ) utilizando NestJS, um framework moderno para Node.js que facilita a construção de aplicações escaláveis e bem estruturadas.',
      url: '',
      src: 'https://github.com/ClevertonCodev/perguntas-frequentes'
    },
    {
      name: 'Gestão de entregas',
      techstack: ['React.js', 'Typescript', 'UI'],
      description:
        'Desenvolvi a interface de um sistema de entrega e rastreamento utilizando tecnologias modernas para garantir uma experiência fluida e intuitiva. O frontend permite que os usuários acompanhem o status das entregas em tempo real, visualizem detalhes do pedido e obtenham atualizações sobre a localização do pacote. A interface foi projetada para ser responsiva, proporcionando uma experiência otimizada em dispositivos móveis e desktops.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto-adm-lets'
    },
    {
      name: 'Autenticação OAuth2',
      techstack: ['React.js', 'Typescript', 'Bootstrap', 'Laravel.php' , 'MySQL'],
      description:
        'Implementação de login social, permitindo autenticação rápida e segura com Google e Facebook. A integração foi feita utilizando OAuth, garantindo uma experiência de login simplificada para os usuários. No Laravel, as credenciais de autenticação são processadas e armazenadas de forma segura, enquanto o React gerencia a interface e a experiência do usuário. O fluxo de login é responsivo e otimizado para diferentes dispositivos.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto_socialLogin'
    },
  ]
}

export default projects
