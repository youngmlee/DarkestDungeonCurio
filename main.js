/* eslint-disable no-unused-vars */

$(document).ready(function() {
  console.log('Ready!')
})

$('.curios img').hover(function() {
    $(this).data('original', this.src)
    this.src = $(this).attr('data-id-prov')
    var msg = $(this).attr('data-message')
    var $ruinsMsg = document.querySelector('.ruins-msg')
    $ruinsMsg.textContent = msg
    var $warrensMsg = document.querySelector('.warrens-msg')
    $warrensMsg.textContent = msg
    var $wealdMsg = document.querySelector('.weald-msg')
    $wealdMsg.textContent = msg
    var $coveMsg = document.querySelector('.cove-msg')
    $coveMsg.textContent = msg
    var $courtyardMsg = document.querySelector('.courtyard-msg')
    $courtyardMsg.textContent = msg
  },
  function() {
    this.src = $(this).data('original')
})

/*
var curios = [
  {
    id: '1',
    src: 'images/curios/all/crate.png',
    prov-src: 'images/provisions/no-action.png',
    message: 'Heirloom(75%) Nothing(25%)'
  },
  {
    id: '2',
    src: 'images/curios/all/discarded-pack.png',
    prov-src: 'images/provisions/no-action.png',
    message: 'Supplies x1 + Gold/Gems x2 + Journal Entry(60%) Scouting(20%) Nothing(20%)'
  }
]

function findObjById (id, array) {
  for (var i = 0; i < array.length; i++) {
    var obj1 = array[i]
    if (id === obj1.id) {
      return obj1
    }
  }
}

<!-- <img data-id='1' src='images/curios/all/crate.png'/> -->

$('.curios img').hover(function() {
    var id1 = $(this).attr('data-id')
    findObjById(id1, curios)
    $(this).data('original', this.src)
    this.src = obj1.prov-src
  },
  function() {
    this.src = $(this).data('original')
})

*/

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

var provisionsList = [
  {
    name: 'antivenom',
    id: '1',
    src: 'images/provisions/antivenom.png'
  },
  {
    name: 'bandage',
    id: '2',
    src: 'images/provisions/bandage.png'
  },
  {
    name: 'holy-water',
    id: '3',
    src: 'images/provisions/holy-water.png'
  },
  {
    name: 'medicinal-herbs',
    id: '4',
    src: 'images/provisions/medicinal-herbs.png'
  },
  {
    name: 'no-action',
    id: '5',
    src: 'images/provisions/no-action.png'
  },
  {
    name: 'shovel',
    id: '6',
    src: 'images/provisions/shovel.png'
  },
  {
    name: 'skeleton-key',
    id: '7',
    src: 'images/provisions/skeleton-key.png'
  },
  {
    name: 'the-blood',
    id: '8',
    src: 'images/provisions/the-blood.png'
  },
  {
    name: 'torch',
    id: '9',
    src: 'images/provisions/torch.png'
  },
  {
    name: 'shovel-key',
    id: '10',
    src: 'images/provisions/shovel-key.png'
  },
  {
    name: 'antivenom-key',
    id: '11',
    src: 'images/provisions/antivenom-key.png'
  },
  {
    name: 'antivenom-shovel',
    id: '12',
    src: 'images/provisions/antivenom-shovel.png'
  }
]

