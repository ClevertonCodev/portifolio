import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Ingressaê',
      techstack: ['Vue.js', 'PHP', 'Mysql', 'MongoDb'],
      image: 'ingrassae.png',
      description:
        'Ingressaê is a module of Paytour, an e-commerce platform for selling event tickets of any size. Designed to offer an intuitive and secure experience, it allows organizers to manage ticket batches, bundles, forms, ticket availability, and payments in a practical and efficient way.',
      src: '',
      url: 'https://loja-ingressa-e.paytour-dev.com.br/',
      status: 'Restricted'
    },
    {
      name: 'Portfolio',
      techstack: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
      image: 'portifolio.png',
      description:
        'I developed a modern and responsive portfolio to showcase my projects and skills. I used Vue.js for building the interface, TypeScript for a more robust codebase, and Tailwind CSS for a clean and efficient design. The portfolio enables intuitive navigation and an optimized experience across different devices.',
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
        'I developed part of an e-commerce platform using Django as the backend, ensuring a robust and scalable structure. The system allows users to browse products, add items to their cart, and complete their purchases intuitively.',
      url: '',
      src: 'https://github.com/ClevertonCodev/django-ecommerce'
    },
    {
      name: 'Frequently Asked Questions',
      techstack: ['Nest.js', 'TypeScript', 'Prisma', 'Docker'],
      description:
        'I developed a Frequently Asked Questions (FAQ) API using NestJS, a modern framework for Node.js that facilitates the creation of scalable and well-structured applications.',
      url: '',
      src: 'https://github.com/ClevertonCodev/perguntas-frequentes'
    },
    {
      name: 'Delivery Management',
      techstack: ['React.js', 'TypeScript', 'UI'],
      description:
        'I developed the interface of a delivery and tracking system using modern technologies to ensure a smooth and intuitive experience. The frontend allows users to track delivery status in real-time, view order details, and receive updates on package location. The interface is designed to be responsive, providing an optimized experience on both mobile and desktop devices.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto-adm-lets'
    },
    {
      name: 'OAuth2 Authentication',
      techstack: ['React.js', 'TypeScript', 'Bootstrap', 'Laravel', 'MySQL'],
      description:
        'Implementation of social login, allowing fast and secure authentication with Google and Facebook. The integration was done using OAuth, ensuring a simplified login experience for users. In Laravel, authentication credentials are securely processed and stored, while React handles the user interface and experience. The login flow is responsive and optimized for different devices.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto_socialLogin'
    },
  ]
}

export default projects
