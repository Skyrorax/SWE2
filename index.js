/* navigation-bar transition */

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navitems');

    burger.addEventListener('click', () => {
        console.log('click');
        nav.classList.toggle('nav-active');
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