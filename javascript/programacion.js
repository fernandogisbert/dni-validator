"use strict";


var boton = document.getElementById('button');

const dniLeters = ["t", "r", "w", "a", "g","m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h","l", "c", "k", "e"];



function checkDni() {

    // añadiendo el .value cojo el valor del input que es una propiedad de los inputs
    const dni = document.getElementById('input').value;

    // Comprobar si la letra del DNI es correcta
    
    let respuesta = '';
    let opcionCorrecta = document.getElementById('answer');

    const posicionLetra = dni.slice(0,8) % 23;
    
    const letraDni = dniLeters[posicionLetra];

    if(letraDni === dni[8].toLowerCase()) {

        respuesta = 'Este dni es correcto';
        opcionCorrecta.classList.add('blue');

    }else{

        respuesta = "Este dni no existe";
        opcionCorrecta.classList.remove('blue');
        opcionCorrecta.classList.add('red');
    }

    let elementoRespuesta = document.getElementById('elementoEmergente');

    let contentToInsert = `
    <div class="container titles__title">
        <h3>${respuesta}</h3>
    </div>
    `;

    elementoRespuesta.innerHTML = contentToInsert;


}



boton.addEventListener('click', checkDni);



    








