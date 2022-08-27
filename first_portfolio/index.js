document.addEventListener('DOMContentLoaded', function () {

    //Making header fixed on scroll
    window.onscroll = function () {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const logo = document.querySelector('.logo');
        const menuItems = Array.from(document.getElementsByClassName('menu-item'));
        const phoneIcon = document.querySelector('.bi-telephone-plus');
        const phoneIconBackground = document.querySelector('.icon');
        const button = document.querySelector('.custom-btn');


        if (window.scrollY > 1) {
            header.style.position = 'fixed';
            nav.style.backgroundColor = '#ffffff';
            nav.style.boxShadow = '0 1rem 3rem rgba(0, 0, 0, .175)';
            logo.style.color = '#000000';
            menuItems.forEach(element => {
                element.classList.add('menu-items-grey');
                element.classList.remove('menu-items-white');
            });
            phoneIcon.style.color = '#ffffff';
            phoneIconBackground.style.backgroundColor = '#14B789';
            button.style.borderColor = '#14B789';
            button.style.color = '#14B789';
        } else {
            header.style.position = '';
            nav.style.background = 'transparent';
            nav.style.boxShadow = '';
            logo.style.color = '#ffffff';
            menuItems.forEach(element => {
                element.classList.remove('menu-items-grey');
                element.classList.add('menu-items-white');
            })
            phoneIcon.style.color = '#000000';
            phoneIconBackground.style.backgroundColor = '#ffffff';
            button.style.borderColor = '#ffffff';
            button.style.color = '#ffffff';
        }
    }


    //Mobile menu animation

    const button = document.getElementById('menu-button');
    const lineOne = document.querySelector('.menu-line-1');
    const lineTwo = document.querySelector('.menu-line-2');
    const lineThree = document.querySelector('.menu-line-3');
    const menuItems = document.querySelector('.menu-items');

    button.addEventListener('click', () => {
        lineOne.classList.toggle('line-1-animation');
        lineThree.classList.toggle('line-3-animation');
        lineTwo.classList.toggle('line-2-animation');
        menuItems.classList.toggle('menu-items-animation');
    })
})