'use strict'

// change backgroud color header
$(document).on('scroll', function () {
  if ($(window).scrollTop() > 134) {
    $('#header').addClass('background-white');
  } else {
    $('#header').removeClass('background-white');
  }
})

// open switcher
// const btnOpen = document.querySelector('.switcher-icon');
// const btnClose = document.querySelector('#switcher');

// const openSwitcher = function () {
//   document.querySelector('.switcher-icon').style.left = '250px';
//   document.querySelector('.switcher').style.left = '0';
// }

// const closeSwitcher = function () {
//   document.querySelector('.switcher-icon').style.left = '0';
//   document.querySelector('.switcher').style.left = '-250px';
// }

// btnOpen.addEventListener('click', openSwitcher);
// // btnClose.addEventListener('click', closeSwitcher);

// pricing choose option
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const pricingBasic = document.querySelector('.basic');
const pricingStand = document.querySelector('.standart');
const pricingPre = document.querySelector('.premium');

function changeYearChoose() {
  monthly.classList.remove('pricing__active');
  yearly.classList.add('pricing__active');
  pricingBasic.textContent = '$449';
  pricingStand.textContent = '$1099';
  pricingPre.textContent = '$1249';
}

function changeMonthChoose() {
  monthly.classList.add('pricing__active');
  yearly.classList.remove('pricing__active');
  pricingBasic.textContent = '$49';
  pricingStand.textContent = '$99';
  pricingPre.textContent = '$149';
}

yearly.addEventListener('click', changeYearChoose);
monthly.addEventListener('click', changeMonthChoose);