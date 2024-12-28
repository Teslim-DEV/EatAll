let search = document.querySelector(".search");
let searchicon= document.querySelector(".searchicon")
let cartlist = document.querySelector(".cartlist")
let carticon = document.querySelector(".carticon")
searchicon.onclick =()=> {
    search.classList.toggle("active")
    cartlist.classList.remove("activate")

}
carticon.onclick =()=> {
    search.classList.remove("active")
    cartlist.classList.toggle("activate")

}
let cards = document.querySelector(".cards");
cards.forEach(image,index) 
 function display(index){
    console.log(index,); 

}
