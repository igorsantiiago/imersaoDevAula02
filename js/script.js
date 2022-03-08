function converterMoeda(event) {

    event.preventDefault();

    var valorMoeda = parseFloat(document.getElementById("valor").value);
    var valorOrigem = document.getElementById("origem").value;
    var valorDestino = document.getElementById("destino").value;
    var valorResultado = parseFloat(valorMoeda);

    if(valorOrigem == "real" && valorDestino == "dolar") {
        valorResultado = valorMoeda * 5.06;
    }

    if(valorOrigem == "real" && valorDestino == "euro") {
        valorResultado = valorMoeda * 5.52;
    }

    if(valorOrigem == "real" && valorDestino == "libra") {
        valorResultado = valorMoeda * 6.63;
    }

    if(valorOrigem == "real" && valorDestino == "bitcoin") {
        valorResultado = valorMoeda * 0.0000051;
    }

    if(valorOrigem == "dolar" && valorDestino == "real") {
        valorResultado = valorMoeda * 5.06;
    }

    if(valorOrigem == "dolar" && valorDestino == "euro") {
        valorResultado = valorMoeda * 0.92;
    }

    if(valorOrigem == "dolar" && valorDestino == "libra") {
        valorResultado = valorMoeda * 0.76;
    }

    if(valorOrigem == "dolar" && valorDestino == "bitcoin") {
        valorResultado = valorMoeda * 0.000026;
    }

    if(valorOrigem == "euro" && valorDestino == "real") {
        valorResultado = valorMoeda * 5.52;
    }

    if(valorOrigem == "euro" && valorDestino == "dolar") {
        valorResultado = valorMoeda * 1.09;
    }

    if(valorOrigem == "euro" && valorDestino == "libra") {
        valorResultado = valorMoeda * 0.83;
    }

    if(valorOrigem == "euro" && valorDestino == "bitcoin") {
        valorResultado = valorMoeda * 0.000028;
    }

    if(valorOrigem == "libra" && valorDestino == "real") {
        valorResultado = valorMoeda * 6.64;
    }

    if(valorOrigem == "libra" && valorDestino == "dolar") {
        valorResultado = valorMoeda * 1.31;
    }

    if(valorOrigem == "libra" && valorDestino == "euro") {
        valorResultado = valorMoeda * 1.20;
    }

    if(valorOrigem == "libra" && valorDestino == "bitcoin") {
        valorResultado = valorMoeda * 0.000034;
    }

    if(valorOrigem == "bitcoin" && valorDestino == "real") {
        valorResultado = valorMoeda * 195052.22;
    }

    if(valorOrigem == "bitcoin" && valorDestino == "dolar") {
        valorResultado = valorMoeda * 38518.60;
    }

    if(valorOrigem == "bitcoin" && valorDestino == "euro") {
        valorResultado = valorMoeda * 35345.62;
    }

    if(valorOrigem == "bitcoin" && valorDestino == "libra") {
        valorResultado = valorMoeda * 29433.54;
    }

    document.getElementById("resultado").value = valorResultado;
}

function converterDistancia(event) {
    event.preventDefault();

    var valorDistancia = parseFloat(document.getElementById("distancia").value);
    var valorOrigem = document.getElementById("origem").value;
    var valorDestino = document.getElementById("destino").value;
    var valorResultado = parseFloat(valorDistancia);

    if(valorOrigem == "quilometro" && valorDestino == "anoluz") {
        valorResultado = valorDistancia * 0.0000000000001057;
    }

    if(valorOrigem == "anoluz" && valorDestino == "quilometro") {
        valorResultado = valorDistancia / 0.0000000000001057;  
    }

    document.getElementById("resultado").value = (" ~") + valorResultado;
}

function converterTemperatura(event) {

    event.preventDefault();

    var valorTemperatura = parseFloat(document.getElementById("temperatura").value);
    var valorOrigem = document.getElementById("origem").value;
    var valorDestino = document.getElementById("destino").value;
    var valorResultado = parseFloat(valorTemperatura);

    if(valorOrigem == "fahrenheit" && valorDestino == "celsius") {
        valorResultado = ((valorTemperatura - 32) / 1.8);
    }

    if(valorOrigem == "fahrenheit" && valorDestino == "kelvin") {
        valorResultado = (valorTemperatura - 32) * 5/9 + 273.15;
        
    }

    if(valorOrigem == "celsius" && valorDestino == "fahrenheit") {
        valorResultado = ((valorTemperatura * 1.8) + 32);
    }

    if(valorOrigem == "celsius" && valorDestino == "kelvin") {
        valorResultado = valorTemperatura + 273.15;
    }
    
    if(valorOrigem == "kelvin" && valorDestino == "celsius") {
        valorResultado = valorTemperatura - 273.15;
    }

    if(valorOrigem == "kelvin" && valorDestino == "fahrenheit") {
        valorResultado = (valorTemperatura - 273.15) * 9/5 + 32;
    }


    document.getElementById("resultado").value = valorResultado + ("º ") + valorDestino;

}