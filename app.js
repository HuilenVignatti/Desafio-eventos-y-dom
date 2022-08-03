






let cotizacionDolar = document.getElementById("cotizacionDolar");
cotizacionDolar.addEventListener("click", resDolar);

function resDolar (e){
    e.preventDefault();
    console.log("cotizacion dolar")
    let divd = document.getElementById("cotizacionDolar")
    divd.innerHTML = ` <p> La cotizacion del dolar es de $283</p>`
    document.body.append

}

let cotizacionEuro = document.getElementById("cotizacionEuro");
cotizacionEuro.addEventListener("click", resEuro);

function resEuro (e){
    e.preventDefault();
    console.log("cotizacion euro")
    let dive = document.getElementById("cotizacionEuro")
    dive.innerHTML = ` <p> La cotizacion del euro es de $300</p>`
    document.body.append

}

let cotizacionReal = document.getElementById("cotizacionReal");
cotizacionReal.addEventListener("click", resReal);

function resReal (e){
    e.preventDefault();
    console.log("cotizacion real")
    let divr = document.getElementById("cotizacionReal")
    divr.innerHTML = ` <p> La cotizacion del real es de $185</p>`
    document.body.append


}