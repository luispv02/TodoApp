let input = document.querySelector('#text');
let resultados = document.querySelector('#results')
let all = document.querySelector('#all');
let active = document.querySelector('#active');
let completed = document.querySelector('#completed');
let modo = document.querySelector('.night');
let limpiarCompletas = document.querySelector('.limpiarCompletas');


all.addEventListener('click',todas);
active.addEventListener('click', activas);
completed.addEventListener('click', completas);
input.addEventListener('keypress', datosInput);
modo.addEventListener('click', cambiarModo)
limpiarCompletas.addEventListener('click', clearCompleted)

function datosInput(e){
    teclaEnter = event.keyCode;

    if(teclaEnter == 13){
        let table = document.createElement('tr');
        
        table.classList.add('lista');
        table.classList.add('noComplete')

        table.innerHTML = `
            <td><input type="checkbox" class="checkbox" id="checkboxDos" onChange="completo(this)"></td>
            <td class="value">${input.value}</td>
            <td><span onClick="borrar(this)" class="borrar"><img src="images/icon-cross.svg"></span></td>
        `
        resultados.appendChild(table);

        input.value = '';
        let tabla = document.querySelector('table')


        cantidadSpan();

    }
}

function cantidadSpan(){
    let span = document.querySelector('.cantidad');
    let lista = document.querySelectorAll('.lista');

    span.textContent = lista.length;

}

function completo(e){
    e.parentElement.parentNode.classList.toggle('complete');
    e.parentElement.parentNode.classList.toggle('noComplete')

  
    let tareasCompletasValue = document.querySelectorAll('.complete .value');
    let tareasNoCompletasValue = document.querySelectorAll('.noComplete .value');
    let tareasCompletas = document.querySelectorAll('.complete');

    tareasCompletas.forEach(el => {
        el.style.borderRadius = '0px'
    })
    

    if(tareasCompletasValue){
        tareasCompletas.forEach(elem => {
            elem.style.color = '#9293A4'
    
        });
        tareasCompletasValue.forEach(elem => {
            elem.style.color = '#9293A4'
        });
    }if(tareasNoCompletasValue){
        tareasNoCompletasValue.forEach(elem => {
            elem.style.color = '#393a4c'
        });
    }


}

function todas(){
    let tareasCompletas = document.querySelectorAll('.complete');
    let tareasNoCompletas = document.querySelectorAll('.noComplete');
    let lista = document.querySelectorAll('.lista')

    tareasCompletas.forEach(elem => {
        elem.style.display = 'block'
        elem.classList.add('lista')
    });

    tareasNoCompletas.forEach(elem => {
        elem.style.display = 'block';
        elem.classList.add('lista')
    })
    
    let span = document.querySelector('.cantidad');
    span.textContent = lista.length;
    
}

function activas(){
    let tareasCompletas = document.querySelectorAll('.complete');
    let tareasNoCompletas = document.querySelectorAll('.noComplete');

    tareasCompletas.forEach(elem => {
        elem.style.display = 'none'
    });

    tareasNoCompletas.forEach(elem => {
        elem.style.display = 'block'
    });

    let span = document.querySelector('.cantidad');
    span.textContent = tareasNoCompletas.length;
}

function completas(){
    let tareasCompletas = document.querySelectorAll('.complete');
    let tareasNoCompletas = document.querySelectorAll('.noComplete');

    tareasCompletas.forEach(elem => {
        elem.style.display = 'block'
    });

    tareasNoCompletas.forEach(elem => {
        elem.style.display = 'none'
    });

    let span = document.querySelector('.cantidad');

    span.textContent = tareasCompletas.length;

}


function borrar(e){
    e.parentElement.parentElement.remove();

    cantidadSpan();
}

function cambiarModo(){
    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    let options = document.querySelector('.options');
    let optionsLinks = document.querySelectorAll('.options a')
    let input = document.querySelector('input[type=text]')
    let table = document.querySelector('table')
    let luna = document.querySelector('.luna');
    let sol = document.querySelector('.sol');
    let resultadoFinal = document.querySelector('.resultados-final');
    let cantidad = document.querySelector('.color')
    let completas = document.querySelector('.resultados-final span a')
;   let amount = document.querySelector('.cantidad');
    let all = document.querySelector('.options #all');
    let active = document.querySelector('.options #active');
    let completed = document.querySelector('.options #completed');

    options.classList.toggle('focus-dark')

    if(luna.classList.contains('luna')){
        luna.classList.toggle('mostrar-luz')
        sol.classList.toggle('mostrar-dark')
    }

    body.classList.toggle('dark')

    container.classList.toggle('container-dark')

    options.classList.toggle('principal-dark')

    optionsLinks.forEach(a => {
        a.style.color = "hsl(233, 14%, 35%)"
    })

    input.classList.toggle('principal-dark')

    table.classList.toggle('principal-dark')

    resultadoFinal.classList.toggle('final-dark')

    cantidad.classList.toggle('span-dark')

    completas.classList.toggle('span-dark')

    amount.classList.toggle('span-dark')

}

function clearCompleted(){
    let tareasCompletas = document.querySelectorAll('.complete');
    let tareasNoCompletas = document.querySelectorAll('.noComplete');

    tareasCompletas.forEach(el => {
        el.remove();
    })

    let span = document.querySelector('.cantidad');

    span.textContent = tareasNoCompletas.length;
    
}