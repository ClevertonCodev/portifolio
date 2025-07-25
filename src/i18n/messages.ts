import en_hero from './en/en_hero'
import en_experience from './en/en_experience'
import en_projects from './en/en_projects'
import en_about from './en/en_about'
import en_contact from './en/en_contact'
import es_hero from './es/es_hero'
import es_experience from './es/es_experience'
import es_projects from './es/es_projects'
import es_about from './es/es_about'
import es_contact from './es/es_contact'
import pt_hero from './pt/pt_hero'
import pt_conctact from './pt/pt_contact'
import pt_projects from './pt/pt-projects'
import pt_about from './pt/pt_about'
import experience from './pt/pt-experience'

export default {
  pt: {
    hero: pt_hero,
    experience: experience,
    projects: pt_projects,
    about: pt_about,    
    contact: pt_conctact 
 },
  en: {
    hero: en_hero,
    experience: en_experience,
    projects: en_projects,
    about: en_about,
    contact: en_contact
  },
  es: {
    hero: es_hero,
    experience: es_experience,
    projects: es_projects,
    about: es_about,
    contact: es_contact
  }
}
