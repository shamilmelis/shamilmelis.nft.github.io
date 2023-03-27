// function showMenu() {
//   // let containerLinks = document.getElementById('container_block_2');
//   // let containerButton = document.getElementById('container_block_3');
//   // let hideSearchMenu = document.getElementById('container_block_3__1')
//   // let body = document.getElementById('body');
//   // if (containerLinks.style.display == 'flex') {
//   //   containerLinks.style.display = 'none';
//   //   containerButton.style.display = 'none';
//   //   body.classList.remove('noScroll')
//   //   hideSearchMenu.classList.remove('hideSearchMenu')
//   // } else {
//   //   containerLinks.style.display = 'flex';
//   //   containerButton.style.display = 'flex';
//   //   body.classList.add('noScroll');
//   //   hideSearchMenu.classList.add('hideSearchMenu')
//   // }
// }

let mobileBurger = document.getElementById('bars');
mobileBurger.addEventListener("click", function() {
  let mobile_menu = document.getElementById('container-mobilemenu');
  mobile_menu.classList.toggle("container-mobilemenuResponsive")
})



let play_button = document.getElementById('play_button');
play_button.addEventListener('click', function() {

})



let bars = document.querySelectorAll('.bar');
let navToggle = document.querySelector('.nav-toggle');

function toggleHamburger(e) {
    bars.forEach(bar => bar.classList.toggle('x'))
  }
  
  navToggle.addEventListener('click', toggleHamburger)




const oneDayButton = document.getElementById('oneDay_button');
oneDayButton.addEventListener('click', function() {
    oneDayButton.classList.toggle('oneDay_buttonActive')
    let container = document.getElementById('container-7_blocks_1');
    let containerSecond = document.getElementById('container-7_blocks_2')
    if (container.style.display == 'none') {
      container.style.display = 'flex'
      containerSecond.style.display = 'flex'
    } else {
      container.style.display = 'none';
      containerSecond.style.display = 'none'
    }
})

const sevenDayButton = document.getElementById('sevenDay_button');
sevenDayButton.addEventListener('click', function() {
    sevenDayButton.classList.toggle('sevenDay_buttonActive')
    let container = document.getElementById('container-7_blocks_2');
    let containerSecond = document.getElementById('container-7_blocks_3')
    if (container.style.display == 'none') {
      container.style.display = 'flex'
      containerSecond.style.display = 'flex'
    } else {
      container.style.display = 'none';
      containerSecond.style.display = 'none'
    }
})

const monthDayButton = document.getElementById('monthDay_button');
monthDayButton.addEventListener('click', function() {
    monthDayButton.classList.toggle('monthDay_buttonActive')
    let container = document.getElementById('container-7_blocks_1');
    let containerSecond = document.getElementById('container-7_blocks_3')
    if (container.style.display == 'none') {
      container.style.display = 'flex'
      containerSecond.style.display = 'flex'
    } else {
      container.style.display = 'none';
      containerSecond.style.display = 'none'
    }
})



const closePopUp = document.getElementById('close__popupContainer__button');
closePopUp.addEventListener('click', function() {
  const container = document.getElementById('container-popup-one');
  container.style.display = 'none'
  let body = document.getElementById('body');
  body.classList.remove('bodyresponsive')
})


const openPopUp = document.getElementById('play_button');
openPopUp.addEventListener('click', function() {
  const container = document.getElementById('container-popup-one');
  if (container.style.display == "flex") {
    container.style.display = "none";
  } else {
    container.style.display = "flex";
  }
  let body = document.getElementById('body');
  body.classList.add('bodyresponsive')
})


const openRegPopUp = document.querySelectorAll('.cards__button');
for (let elem of openRegPopUp) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}

const openRegPopUpSecondButtons = document.querySelectorAll('.cardButton');
for (let elem of openRegPopUpSecondButtons) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}

const openRegPopUpThirdButtons = document.querySelectorAll('.placeBid__button');
for (let elem of openRegPopUpThirdButtons) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}

const openRegPopUpFourthButtons = document.querySelectorAll('.connect_wallet__button');
for (let elem of openRegPopUpFourthButtons) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}


const openRegPopUpFifthButtons = document.querySelectorAll('.subs__button');
for (let elem of openRegPopUpFifthButtons) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}

const openRegPopUpSixthButtons = document.querySelectorAll('.getintouch_button');
for (let elem of openRegPopUpSixthButtons) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}


const openRegPopUpSeventhButtons = document.querySelectorAll('.create_button');
for (let elem of openRegPopUpSeventhButtons) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}

const openRegPopUpEightsButtons = document.querySelectorAll('.explore_button');
for (let elem of openRegPopUpEightsButtons) { 
  elem.addEventListener('click', function() {
    const container = document.getElementById('container-popup-two');
    if (container.style.display == "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
    let body = document.getElementById('body');
    body.classList.add('bodyresponsive')
  })
}




const closeRegPopUp = document.getElementById('close__popupRegisterContainer_button');
closeRegPopUp.addEventListener('click', function() {
  const container = document.getElementById('container-popup-two');
  const containerTransform = document.getElementById('container-popup-two__blocks');
  let body = document.getElementById('body');
  body.classList.remove('bodyresponsive');
  container.style.display = "none"
})

let URL = document.location.href;

