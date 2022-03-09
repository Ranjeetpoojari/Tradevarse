var sun = document.getElementById("sun");
sun.onclick = function(){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")){
        sun.src = "assets/\img/\sun.png";
    } 
    else
    {
        sun.src = "assets/\img/\moon.png";
     }

}