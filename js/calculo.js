const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonPrueba = document.querySelectorAll('.prueba');

const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton =>{      
    boton.addEventListener('click',()=>{            
        display.agregarNumero(boton.innerHTML);    
    });
});
botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',()=>{
        display.computar(boton.value);
    })
})
// botonPrueba.forEach(btn=>{
//     btn.addEventListener('click',metodo()=>{
//         alert("Hola Mundillo loco");
//     })
// });
