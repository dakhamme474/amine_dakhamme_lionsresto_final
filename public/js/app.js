// ^ menu burger 
let menu_liste = document.querySelector(".menu-burger")
let links = document.querySelector(".nav-info")

const menu_burger = () => {
    links.classList.toggle("open-menu")
}

menu_liste.addEventListener("click", menu_burger)

let scroll_up = document.querySelector(".up")
window.onscroll = function () {
    if (this.scrollY >= 500) {
        scroll_up.classList.add("show")
    } else {
        scroll_up.classList.remove("show")

    }
}
scroll_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function openPopup() { document.getElementById("popupOverlay").style.display = "flex"; } function closePopup() { document.getElementById("popupOverlay").style.display = "none"; }








