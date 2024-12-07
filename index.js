var setadireita = window.document.getElementById("setadireita")
var setadireita1 = window.document.getElementById("setadireita1")
var setadireita2 = window.document.getElementById("setadireita2")
var gif1 = window.document.getElementById("gif1")
var gif2 = window.document.getElementById("gif2")
var gif3 = window.document.getElementById("gif3")
var gif4 = window.document.getElementById("gif4")
var gif5 = window.document.getElementById("gif5")
var setaesquerda = window.document.getElementById("setaesquerda")
var setaesquerda1 = window.document.getElementById("setaesquerda1")
var setaesquerda2 = window.document.getElementById("setaesquerda2")

function DeslizarParaDireita() {
    gif1.style = "display:none;"
    gif3.style = "display:flex;"
    setadireita.style = "display:none;"
    setadireita2.style = "display:none;"
    setaesquerda1.style = "display:none;"
    setaesquerda2.style = "display:none;"
    setaesquerda.style = "display:flex; ,margin-top:50px;"
    setadireita1.style = "display:flex; ,margin-top:50px;"
}
function DeslizarParaDireita1() {
    gif2.style = "display:none;"
    gif4.style = "display:flex;"
    setadireita1.style = "display:none;"
    setadireita.style = "display:none;"
    setaesquerda.style = "display:none;"
    setaesquerda2.style = "display:none;"
    setaesquerda1.style = "display:flex; ,margin-top:50px;"
    setadireita2.style = "display:flex; ,margin-top:50px;"
}
function DeslizarParaDireita2() {
    gif3.style = "display:none;"
    gif5.style = "display:flex;"
    setadireita2.style = "display:none;"
    setadireita1.style = "display:none;"
    setadireita.style = "display:none;"
    setaesquerda.style = "display:none;"
    setaesquerda1.style = "display:none;"
    setaesquerda2.style = "display:flex; ,margin-top:50px;"
}

function DeslizarParaEsquerda() {
    gif1.style = "display:flex;"
    gif3.style = "display:none;"
    setaesquerda.style = "display:none;"
    setaesquerda1.style = "display:none;"
    setaesquerda2.style = "display:none;"
    setadireita2.style = "display:none;"
    setadireita1.style = "display:none;"
    setadireita.style = "display:flex; margin-top:50px;"
}
function DeslizarParaEsquerda1() {
    gif2.style = "display:flex;"
    gif4.style = "display:none;"
    setaesquerda1.style = "display:none;"
    setaesquerda2.style = "display:none;"
    setadireita.style = "display:none;"
    setadireita2.style = "display:none;"
    setadireita1.style = "display:flex; margin-top:50px;"
    setaesquerda.style = "display:flex; margin-top:50px;"
}
function DeslizarParaEsquerda2() {
    gif3.style = "display:flex;"
    gif5.style = "display:none;"
    setaesquerda2.style = "display:none;"
    setaesquerda.style = "display:none;"
    setadireita.style = "display:none;"
    setadireita2.style = "display:none;"
    setadireita1.style = "display:none;"
    setadireita2.style = "display:flex; margin-top:50px;"
    setaesquerda1.style = "display:flex; margin-top:50px;"
}