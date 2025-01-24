function myFunc(){
    var x = document.getElementById("mynav");
    if(x.className === "mainmenu") {
        x.className += " responsive";
    }else{
        x.className = "mainmenu"
    }
}
