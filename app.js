document.querySelector(".container").style.display = "none";
document.querySelector(".bg").style.display = "none";

window.onload = () =>{
  setTimeout(()=>{
    document.querySelector(".load-wrapper").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.querySelector(".bg").style.display = "block";
  },Math.floor(Math.random() * 6000) + 1000);
}

function hideElement(elem){
  if(document.querySelector(elem).style.display === "none") {
    document.querySelector(elem).style.display = "block";
  } else {
    document.querySelector(".bg").style.display = "none";
  }
}
