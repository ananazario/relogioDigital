const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

function menorQueDez(digito) {
    if(digito < 10) return ('0' + digito)
    else return (digito)
}

const relogio = setInterval(function tempo() {

    let dia = new Date();
    let hora = dia.getHours();
    let minuto = dia.getMinutes();
    let segundo = dia.getSeconds();

    horas.textContent = menorQueDez(hora);
    minutos.textContent = menorQueDez(minuto);
    segundos.textContent = menorQueDez(segundo);
});
