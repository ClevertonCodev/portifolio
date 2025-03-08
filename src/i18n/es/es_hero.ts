import type { Hero } from '@/types'
import profilesLinks from '../profiles'
const hero: Hero = {
  title: 'Hola, me llamo Cleverton Santos, Software Developer!',
  subtitle:
    'Soy un apasionado de la tecnología y de enfrentar nuevos desafíos. Técnico en Desarrollo Web por la UFRN y graduado en Análisis y Desarrollo de Sistemas, tengo experiencia en JavaScript/TypeScript, PHP y Python, habiendo participado en proyectos que requirieron soluciones creativas y eficaces. He desarrollado habilidades esenciales como trabajo en equipo, comunicación y resolución de problemas. Siempre estoy en busca de nuevos conocimientos para mantenerme actualizado y contribuir de manera significativa en proyectos innovadores.',
  name: 'Cleverton Santos',
  url: 'https://www.clevertonsantos.com/',
  contact_button: 'Contáctame',
  //Si un perfil tiene una cadena vacía '', el botón no se renderizará
  profiles: profilesLinks,
  home: 'Inicio'
}

export default hero
