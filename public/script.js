function menuShow() {
    let menuMobile = document.querySelector('#menuMobile');
    console.log(menuMobile);
    if (menuMobile.classList.contains('d-none')) {
        menuMobile.classList.remove('d-none');
        document.querySelector('.icon').src = "assets/icons8-x-48.png"
    }
    else {
        menuMobile.classList.add('d-none');
        document.querySelector('.icon').src = "assets/icons8-cardápio-50.png"
    }
}
function Subir() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}