const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow , i) => {
  
  const itemNumber = movieLists[i].querySelectorAll("img").length;

  let clickCounter = 0;
  arrows.addEventListener("click" , ()=>{
    const ratio=Maths.floor(window.innerWidth/270)
    clickCounter++;
    if(itemNumber - (4+ clickCounter) + (4 - ratio)>= 0){
    movieLists[i].style.transform = 'translateX(${ movieLists [i].computedStyleMap().get("transform")[0].x.value - 300 }px)';
  
     
   
      
    
    }else{
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0 ;
    } 

    
  });
  
    
});
const ball = document.querySelector(".toggle-ball")
const items = document.getElementById("#container , #movie-list-title , #navbar-container , #sidebar , #left-menu-icon , #toggle , #menu-list-item").style.background-color
ball.addEventListener("click" ,() =>{
  items.forEach(item=>{
    item.classList.toggle("active")
  })
  items.classList.toggle("active")
})
