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


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

const navbar = document.querySelector("ul")
const sections = document.querySelectorAll("section")

sections.forEach(section => {
    let item = document.createElement("li")
    
    item.classList.add("menu__link")
    section.className ? item.classList.add(section.className) : ""
    item.classList.add(section.id)
    let a = document.createElement("a")
    a.setAttribute('href', `#${section.id.toString()}`)
    a.innerText = section.attributes[1].value
    
    item.appendChild(a)
    
    
    navbar.appendChild(item)
});

const lis = document.querySelectorAll("li")

navbar.addEventListener("click", (event) => {
    event.target.tagName === "A" ?
    event.target.parentElement.classList.contains("your-active-class")
    ? ""
    : lis.forEach(li => {
        li === event.target.parentElement 
        ? li.classList.add("your-active-class")
        : li.classList.remove("your-active-class")
    })
    : ""
})



// Add class 'active' to section when near top of viewport

setInterval(
    () => {
        let section1 = document.getElementById('section1')
        var bounding = section1.getBoundingClientRect()
        
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
            section1.classList.add("your-active-class")
            lis.forEach(li => {
                li.classList.contains("section1") 
                ? li.classList.add("your-active-class")
                : li.classList.remove("your-active-class")
            })
        } else {
            section1.classList.remove("your-active-class")
        }
        let section2 = document.getElementById('section2')
        bounding = section2.getBoundingClientRect()
        
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
            section2.classList.add("your-active-class")
            lis.forEach(li => {
                li.classList.contains("section2") 
                ? li.classList.add("your-active-class")
                : li.classList.remove("your-active-class")
            })
        } else {
            section2.classList.remove("your-active-class")
        }
        let section3 = document.getElementById('section3')
        bounding = section3.getBoundingClientRect()
        
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
            section3.classList.add("your-active-class")
            lis.forEach(li => {
                li.classList.contains("section3") 
                ? li.classList.add("your-active-class")
                : li.classList.remove("your-active-class")
            })
        } else {
            section3.classList.remove("your-active-class")
        }
        let section4 = document.getElementById('section4')
        bounding = section4.getBoundingClientRect()
        
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
            section4.classList.add("your-active-class")
            lis.forEach(li => {
                li.classList.contains("section4") 
                ? li.classList.add("your-active-class")
                : li.classList.remove("your-active-class")
            })
        } else {
            section4.classList.remove("your-active-class")
        }
    },10
)
