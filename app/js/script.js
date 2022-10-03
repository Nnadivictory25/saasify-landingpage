const body = document.querySelector('body')
const toggleMenu = document.querySelectorAll('.toggle-menu')
const menu = document.querySelector('.mobileNav')
const openIcon = document.querySelector('#open')
const closeIcon = document.querySelector('#close')


toggleMenu.forEach(button => {
    button.addEventListener('click', () => {
        if (menu.classList.contains('fade-in') && body.classList.contains('no-scroll')) {
            menu.classList.remove('fade-in')
            body.classList.remove('no-scroll')
            menu.classList.add('fade-out')
            closeIcon.classList.add('d-none')
            openIcon.classList.remove('d-none')
        } else {
            menu.classList.remove('fade-out')
            menu.classList.add('fade-in')
            body.classList.add('no-scroll')
            closeIcon.classList.remove('d-none')
            openIcon.classList.add('d-none')
        }
    }) 
})


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");


if (screen.width <= 639) {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
}
