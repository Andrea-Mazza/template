document.addEventListener('DOMContentLoaded', function () {
    const mobileBtn = document.getElementById('mobile-menu');
    const btnLinesOne = document.getElementById('line-1');
    const btnLinesTwo = document.getElementById('line-2');
    const btnLinesThree = document.getElementById('line-3');
    const mobileMenuContainer = document.getElementById('mobile-menu-container');

    const btnLinesOneAnimation = [
        { top: '14px', transform: 'rotate(0deg)' },
        { top: '20px', transform: 'rotate(45deg)' }
    ];

    const btnLinesTwoAnimation = [
        { width: '25px' },
        { width: '0px' }
    ];

    const btnLinesThreeAnimation = [
        { top: '26px', transform: 'rotate(0deg)' },
        { top: '20px', transform: 'rotate(-45deg)' }
    ];

    const mobileMenuContainerAnimation = [
        { transform: 'scale(1, 0)' },
        { transform: 'scale(1, 1)' }
    ];

    const mobileBtnTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    };


    mobileBtn.addEventListener('click', function () {

        if (mobileBtn.classList.contains('opened')) {
            btnLinesOne.animate(btnLinesOneAnimation, mobileBtnTiming).reverse();
            btnLinesTwo.animate(btnLinesTwoAnimation, mobileBtnTiming).reverse();
            btnLinesThree.animate(btnLinesThreeAnimation, mobileBtnTiming).reverse();
            mobileMenuContainer.animate(mobileMenuContainerAnimation, mobileBtnTiming).reverse();
        } else {
            btnLinesOne.animate(btnLinesOneAnimation, mobileBtnTiming);
            btnLinesTwo.animate(btnLinesTwoAnimation, mobileBtnTiming);
            btnLinesThree.animate(btnLinesThreeAnimation, mobileBtnTiming);
            mobileMenuContainer.animate(mobileMenuContainerAnimation, mobileBtnTiming);
        }
        mobileBtn.classList.toggle('opened');
    })

    const heroImg = document.getElementById('heroImg');

    const heroImgAnimation = [
        { transform: 'translateY(2%)' },
        { transform: 'translateY(1%)' },
        { transform: 'translateY(2%)' }
    ];

    const heroImgTiming = {
        duration: 2000,
        iterations: Infinity,
        fill: 'both'
    };

    setInterval(zoomIn(), 1000);

    function zoomIn() {
        heroImg.animate(heroImgAnimation, heroImgTiming);
    }
})