function showMenu() {
  let containerLinks = document.getElementById('container_block_2');
  let containerButton = document.getElementById('container_block_3');
  let hideSearchMenu = document.getElementById('container_block_3__1')
  let body = document.getElementById('body');
  if (containerLinks.style.display == 'flex') {
    containerLinks.style.display = 'none';
    containerButton.style.display = 'none';
    body.classList.remove('noScroll')
    hideSearchMenu.classList.remove('hideSearchMenu')
  } else {
    containerLinks.style.display = 'flex';
    containerButton.style.display = 'flex';
    body.classList.add('noScroll');
    hideSearchMenu.classList.add('hideSearchMenu')
  }
}


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

