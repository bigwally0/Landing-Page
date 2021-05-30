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
let sections = document.querySelectorAll("section");
const nav = document.getElementById("navbar__list");
const upTop = document.querySelector('a.scroll-top');
let SecIndex = 5;
let loremSecNo = 0;

/**
 * End Global Variables
 * Start Helper Functions
 */

buildNav();


//Add New Section and New Menu link for this section
function newSec() {
	SecIndex +=1;
	loremSecNo +=1;
	document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `<section id="section${SecIndex}" data-nav="Lorem ipsum ${loremSecNo}">
        <div class="landing__container">
          <h2>Lorem ipsum ${loremSecNo}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
            dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex.
            Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum,
            nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus
            imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt
            felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero
            ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

          <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
            luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
            porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
    </section>`);

	sections = document.querySelectorAll("section");
	nav.innerHTML = "";
    buildNav();
}

/**
 * End Main Functions
 * Begin Events
 * 
 */


// build the nav
function buildNav() {
let fragment = document.createDocumentFragment();
    sections.forEach((sec, index) => {
       	let navLink = sec.getAttribute("data-nav");
    	let textNode = document.createTextNode(navLink);
    	let cLink = document.createElement("a");
    	let elLi = document.createElement("li");
    	// Build menu
    	cLink.setAttribute('class', 'menu__link');
    	cLink.appendChild(textNode);
    	linkClick(cLink, sec);
    	elLi.appendChild(cLink);
    	fragment.appendChild(elLi);
    });
    nav.appendChild(fragment);
}

// Scroll to section on link click
function linkClick(cLink, sec) {
    cLink.addEventListener("click", () => {
        sec.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", () => {
    let links = document.querySelectorAll("a");
    sections.forEach((sec, index) => {
        // Set sections as inactive
        sec.classList.remove("active");
        const secBound = sec.getBoundingClientRect();
        // Add class 'active' to section when near top of viewport       
        if (secBound.top > -25 && secBound.top < 200) {
            const secLnk = sec.getAttribute("data-nav");
            links.forEach((actLink) => {
                actLink.classList.remove("menu__link--active");
                if (actLink.innerText === secLnk) {
                    // Set sections as active
                    sec.classList.add("active");
                    actLink.classList.add("menu__link--active");
                }
            });
        }
    });
    if (window.pageYOffset <= 0.6 * window.innerHeight) {
        upTop.classList.add("hide");
    } else {
        upTop.classList.remove("hide");
    }
});


upTop.addEventListener('click', () => {
    /*
    Set all Sections and Menu_Links as inactive when clicking this top button
    to return to the none-selected state as when the page first loaded
    */
    sections.forEach((sec, index) => {
        sec.classList.remove("active");
    });
    let links = document.querySelectorAll("a");
    links.forEach((actLink) => {
        actLink.classList.remove("menu__link--active");
    });
    window.scrollTo({
        top
    })
});