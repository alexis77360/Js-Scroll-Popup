let oneTime = true;

window.addEventListener('scroll', () => {

    //? Effet sur la navbar
    if (window.scrollY > 50) {
        navbar.style.height = "50px";
    } else {
        navbar.style.height = "100px";
    }

    //!scrollY = position du scroll
    //!innerHeight = position de la page en dessous de la scrollbar
    //!offsetHeight = hauteur de la page

    //? on additionne les deux hauteur et on divise par la hauteur de la page
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight

    //? Effet sur apparition de l'image
    if (scrollValue > 0.4) {
        imgImprovise.style.opacity = 1
        imgImprovise.style.transform = "translateX(0px)"
    } else {
        imgImprovise.style.opacity = 0
        imgImprovise.style.transform = "translateX(-100px)"
    }

    //? Effet pop-up

    if (scrollValue > 0.6 && oneTime) {
        popup.style.opacity = 1
        popup.style.transform = "none"
    }

    closeBtn.addEventListener('click', () => {
        popup.style.opacity = 0
        popup.style.transform = "translateX(100px)"
        oneTime = false;
    })

})