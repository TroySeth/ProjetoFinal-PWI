function hideIconBar(){
    iconBar = document.getElementById("iconBar");
    navigation = document.getElementById("navigation");
    iconBar.setAttribute("style","display:none;");
    navigation.classList.remove("hide");
}

function hideIconBar(){
    iconBar = document.getElementById("iconBar");
    navigation = document.getElementById("navigation");
    iconBar.setAttribute("style","display:block;");
    navigation.classList.add("hide");
}