import type { Contact } from '@/types'

const contact: Contact = {
  title: 'Contatos',
  description:
    'Se você quiser entrar em contato comigo, pode fazê-lo através das minhas redes sociais ou por e-mail.',
  social: 'Aqui estão minhas contas de mídia social e endereço de e-mail:',
  //Mantén los corchetes y comillas alrededor de @ -> {'@'}
  email: "clevertonsantoscodev{'@'}mail.com",
  copy: 'Copiar',
  copied: 'Copiado',
  form: 'Alternativamente, puedes usar este formulario para enviarme un mensaje:',
  name_label: 'Nombre',
  name_placeholder: 'Ingresa tu Nombre',
  email_label: 'Correo Electrónico',
  email_placeholder: 'Ingresa tu Correo Electrónico',
  message_label: 'Mensaje',
  message_placeholder: 'Ingresa tu Mensaje',
  send: 'Enviar Mensaje',
  sending: 'Enviando...',
  restriction: 'Puedes enviar un mensaje cada 30 minutos, por favor espera.'
}

export default contact
