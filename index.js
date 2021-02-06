/* navigation-bar transition */

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navitems');
    const navLinks = document.querySelectorAll('.navitems li')

    burger.addEventListener('click', () => {
        //toggle nav
        console.log('click');
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

/* navigation-bar transition end */

/* sidebar automatic */

var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 5000);

/* sidebar automatic end*/

