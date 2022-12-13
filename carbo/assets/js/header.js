document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.getElementById('menuBtn');

    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    const line3 = document.getElementById('line3')

    const line1Animation = [
        { top: '10px', transform: 'rotate(0deg)' },
        { top: '18px', transform: 'rotate(45deg)' }
    ]
    const line3Animation = [
        { top: '26px', transform: 'rotate(0deg)' },
        { top: '18px', transform: 'rotate(-45deg)' }
    ]
    const line2Animation = [
        { top: '18px', width: '20px' },
        { top: '18px', width: '0px' }
    ]

    const lineTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    }

    menuBtn.addEventListener('click', function () {

        if (menuBtn.classList.contains('active')) {
            line1.animate(line1Animation, lineTiming).reverse()
            line2.animate(line2Animation, lineTiming).reverse()
            line3.animate(line3Animation, lineTiming).reverse()
        } else {
            line1.animate(line1Animation, lineTiming)
            line2.animate(line2Animation, lineTiming)
            line3.animate(line3Animation, lineTiming)
        }

        menuBtn.classList.toggle('active')
    })
})