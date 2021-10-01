var navHolderClass = 'navs-holder-box'
var navs = document.getElementById('navs')
var burgerBtn = document.getElementById('burger')
var screenWidth = document.body.clientWidth


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