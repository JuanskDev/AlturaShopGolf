window.addEventListener('load',function(){
    //Capturar el formulario 
    console.log('javascript');
    let formulario = document.querySelector('.formulario');
    //console.log(formulario.elements.email.value);
    
    formulario.addEventListener('submit',function(evento){
       
        console.log('entramos en submit');
  
          //Destructuring  
          let { nombre , apellido, email ,  password , telefono  } = formulario.elements;
          
          let errores = [];

          //Validar Nombre
          if(nombre.value == ''){
              errores.push('El campo nombre no puede estar vacio');
          }

          //Validar Apellido
           if(apellido.value == ''){
            errores.push('El campo apellido no puede estar vacio');
           
         }
           //Validar el email - Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
         let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
         if(!reEmail.test(email.value)){
             errores.push('El email es inválido');
         }
        // //Aquí valido el password haciendo uso de Expresiones Regulares
        // //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
         //let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
         //if(!rePassword.test(password.value)){
          if(password.value.length < 6) {
             errores.push('La contraseña como mínimo debe tener seis caracteres');
    
         }
        // //Aquí valido a que la confirmación del password no llegue vacia
        // if(confirmar-password.value == ""){
        //     errores.push('La confirmación de la contraseña no puede estar vacia');
        //     confirmar-password.classList.add('is-invalid');   

        // }else{
        //     //Ahora valido si las dos contraseñas son iguales
        //     if(password.value != confirmar_password.value && confirmar_password != ""){
        //         errores.push('Las contraseñas deben ser iguales');
        //         confirmar_password.classList.add('is-invalid');   
        //         //errores['last_name'] = 'El campo nombre no puede estar vacio...';
        //     }else{
        //         confirmar_password.classList.add('is-valid');
        //         confirmar_password.classList.remove('is-invalid');
        //     }
        // }
        // //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
          if(telefono.value == ''){
             errores.push('Debe escribir un telefono valido');
        //     telefono.classList.add('is-invalid');   
        //     //errores['last_name'] = 'El campo nombre no puede estar vacio...';
        // }else{
        //     telefono.classList.add('is-valid');
        //     telefono.classList.remove('is-invalid');
         }

          //Aquí enviamos los errores al usuario
          let ulErrores = document.getElementById('errores');
         //  ulErrores.classList.add('alert-danger')
          if(errores.length > 0){
              evento.preventDefault();
              ulErrores.innerHTML = "";
              for (let i = 0 ; i < errores.length; i++){
                ulErrores.innerHTML += `<li>${errores[i]} </li> `
              }
              
          }else{
               evento.submit();
          } 
        }

       
    )

})