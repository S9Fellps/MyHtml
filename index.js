var setadireita = window.document.getElementById("setadireita")
var gif1 = window.document.getElementById("gif1")
var gif3 = window.document.getElementById("gif3")
var gif2 = window.document.getElementById("gif2")
var setaesquerda = window.document.getElementById("setaesquerda")
function DeslizarParaDireita() {
    gif1.style = "display:none;"
    gif3.style = "display:flex;"
    setadireita.style = "display:none;"
    setaesquerda.style = "display:flex; ,margin-top:50px;"
}

function DeslizarParaEsquerda() {
    gif1.style = "display:flex;"
    gif3.style = "display:none;"
    setaesquerda.style = "display:none;"
    setadireita.style = "display:flex; margin-top:50px;"
}