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