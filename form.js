const formulario = document.getElementById("c-form");

//Creating event
formulario.addEventListener("submit", validateForm);

const phonePattern = /^\+?[1-9]\d{1,14}$/; // Patrón de validación de número de teléfono internacional
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación de email

function validateForm(e) {
  e.preventDefault();
  let namef = document.querySelector("#fullname");
  let nameValue = namef.value;
  let email = document.querySelector("#email");
  let emailValue = email.value;
  let tp = document.getElementById("tel").value;
  let gender = document.querySelector("input[name='gender']:checked").value;
  let country = document.querySelector("#countrySelect").value;
  let comment = document.querySelector("#comment-1").value;

  if (!phonePattern.test(tp)) {
    e.preventDefault(); // Previene el envío del formulario si el campo es inválido
    alert("Ingrese un número de teléfono válido. Ej: +1234567890");
    return;
  }

  if (!emailPattern.test(emailValue)) {
    e.preventDefault(); // Previene el envío del formulario si el campo es inválido
    alert("Ingrese un correo electrónico válido.");
    return;
  }

  alert(
    `Los siguientes datos fueron guardados: ${nameValue} ${email} ${tp} ${gender} ${country} ${comment}`
  );
  if (nameValue && emailValue && tp && gender && country) {
    formulario.reset();
  }
}
