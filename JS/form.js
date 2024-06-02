const NOMBRE = document.getElementById('nombre')
const EMAIL = document.getElementById('email')
const TELEFONO = document.getElementById('tel')
const TEXTO = document.getElementById('texto')

const ENVIAR = document.getElementById('enviar')

const phonePattern = /^\+?[1-9]\d{1,14}$/; // Patrón de validación de número de teléfono internacional
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación de email

ENVIAR.addEventListener('click', (event) => {
  event.preventDefault()
  if(NOMBRE.value.length < 3) {
    alert('Campo: nombre (contiene menos de 3 caracteres) ' + NOMBRE.value)
    NOMBRE.style.borderRadius = '0.5rem'
    NOMBRE.style.border = '2px solid red'
  }
  if(EMAIL.value.indexOf('@') < 4){
    alert('Campo: Correo(debe tener un minimo de 4 caracteres antes de @) ' + EMAIL.value)
    EMAIL.style.borderRadius = '0.5rem'
    EMAIL.style.border = '2px solid red'
  }
  if(EMAIL.value.indexOf('@') < 0){
    alert('Campo: Correo(no se encuentra el arroba... verificar) ' + EMAIL.value)
    EMAIL.style.borderRadius = '0.5rem'
    EMAIL.style.border = '2px solid red'
  }
  if(EMAIL.value.length < 6) {
    alert('Campo: Correo (minimo 6 caracteres) ' + EMAIL.value)
    EMAIL.style.borderRadius = '0.5rem'
    EMAIL.style.border = '2px solid red'
  }
  if(TELEFONO.value.length < 5) {
    alert('Campo: Teléfono (minimo de 5) - ' + TELEFONO.value)
    TELEFONO.style.borderRadius = '0.5rem'
    TELEFONO.style.border = '2px solid red'
  }
  if(TEXTO.value.length < 10) {
    alert('Campo: Texto (minimo 10 caracteres) ' + TEXTO.value)
    TEXTO.style.borderRadius = '0.5rem'
    TEXTO.style.border = '2px solid red'
  }
})

NOMBRE.addEventListener('focus', () => {
  NOMBRE.addEventListener('input', () => {
    if (NOMBRE.value.length < 3) {
      NOMBRE.style.color = 'red'
      NOMBRE.style.borderRadius = '0.5rem'
      NOMBRE.style.border = '2px solid red'
    } else {
      NOMBRE.style.color = 'black'
      NOMBRE.removeAttribute('style')
    }
  })
})

NOMBRE.addEventListener('blur', () => {
  NOMBRE.removeAttribute('style')
})

EMAIL.addEventListener('focus', () => {
  EMAIL.addEventListener('input', () => {
    if (EMAIL.value.indexOf('@') < 0) {
      EMAIL.style.borderRadius = '0.5rem'
      EMAIL.style.border = '2px solid red'
      EMAIL.style.color = 'red'
    } else {
      if (EMAIL.value.indexOf('@') > 4) {
        if(EMAIL.value > 6){
          EMAIL.style.color = 'black'
          EMAIL.removeAttribute('style')
        }
      } else {
        EMAIL.style.borderRadius = '0.5rem'
        EMAIL.style.border = '2px solid red'
      }
    }
  })
})

EMAIL.addEventListener('blur', () => {
  EMAIL.removeAttribute('style')
})

TELEFONO.addEventListener('focus', () => {
  TELEFONO.style.color = 'red'
  TELEFONO.addEventListener('input', () => {
    if (TELEFONO.value.length < 5) {
      TELEFONO.style.borderRadius = '0.5rem'
      TELEFONO.style.border = '2px solid red'
    } else {
      TELEFONO.style.color = 'black'
      TELEFONO.removeAttribute('style')
    }
  })
})

TELEFONO.addEventListener('blur', () => {
  TELEFONO.removeAttribute('style')
})

TEXTO.addEventListener('focus', () => {
  TEXTO.style.color = 'red'
  TEXTO.addEventListener('input', () => {
    if (TEXTO.value.length < 10) {
      TEXTO.style.borderRadius = '0.5rem'
      TEXTO.style.border = '2px solid red'
    } else {
      TEXTO.style.color = 'black'
      TEXTO.removeAttribute('style')
    }
  })
})

TEXTO.addEventListener('blur', () => {
  TEXTO.removeAttribute('style')
})