var curiosList = [
  {
    name: 'crate',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/all/crate.png'
  },
  {
    name: 'discarded-pack',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/all/discarded-pack.png'
  },
  {
    name: 'eldritch-altar',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/all/eldritch-altar.png'
  },
  {
    name: 'heirloom-chest',
    prov: 'skeleton-key',
    id: '7',
    src: 'images/curios/all/heirloom-chest.png'
  },
  {
    name: 'locked-strongbox',
    prov: 'skeleton-key',
    id: '7',
    src: 'images/curios/all/locked-strongbox.png'
  },
  {
    name: 'sack',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/all/sack.png'
  },
  {
    name: 'sconce',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/all/sconce.png'
  },
  {
    name: 'shamblers-altar',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/all/shamblers-altar.png'
  },
  {
    name: 'stack-of-books',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/all/stack-of-books.png'
  },
  {
    name: 'alchemy-table',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/ruins/alchemy-table.png'
  },
  {
    name: 'altar-of-light',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/ruins/altar-of-light.png'
  },
  {
    name: 'bookshelf',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/ruins/bookshelf.png'
  },
  {
    name: 'confession-booth',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/ruins/confession-booth.png'
  },
  {
    name: 'decorative-urn',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/ruins/decorative-urn.png'
  },
  {
    name: 'holy-fountain',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/ruins/holy-fountain.png'
  },
  {
    name: 'iron-maiden',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/ruins/iron-maiden.png'
  },
  {
    name: 'locked-display-cabinet',
    prov: 'shovel-key',
    id: '10',
    src: 'images/curios/ruins/locked-display-cabinet.png'
  },
  {
    name: 'locked-sarcophagus',
    prov: 'shovel-key',
    id: '10',
    src: 'images/curios/ruins/locked-sarcophagus.png'
  },
  {
    name: 'sarcophagus',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/ruins/sarcophagus.png'
  },
  {
    name: 'suit-of-armor',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/ruins/suit-of-armor.png'
  },
  {
    name: 'bone-altar',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/warrens/bone-altar.png'
  },
  {
    name: 'dinner-cart',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/warrens/dinner-cart.png'
  },
  {
    name: 'makeshift-dining-table',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/warrens/makeshift-dining-table.png'
  },
  {
    name: 'moonshine-barrel',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/warrens/moonshine-barrel.png'
  },
  {
    name: 'occult-scrawlings',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/warrens/occult-scrawlings.png'
  },
  {
    name: 'pile-of-bones',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/warrens/pile-of-bones.png'
  },
  {
    name: 'pile-of-scrolls',
    prov: 'torch',
    id: '9',
    src: 'images/curios/warrens/pile-of-scrolls.png'
  },
  {
    name: 'rack-of-blades',
    prov: 'bandage',
    id: '2',
    src: 'images/curios/warrens/rack-of-blades.png'
  },
  {
    name: 'sacrificial-stone',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/warrens/sacrificial-stone.png'
  },
  {
    name: 'ancient-coffin',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/weald/ancient-coffin.png'
  },
  {
    name: 'beast-carcass',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/weald/beast-carcass.png'
  },
  {
    name: 'eerie-spiderweb',
    prov: 'bandage',
    id: '2',
    src: 'images/curios/weald/eerie-spiderweb.png'
  },
  {
    name: 'left-luggage',
    prov: 'antivenom-key',
    id: '11',
    src: 'images/curios/weald/left-luggage.png'
  },
  {
    name: 'mummified-remains',
    prov: 'bandage',
    id: '2',
    src: 'images/curios/weald/mummified-remains.png'
  },
  {
    name: 'old-tree',
    prov: 'antivenom',
    id: '1',
    src: 'images/curios/weald/old-tree.png'
  },
  {
    name: 'pristine-fountain',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/weald/pristine-fountain.png'
  },
  {
    name: 'shallow-grave',
    prov: 'shovel',
    id: '6',
    src: 'images/curios/weald/shallow-grave.png'
  },
  {
    name: 'travellers-tent',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/weald/travellers-tent.png'
  },
  {
    name: 'troubling-effigy',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/weald/troubling-effigy.png'
  },
  {
    name: 'barnacle-crusted-chest',
    prov: 'shovel',
    id: '6',
    src: 'images/curios/cove/barnacle-crusted-chest.png'
  },
  {
    name: 'bas-relief',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/cove/bas-relief.png'
  },
  {
    name: 'brackish-tidepool',
    prov: 'antivenom',
    id: '1',
    src: 'images/curios/cove/brackish-tidepool.png'
  },
  {
    name: 'eerie-coral',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/cove/eerie-coral.png'
  },
  {
    name: 'fish-idol',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/cove/fish-idol.png'
  },
  {
    name: 'giant-fish-carcass',
    prov: 'medicinal-herbs',
    id: '4',
    src: 'images/curios/cove/giant-fish-carcass.png'
  },
  {
    name: 'giant-oyster',
    prov: 'shovel',
    id: '6',
    src: 'images/curios/cove/giant-oyster.png'
  },
  {
    name: 'ships-figurehead',
    prov: 'no-action',
    id: '5',
    src: 'images/curios/cove/ships-figurehead.png'
  },
  {
    name: 'bloodflowers',
    prov: 'shovel',
    id: '6',
    src: 'images/curios/courtyard/bloodflowers.png'
  },
  {
    name: 'damned-fountain',
    prov: 'holy-water',
    id: '3',
    src: 'images/curios/courtyard/damned-fountain.png'
  },
  {
    name: 'disturbing-diversion',
    prov: 'shovel',
    id: '6',
    src: 'images/curios/courtyard/disturbing-diversion.png'
  },
  {
    name: 'forgotten-delicacies',
    prov: 'medicinal-herbs',
    id: '3',
    src: 'images/curios/courtyard/forgotten-delicacies.png'
  },
  {
    name: 'hooded-shrew',
    prov: 'the-blood',
    id: '8',
    src: 'images/curios/courtyard/hooded-shrew.png'
  },
  {
    name: 'pile-of-strange-bones',
    prov: 'bandage',
    id: '2',
    src: 'images/curios/courtyard/pile-of-strange-bones.png'
  },
  {
    name: 'throbbing-coccoons',
    prov: 'torch',
    id: '9',
    src: 'images/curios/courtyard/throbbing-coccoons.png'
  },
  {
    name: 'thronging-hive',
    prov: 'torch',
    id: '9',
    src: 'images/curios/courtyard/thronging-hive.png'
  },
  {
    name: 'wine-crate',
    prov: 'antivenom-shovel',
    id: '12',
    src: 'images/curios/courtyard/wine-crate.png'
  }
]
