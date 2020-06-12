
const navbar = document.querySelector("ul")
const sections = document.querySelectorAll("section")

// build the nav
// Navigation is built dynamically as an unordered list.

sections.forEach((section) => {
    let item = document.createElement("li")
    
    item.classList.add("menu__link")
    section.className ? item.classList.add(section.className) : ""
    item.classList.add(section.id)
    let a = document.createElement("a")
    a.innerText = section.attributes[1].value
    item.appendChild(a)
    
    navbar.appendChild(item)
})

const lis = document.querySelectorAll("li")


// When clicking an item from the navigation menu, the link should scroll to the appropriate section.

navbar.addEventListener("click", (event) => {
    event.preventDefault()
    event.target.tagName === "A" ?
    event.target.parentElement.classList.contains("your-active-class")
    ? ""
    : lis.forEach((li,index) => {
        li === event.target.parentElement 
        ? li.classList.add("your-active-class") & sections[index].scrollIntoView() & sections[index].classList.add("your-active-class")
        : li.classList.remove("your-active-class") & sections[index].classList.remove("your-active-class")
    })
    : ""
})


// Add class 'active' to section when near top of viewport.
// It should be clear which section is being viewed while scrolling through the page.

function changeLinkState() {
    let index = sections.length
  
    while(--index && window.scrollY + 350 < sections[index].offsetTop) {}
    
    lis.forEach((link) => link.classList.remove('your-active-class'))
    lis[index].classList.add('your-active-class')
    
    sections.forEach((link) => link.classList.remove('your-active-class'))
    sections[index].classList.add('your-active-class')
  }
  
  changeLinkState()
  window.addEventListener('scroll', changeLinkState)