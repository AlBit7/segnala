const output = document.getElementById("output");
const input = document.getElementById("input");

var iteratore = 0;
var parole = [];

function go() {

    console.log(parole);
    parole = document.getElementById("messaggio").value.toUpperCase().split(" ");

    output.innerText = parole[iteratore];
    input.innerHTML = "";
    output.style.visibility = "visible";

}

function reset() {
    
    input.innerHTML = `<input type="text" placeholder="messaggio" id="messaggio"><input type="button" onclick="go();" value="Segnala">`;
    output.style.visibility = "hidden";
    iteratore = 0;

}

function next(numeroParola) {

    if (numeroParola >= parole.length) {
        reset();
        return;
    }

    let mes = parole[numeroParola];
    let tmp = "";

    if (mes.length > 5) {
        tmp = " schiaccia";
    }

    output.class += tmp;
    output.innerText = mes;

}
