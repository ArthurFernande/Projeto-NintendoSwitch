/*tenho que pensar em um comportamento de clicar e aparecer uma classe*/

/*referencia da imagem  responsavel pelo meu menu*/ 
const $menu = document.querySelector('.lista')
const $btMenuOpen = document.querySelector('.btmenu_open')
const $btMenuClose = document.querySelector('.btmenu_close')

/* tem que passar uma funçao pois ela so vai ser executada no momento do clique btMenu*/ 
/* quando eu clciar no btMenu quero adicionar uma classe no btMenu*/ 

/*para click  e aparecer o menu*/ 
$btMenuOpen.addEventListener('click', function(){

    $menu.classList.add('lista_open')

})

/*para desclick  e desaparecer o menu*/ 
$btMenuClose.addEventListener('click', function(){

    $menu.classList.remove('lista_open')

})

//parte do balao do banner <----------
var balls = document.querySelector('.balls')
var quant =  document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')
var rolar = true

for(let i = 0 ; i < quant.length; i++ ){
    var div = document.createElement("div")
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')
var pos = document .querySelectorAll('.balls div')

for(let i =0; i < pos.length; i++ ){
    pos[i].addEventListener('click', ()=>{
        atual =pos[i].id
        rolar = false
        slide()
    })
}
voltar.addEventListener('click', ()=>{
    atual--
    rolar = false
    slide()
})
next.addEventListener('click', ()=>{
    atual++
    rolar = false
    slide()
})
function slide(){
    
    if(atual >= quant.length){
        atual = 0;
    }
    else if(atual < 0 ) {
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -100*atual + 'vw'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else {
        rolar = true
    }
},9000)