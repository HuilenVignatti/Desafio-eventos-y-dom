
let formDolar = document.getElementById("formDolar");
formDolar.addEventListener("submit", resDolar);

let valorDolar=285

function resDolar (e){
    e.preventDefault();

    let formDolar = e.target


    console.log(formDolar.children[1].value)

    let cantidadCompra = formDolar.children[1].value
    
    mostrarResultado (cantidadCompra, valorDolar)
}

function mostrarResultado(cantidadCompra,valorDolar){
    let div = document.createElement("div")
    totalDolar.innerHTML = `<h2>El total es de ${cantidadCompra * valorDolar}</h2>`;

    document.body.append(div)

}

let formEuro = document.getElementById("formEuro");
formEuro.addEventListener("submit", resEuro);

let valorEuro= 335

function resEuro (e){
    e.preventDefault ();

    let formEuro = e.target

    let cantidadCompraEuro = formEuro.children[1].value
    mostrarResultadoEuro(cantidadCompraEuro, valorEuro)
}

function mostrarResultadoEuro ( cantidadCompraEuro, valorEuro){

    let div = document.createElement("div")
    totalEuro.innerHTML = `<h2>El total es de ${cantidadCompraEuro * valorEuro}</h2>`;

    document.body.append(div)



}


let formReal = document.getElementById("formReal");
formReal.addEventListener("submit", resReal);

let valorReal= 40

function resReal (e){
    e.preventDefault ();

    let formReal = e.target

    let cantidadCompraReal = formReal.children[1].value
    mostrarResultadoReal(cantidadCompraReal, valorReal)
}

function mostrarResultadoReal ( cantidadCompraReal, valorReal){

    let div = document.createElement("div")
    totalReal.innerHTML = `<h2>El total es de ${cantidadCompraReal * valorReal}</h2>`;

    document.body.append(div)



}




