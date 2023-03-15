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

// Popup  And Dynamic Html Starts Here.

/* The `const firstCard = document.querySelector('.card1-container');` is selecting the
`card1-container` class from the DOM. */
const card_container = document.querySelector('.content-container');

/* Creating an object for the first project card */
const firstProject = {
  id: 1,
  title: 'Multi-Post Stories',
  image: 'Img-Placeholder.svg',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  tech1: 'css',
  tech2: 'html',
  tech3: 'bootstrap',
  tech4: 'Ruby',
  button: 'See Project',
};

/*
 The function is called firstProjectFunction and it is called when the page loads.
 The function then replaces the innerHTML of the allProjects div with the
 first project card.
 */
function firstProjectFunction() {
  const card1 = document.createElement('div');
  card1.classList.add('card1-container');
  card1.innerHTML = `<img class="works-img" src="./img/work/${firstProject.image}" alt="Gym-fit exercise with gray and gold color mix and a text color of black">
  <div class="card1-content">
      <h3 class="works-header">${firstProject.title}</h3>
      <p class="works-txt">${firstProject.description}</p>
      <ul class="tech">
              <li><a href="#" class="css">${firstProject.tech1}</a></li>
              <li><a href="#" class="html">${firstProject.tech2}</a></li>
              <li><a href="#" class="boot">${firstProject.tech3}</a></li>
              <li><a href="#" class="ruby">${firstProject.tech4}</a></li>
      </ul>
      <button class="pro1-text hover-effect" onclick='firePopUp()'>${firstProject.button}</button>
  </div>`;
  card_container.appendChild(card1);
}

/* Adding an event listener to the window object. The event listener
is listening for the load event. When the load event is triggered,
the firstProjectFunction is called.
*/
window.addEventListener('load', firstProjectFunction);

/* The `const remainingCards = document.querySelector('.cards-frame');` is selecting the
`cards-frame` class from the DOM. */
// const remainingCards = document.querySelector('.cards-frame');

/* Creating an array of objects for the remaining project cards. */
const remainingProjects = [
  {
    id: 2,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    tech1: 'css',
    tech2: 'html',
    tech3: 'Ruby',
    button: 'See Project',
  },
  {
    id: 3,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    tech1: 'css',
    tech2: 'html',
    tech3: 'Ruby',
    button: 'See Project',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    tech1: 'css',
    tech2: 'html',
    tech3: 'Ruby',
    button: 'See Project',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    tech1: 'css',
    tech2: 'html',
    tech3: 'Ruby',
    button: 'See Project',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    tech1: 'css',
    tech2: 'html',
    tech3: 'Ruby',
    button: 'See Project',
  },
  {
    id: 7,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    tech1: 'css',
    tech2: 'html',
    tech3: 'Ruby',
    button: 'See Project',
  },

];

/*
 The function loops through the remainingProjects array and adds the project's title, description,
 tech1, tech2, tech3, and button to the remainingCards div
 */
function remainingProjectFunc() {
  const remainingcards = document.createElement('div');
  remainingcards.classList.add('cards-frame');
  remainingProjects.forEach((project) => {
    const allcards = document.createElement('div');
    allcards.classList.add('all-cards');
    allcards.innerHTML = `           
       <div class="no-btn">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <ul class="cards-lists">
             <li><a href="#" class="html-btn">${project.tech1}</a></li>
             <li><a href="#" class="boot-btn">${project.tech2}</a></li>
             <li><a href="#" class="ruby-btn">${project.tech3}</a></li>
          </ul>
        </div>
        <button class="some-pro-text hover-effect" onclick='firePopUp()'>${project.button}</button> 
      `;
     remainingcards.appendChild(allcards);
     card_container.appendChild(remainingcards);
  });
}

/* The `window.addEventListener('load', remainingProjectFunc);` is listening for the load event.
 When the load event is triggered, the remainingProjectFunc is called.
*/
window.addEventListener('load', remainingProjectFunc);
// Popup  And Dynamic Html Ends Here.

// Popup Window Starts Here.

/* The `const popUp = document.querySelector('.pop-container');` is selecting the
`pop-container` class from the DOM.
*/
const popUp = document.querySelector('.pop-container');

/* Creating an object for the popup window. */
const popUpWindow = {
  title: 'Keeping track of hundreds  of components website',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  tech1: 'css',
  tech2: 'Bootstrap',
  tech3: 'Ruby on rails',
  button1: 'See Live',
  button2: 'See Source',
};

/*
  The function popUpFunc() is called when the user clicks on the project button. It creates a popup
  window with the project title, tech used, description, and buttons to the live site
  and github repo
 */
function popUpFunc() {
  popUp.innerHTML = `
  <div class="popup-div">
  <div class="pop-content">
      <div class="tittle-close">
          <h2 class="pop-title">${popUpWindow.title}</h2>
          <button class="pop-close-btn" onclick='closePopWindow()'>&times;</button>
      </div>
    <ul class="pop-tech">
      <li class="pop-html"><a href="">${popUpWindow.tech1}</a></li>
      <li class="pop-boot"><a href="">${popUpWindow.tech2}</a></li>
      <li class="pop-ruby"><a href="">${popUpWindow.tech3}</a></li>
    </ul>
     <div class="flex-img_descrip_btns">
        <img class="pop-img" src="./img/popup/popup.svg" alt="project"/>
        <div class="flex-descrip-btn">
          <p class="pop-descrip">${popUpWindow.description}</p>
          <div class="pop-btns">
             <a class="pop-btn" href="https://captainbawa.github.io/Portfolio/" target="_blank">${popUpWindow.button1} <span><img src="./img/popup/pop-icon2.svg" alt=""></span></a>
             <a class="pop-btn" href="https://github.com/CaptainBawa/Portfolio/tree/main" target="_blank">${popUpWindow.button2}<span><img src="./img/popup/pop-icon1.svg" alt=""></span></a>
          </div>
        </div>
     </div>  
  </div>
</div>`;
}
/* The `window.addEventListener('load', popUpFunc);` is listening for the load event.
When the load event is triggered, the popUpFunc is called.
*/
window.addEventListener('load', popUpFunc);

// Displaying And Closing Of PopUp Window Starts Here.

/*
 The function is called when the user clicks on the projects button. The function sets
 the display attribute of the popUp element to block
 */
function firePopUp() {
  popUp.setAttribute('style', 'display: block');
}
// We add this section just to fix eslintrc errors
const container = document.querySelector('pop-content');
container.addEventListener('click', firePopUp);

/*
 The function is called when the user clicks on the close button. The function sets the display
 attribute of the popUp div to none, which hides the popUp div.
 */
function closePopWindow() {
  popUp.setAttribute('style', 'display: none');
}
closePopWindow();
// Displaying And Closing Of PopUp Window Starts Here.

// Popup Window Ends Here.
// Hamburger Ends Here.
