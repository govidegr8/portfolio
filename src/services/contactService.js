import emailjs from '@emailjs/browser'

const config = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
}

const hasConfiguration = Object.values(config).every(Boolean)

export const sendContactMessage = (form) => {
  if (!hasConfiguration) {
    return Promise.reject(new Error('Email service is not configured.'))
  }

  return emailjs.sendForm(config.serviceId, config.templateId, form, {
    publicKey: config.publicKey,
  })
}
