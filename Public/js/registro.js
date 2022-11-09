window.addEventListener("load", function () {
  let formulario = document.querySelector(".formulario");
  //console.log(formulario.elements.email.value);

  formulario.addEventListener("submit", function (evento) {
    console.log("entramos en submit");

    //Destructuring
    let { nombre, apellido, email, password, telefono } = formulario.elements;

    let errores = [];

    if (nombre.value == "") {
      errores.push("El campo nombre no puede estar vacio");
    }

    if (apellido.value == "") {
      errores.push("El campo apellido no puede estar vacio");
    }
    //Validar el email - Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    let reEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reEmail.test(email.value)) {
      errores.push("El email es inválido");
    }

    if (password.value.length < 6) {
      errores.push("La contraseña como mínimo debe tener seis caracteres");
    }

    if (telefono.value == "") {
      errores.push("Debe escribir un telefono valido");
    }

    //Aquí enviamos los errores al usuario
    let ulErrores = document.getElementById("errores");
    //  ulErrores.classList.add('alert-danger')
    if (errores.length > 0) {
      evento.preventDefault();
      ulErrores.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += `<li>${errores[i]} </li> `;
      }
    } else {
      evento.submit();
    }
  });
});
