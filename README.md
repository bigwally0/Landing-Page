# Landing Page Project

## Table of Contents

- [Performance](#Shortened)
- [Implementation](#Determined)

## Shortened
###I tried to be Shortened and `go all the ways` to do that:

* This function lets you navigate from list menu item to its related sectoin.
```
function linkClick(cLink, sec) {
    cLink.addEventListener("click", () => {
        sec.scrollIntoView({
            behavior: "smooth"
        });
    });
}
```

* Insert New Section and set its link with one function that only call another one.

```
function newSec()  // call buildNav 
```

## Determined

Use styling to keep the `separation of concerns` by using only **classList** methods to change _CSS_ rules.

```
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
```

* Using **Top** button visibility that only can be visible after you navigate down the screen, clicking it returns you instantly to the top area of the screen and remove any _styling_ applied when you navigate to a specific section.

```
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
```


