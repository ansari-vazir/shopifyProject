const hamButton = document.querySelector('#hamber');
const menuList = document.getElementById("menuList")

hamButton.addEventListener('click',(e)=>{
    if(menuList.style.display==="none"){
        menuList.style.display="block";
    }
    else {
        menuList.style.display="none";
    }

    console.log("clicked");
})