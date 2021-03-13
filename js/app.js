const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


const navLogo = document.querySelector("#navbar__logo");
const highLightMenu = () => {
    const elem = document.querySelector(".highLight");
    const homeMenu = document.querySelector("#home__page");
    const aboutMenu = document.querySelector("#about__page");
    const servicesMenu = document.querySelector("#services__page");
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    // adds highlight class to my menu items

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highLight');
        aboutMenu.classList.remove('highLight');
        console.log(homeMenu);
        return;
    }
    else if (window.innerWidth > 960 && scrollPos <1400) {
        aboutMenu.classList.add('highLight');
        homeMenu.classList.remove('highLight');
        servicesMenu.classList.remove('highLight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highLight');
        aboutMenu.classList.remove('highLight');
        return;
    }
    if ((elem && innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highLight');
    }
};

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);