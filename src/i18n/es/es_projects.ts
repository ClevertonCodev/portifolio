import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Proyectos',
  source: 'GitHub',
  website: 'Sitio Web',
  main: [
    {
      name: 'Ingressaê',
      techstack: ['Vue.js', 'PHP', 'Mysql', 'MongoDb'],
      image: 'ingrassae.png',
      description:
        'Ingressaê es un módulo de Paytour, un e-commerce para la venta de entradas para eventos de cualquier tamaño. Desarrollado para ofrecer una experiencia intuitiva y segura, permite a los organizadores gestionar lotes, combos, formularios, disponibilidad de entradas y pagos de manera práctica y eficiente.',
      src: '',
      url: 'https://loja-ingressa-e.paytour-dev.com.br/',
      status: 'Restringido'
    },
    {
      name: 'Portafolio',
      techstack: ['Vuejs', 'TypeScript', 'Tailwind CSS'],
      image: 'portifolio.png',
      description:
        'Desarrollé un portafolio moderno y responsivo para presentar mis proyectos y habilidades. Utilicé Vue.js para construir la interfaz, TypeScript para un código más robusto y Tailwind CSS para un diseño limpio y eficiente. El portafolio permite una navegación intuitiva y una experiencia optimizada en diferentes dispositivos.',
      src: 'https://www.clevertonsantos.com/',
      url: 'https://github.com/ClevertonCodev/projeto-portifolio',
      status: ''
    },
  ],
  other: [
    {
      name: 'E-commerce',
      techstack: ['Python', 'Django'],
      description:
        'Desarrollé parte de un e-commerce utilizando Django como backend, garantizando una estructura robusta y escalable. El sistema permite a los usuarios navegar por los productos, agregar artículos al carrito y completar sus compras de forma intuitiva.',
      url: '',
      src: 'https://github.com/ClevertonCodev/django-ecommerce'
    },
    {
      name: 'Preguntas frecuentes',
      techstack: ['Nest.js', 'Typescript', 'Prisma', 'Docker'],
      description:
        'Desarrollé una API de preguntas frecuentes (FAQ) utilizando NestJS, un framework moderno para Node.js que facilita la construcción de aplicaciones escalables y bien estructuradas.',
      url: '',
      src: 'https://github.com/ClevertonCodev/perguntas-frequentes'
    },
    {
      name: 'Gestión de entregas',
      techstack: ['React.js', 'Typescript', 'UI'],
      description:
        'Desarrollé la interfaz de un sistema de entrega y rastreo utilizando tecnologías modernas para garantizar una experiencia fluida e intuitiva. El frontend permite a los usuarios seguir el estado de las entregas en tiempo real, ver detalles del pedido y obtener actualizaciones sobre la ubicación del paquete. La interfaz fue diseñada para ser responsiva, proporcionando una experiencia optimizada en dispositivos móviles y de escritorio.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto-adm-lets'
    },
    {
      name: 'Autenticación OAuth2',
      techstack: ['React.js', 'Typescript', 'Bootstrap', 'Laravel.php', 'MySQL'],
      description:
        'Implementación de inicio de sesión social, permitiendo una autenticación rápida y segura con Google y Facebook. La integración se realizó utilizando OAuth, garantizando una experiencia de inicio de sesión simplificada para los usuarios. En Laravel, las credenciales de autenticación se procesan y almacenan de forma segura, mientras que React gestiona la interfaz y la experiencia del usuario. El flujo de inicio de sesión es responsivo y está optimizado para diferentes dispositivos.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto_socialLogin'
    },
  ]
}

export default projects
