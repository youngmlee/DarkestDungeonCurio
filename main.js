/* eslint-disable no-unused-vars */

var $clear = document.querySelectorAll('.clear')

for (var i = 0; i < $clear.length; i++) {
  $clear[i].addEventListener('click', function() {
    document.querySelector('.ruinss-image').style.display = 'none'
    document.querySelector('.ruinsm-image').style.display = 'none'
    document.querySelector('.ruinsl-image').style.display = 'none'
    document.querySelector('.warrenss-image').style.display = 'none'
    document.querySelector('.warrensm-image').style.display = 'none'
    document.querySelector('.warrensl-image').style.display = 'none'
    document.querySelector('.wealds-image').style.display = 'none'
    document.querySelector('.wealdm-image').style.display = 'none'
    document.querySelector('.wealdl-image').style.display = 'none'
    document.querySelector('.coves-image').style.display = 'none'
    document.querySelector('.covem-image').style.display = 'none'
    document.querySelector('.covel-image').style.display = 'none'
    document.querySelector('.courtyards-image').style.display = 'none'
    document.querySelector('.courtyardm-image').style.display = 'none'
    document.querySelector('.courtyardl-image').style.display = 'none'
  },)
}
