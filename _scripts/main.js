var inputTexto = document.querySelector("#texto");
var inputResultado = document.querySelector("#resultado");
var botaoCriptografar = document.querySelector("#botao1");
var botaoDesincriptografar = document.querySelector("#botao2");
var botaoCopiar = document.querySelector("#copy");

function criptografar() {

    if (inputTexto.value != ""){
        var texto = inputTexto.value.toLowerCase();
        var resultado = texto.replaceAll("e", "enter");  
        var resultado2 = resultado.replaceAll("i", "imes");
        var resultado3 = resultado2.replaceAll("a", "ai");
        var resultado4 = resultado3.replaceAll("u", "ufat");
        var resultado5 = resultado4.replaceAll("o", "ober");

        inputResultado.value = resultado5;

        document.getElementById("nenhumamensagem").style.display = "none";
        document.getElementById("img").style.display = "none";
        document.getElementById("copy").style.display = "block"; 
    }else{
        alert("Digite um texto");
    }
}

function desicriptografar() {

    if (inputTexto.value != ""){
        var texto = inputTexto.value.toLowerCase();
        var resultado = texto.replaceAll("enter", "e"); 
        var resultado2 = resultado.replaceAll("imes", "i");
        var resultado3 = resultado2.replaceAll("ai", "a");
        var resultado4 = resultado3.replaceAll("ufat", "u"); 
        var resultado5 = resultado4.replaceAll("ober", "o");

        inputResultado.value = resultado5;

        document.getElementById("nenhumamensagem").style.display = "none";
        document.getElementById("img").style.display = "none";
        document.getElementById("copy").style.display = "block"; 
    }else{
        alert("Digite um texto");
    }
}


function copiarTexto() {
    var textoCopiado = document.getElementById("resultado");
    textoCopiado.select();
    document.execCommand("copy");
}

botaoCriptografar.onclick = criptografar;
botaoDesincriptografar.onclick = desicriptografar;
botaoCopiar.onclick = copiarTexto; 