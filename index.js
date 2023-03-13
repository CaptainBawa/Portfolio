// Hamburger Starts Here.

/* Selecting the elements from the DOM. */
const openHam = document.querySelector('.logo');
const hamDiv = document.querySelector('.ham-div');
const closeHam = document.querySelector('.ham-close');
const hamItems = document.querySelectorAll('.ham-items');

/*
  The function `open_hamburger()` sets the `style` attribute of the `ham_div` variable to `display:
  block`.
 */
function openHamburger() {
  hamDiv.setAttribute('style', 'display: block');
}

/*
  The function close_hamburger() sets the display attribute of the ham_div to none
 */
function closeHamburger() {
  hamDiv.setAttribute('style', 'display: none');
}

/* Adding an event listener to the open_ham and close_ham elements. */

openHam.addEventListener('click', openHamburger);
closeHam.addEventListener('click', closeHamburger);

/* Adding an event listener to each of the ham_items. */
hamItems.forEach((item) => {
  item.addEventListener('click', closeHamburger);
});
// Hamburger Ends Here.