/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
 const sections = document.querySelectorAll("section");
 const nav = document.getElementById("navbar__list");
 const fragment = document.createDocumentFragment();
const scrollTopAnchor = document.querySelector('a.scroll-top');

/**
 * End Global Variables
 * Start Helper Functions
*/

buildNav();

/**
 * End Helper Functions
 * Begin Main Functions
*/

// build the nav
function buildNav() {
  sections.forEach( (sec, index)=> {
    let navLink = sec.getAttribute("data-nav");
    let textNode = document.createTextNode(navLink);
    let aLink = document.createElement("a");
    let elLi = document.createElement("li");
 // Build menu
    aLink.setAttribute('class', 'menu__link');
    aLink.appendChild(textNode);
    linkClick(aLink, sec);
    elLi.appendChild(aLink);
    fragment.appendChild(elLi);
});
}

nav.appendChild(fragment);


// Scroll to section on link click
function linkClick(alink, sec) {
    alink.addEventListener("click", ()=> {
      sec.scrollIntoView({behavior: "smooth"});
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/


document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 0 && window.pageYOffset < 250) {
    scrollTopAnchor.style.opacity = '0';
        scrollTopAnchor.style.visibility = 'hidden';
    } else {
        scrollTopAnchor.style.visibility = 'visible';
        scrollTopAnchor.style.opacity = '1';
    }
});


// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", ()=> {
    sections.forEach((sec, index)=>  {
      // Set sections as inactive
      sec.classList.remove("active");
      const secBound = sec.getBoundingClientRect();
      // Add class 'active' to section when near top of viewport       
        if (secBound.top > -30 && secBound.top < 250) {
        const secLnk = sec.getAttribute("data-nav");
            links = document.querySelectorAll("a");

            links.forEach( (actLink)=> {
                actLink.classList.remove("menu__link--active");
                if (actLink.innerText === secLnk) {
                    // Set sections as active
                    sec.classList.add("active");
                    actLink.classList.add("menu__link--active");
                }
            });
    } 
    });
});


scrollTopAnchor.addEventListener('click', () => window.scroll ({
    top,
    behavior: 'smooth'
}));
