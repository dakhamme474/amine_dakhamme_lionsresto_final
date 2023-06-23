// ^ menu burger 
let menu_liste = document.querySelector(".menu-burger")
let links = document.querySelector(".nav-info")

const menu_burger = () =>{
 links.classList.toggle("open-menu")
}

menu_liste.addEventListener("click" , menu_burger)

let scroll_up = document.querySelector(".up")
window.onscroll = function (){ 
    if (this.scrollY >= 500 ) {
        scroll_up.classList.add("show")
    }else{
        scroll_up.classList.remove("show")

    }
}
scroll_up.addEventListener("click" , ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
})


// !let xwatch = document.querySelector(".watch-video")
// !let place_video = document.querySelector(".vid-vid")

// !const xvideo_add = () =>{
// !place_video.classList.add(".modal-video-1");

// !};
// !xwatch.addEventListener("click" , xvideo_add)

