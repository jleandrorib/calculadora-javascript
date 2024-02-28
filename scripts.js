const display = document.getElementById("resultado")

function inserirDisplay(valor){
    display.value += valor
}

function limparDisplay(){
    display.value = ""
}

function calcular(){
    display.value = eval(display.value)
}