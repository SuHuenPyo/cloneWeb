function enableHiddenNavbar(){
    const hiddenNavi = document.getElementById("nav-wrapped-content");
    hiddenNavi.style.opacity = 1;
    hiddenNavi.style.visibility = "visible";
    hiddenNavi.style.overflow = "visible";
}
// function disableHiddenNavbar(){
//     const hiddenNavi = document.getElementById("nav-wrapped-content");
//     hiddenNavi.style.opacity = 0;
//     hiddenNavi.style.visibility = "hidden";
//     hiddenNavi.style.overflow = "hidden";
// }
document.getElementById("nav-wrapped-content").addEventListener('mouseleave', (event)=>{
    const hiddenNavi = document.getElementById("nav-wrapped-content");
    hiddenNavi.style.opacity = 0;
    hiddenNavi.style.visibility = "hidden";
    hiddenNavi.style.overflow = "hidden";
})

