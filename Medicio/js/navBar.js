document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const lineTop = document.getElementById('lineTop');
    const lineMiddle = document.getElementById('lineMiddle');
    const lineBottom = document.getElementById('lineBottom');

    const lineTopAnimation = [
        { top: '10px', transform: 'rotate(0deg)' },
        { top: '20px', transform: 'rotate(45deg)' }
    ];

    const lineMiddleAnimation = [
        { width: '40px' },
        { width: '0px' }
    ];

    const lineBottomAnimation = [
        { top: '30px', transform: 'rotate(0deg)' },
        { top: '20px', transform: 'rotate(-45deg)' }
    ];

    const animationTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    };

    menuBtn.addEventListener('click', function () {
        if (menuBtn.classList.contains('active')) {
            lineTop.animate(lineTopAnimation, animationTiming).reverse();
            lineMiddle.animate(lineMiddleAnimation, animationTiming).reverse();
            lineBottom.animate(lineBottomAnimation, animationTiming).reverse();
        } else {
            lineTop.animate(lineTopAnimation, animationTiming);
            lineMiddle.animate(lineMiddleAnimation, animationTiming);
            lineBottom.animate(lineBottomAnimation, animationTiming);
        }
        menuBtn.classList.toggle('active');
    });
});