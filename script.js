
 
var navHolderClass = 'navs-holder-box'
var navs = document.getElementById('navs')
var burgerBtn = document.getElementById('burger')
var screenWidth = document.body.clientWidth
var activeNav = navs.querySelectorAll('li')

/*
  [BOX]: navbar box that appear by click on hamburger icon only on small screens.
  */
// to remove the [BOX] (which if not using this event, it will stic when you open it and then changed the width of the browser screen)
window.addEventListener("resize", () => {
  navs.classList.remove(navHolderClass)
})

// Toggle navbar box on
burgerBtn.addEventListener('click', () => {
  navs.classList.toggle(navHolderClass);
})


activeNav.forEach(nav => {
  nav.addEventListener('click', () => {
    nav.classList.toggle('active')
    let items = siblings(nav)
    // items.classList.remove('active')
    console.log(items);
    
  })
});



const siblings = (elem,filter) => {
  // create an empty array
  let siblings = [];

  // if no parent, return empty list
  if (!elem.parentNode) {
      return siblings;
  }

  // first child of the parent node
  let sibling = elem.parentNode.firstElementChild;

  // loop through next siblings until `null`
  do {
      // push sibling to array
      if (sibling != elem && (!filter || filter(sibling))) {
          siblings.push(sibling);
      }
  } while (sibling = sibling.nextElementSibling);
  
  return siblings;
};

const drink = document.querySelector('#drink');

// get all all siblings
const nodes = siblings(drink);

nodes.forEach(li => console.log(li.innerText));
