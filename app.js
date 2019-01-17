// have all sections display too none
// add navigation-side__item--active onclick of link and remove previous
// onscroll have spinner show and open about section
// onclick of link hide previous section 
  // show spinner and after interval show section

const links = document.querySelectorAll(".navigation-side__item");

const sections = document.querySelectorAll("section");
sections.forEach(section => section.style.display="none");

window.onload = ()=>{
  addSpinner();
  
  setTimeout(()=>{
    document.querySelector(".panel--right").classList.remove("spinner-2");
    document.querySelector("#home-section").style.display="block";
  },5500)
}

function addSpinner(query){
  document.querySelector(`.panel--right`).classList.add("spinner-2");
}
function showContent(query){
  document.querySelector(".panel--right").classList.remove("spinner");
  document.querySelector(`#${query}-section`).style.display="block";
}
function loading(evt){
  sections.forEach(section => section.style.display="none");
  addSpinner();
  setTimeout(()=>{
    document.querySelector(".panel--right").classList.remove("spinner-2");
    document.querySelector(`#${evt.target.textContent}-section`).style.display="block";
  },1500)
}
function clearActiveState(){
  links.forEach( link =>{
    if(link.classList.contains("navigation-side__item--active"));
      link.classList.remove("navigation-side__item--active");
      link.firstElementChild.classList.remove("navigation-side__link--active");
  });
}

links.forEach(link => {
  link.addEventListener("click",(evt)=>{
    clearActiveState();
    evt.target.classList.add("navigation-side__link--active");
    evt.target.parentElement.classList.add("navigation-side__item--active");
    loading(evt);
  })
})
