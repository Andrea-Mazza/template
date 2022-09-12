document.addEventListener('DOMContentLoaded', function () {

    // ANIMATION FOR MOBILE-HEADER BUTTON
    /*
        TABLE OF CONTENTS
        1. CREATE VARIABLES FOR THE BUTTON AND EACH LINES
        2. CREATE KEYFRAMES AND TIMING FOR EACH ANIMATION
        3. ANIMATE MENU CONTAINER
        4. FINALLY TRIGGER THE EVENT AND CALL THE ANIMATIONS ON EACH ELEMENT
    */


    /* 1. CREATE VARIABLES FOR THE BUTTON AND EACH LINES */
    const menuBtn = document.getElementById('menu-icon');
    const firstLine = document.querySelector('.line-1');
    const secondLine = document.querySelector('.line-2');
    const thirdLine = document.querySelector('.line-3');
    const menuContainer = document.querySelector('.menu-container');
    const menuItem = document.querySelectorAll('.menu-item');

    /* 
        2. CREATE KEYFRAMES AND TIMING FOR EACH ANIMATION
    */

    const secondLineAnimation = [
        { width: '30px', display: 'block' },
        { width: '0', display: 'none' }
    ];

    const secondLineTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    }

    const firstLineAnimation = [
        { width: '22px', top: '10px', transform: 'rotate(0)' },
        { width: '30px', top: '15px', transform: 'rotate(45deg)' }
    ]

    const firstLineTimining = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    }

    const thirdLineAnimation = [
        { width: '22px', top: '30px', transform: 'rotate(0)' },
        { width: '30px', top: '15px', transform: 'rotate(-45deg)' }
    ]

    const thirdLineTimining = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    }

    /*
        3. ANIMATE MENU CONTAINER
    */
    const menuContainerAnimation = [
        { transform: 'scale(1, 0)' },
        { transform: 'scale(1, 1)' }
    ];

    const menuContainerTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    }

    /* 
        4. FINALLY TRIGGER THE EVENT AND CALL THE ANIMATIONS ON EACH ELEMENT
    */

    menuBtn.addEventListener('click', () => {
        if (menuBtn.classList.contains('opened')) {
            secondLine.animate(secondLineAnimation, secondLineTiming).reverse();
            firstLine.animate(firstLineAnimation, firstLineTimining).reverse();
            thirdLine.animate(thirdLineAnimation, thirdLineTimining).reverse();
            menuContainer.animate(menuContainerAnimation, menuContainerTiming).reverse();
            menuBtn.classList.remove('opened');
        } else {
            secondLine.animate(secondLineAnimation, secondLineTiming);
            firstLine.animate(firstLineAnimation, firstLineTimining);
            thirdLine.animate(thirdLineAnimation, thirdLineTimining);
            menuContainer.animate(menuContainerAnimation, menuContainerTiming);
            menuBtn.classList.add('opened');
        }
    })

    // Close menu button when click on menu items

    menuItem.forEach(element => element.addEventListener('click', function () {
        secondLine.animate(secondLineAnimation, secondLineTiming).reverse();
        firstLine.animate(firstLineAnimation, firstLineTimining).reverse();
        thirdLine.animate(thirdLineAnimation, thirdLineTimining).reverse();
        menuContainer.animate(menuContainerAnimation, menuContainerTiming).reverse();
        menuBtn.classList.remove('opened');
    }));



    //ANIMATION FOR CIRCULAR PROGRESS BAR
    const circleOne = document.querySelector('.circle-container__progress');
    const circleTwo = document.querySelector('.circle-container__progress-2');
    const circleThree = document.querySelector('.circle-container__progress-3');

    // First circle with value of 90%
    const circleOneAnimation = [
        { strokeDashoffset: '100' },
        { strokeDashoffset: '10' }
    ];

    const circleOneTiming = {
        duration: 1200,
        iteration: 1,
        fill: 'forwards'
    }

    circleOne.animate(circleOneAnimation, circleOneTiming);

    // Second circle with value of 80%
    const circleTwoAnimation = [
        { strokeDashoffset: '100' },
        { strokeDashoffset: '20' }
    ];

    const circleTwoTiming = {
        duration: 1000,
        iteration: 1,
        fill: 'forwards'
    }

    circleTwo.animate(circleTwoAnimation, circleTwoTiming);

    // Third circle with value of 80%
    circleThree.animate(circleTwoAnimation, circleTwoTiming);


    //ANIMATION SECTION 3

    // First, I'll create an object with all the information stored in each card result
    const card = [
        {
            firstP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.' +
                'dover lipsum lorem and the others.',
            span: {
                iconClass: 'bi bi-check',
                textOne: 'Optimized Template',
                textTwo: 'Data Info',
                textThree: 'SEO Analysis',
                textFour: 'Data Info',
                textFive: 'SEO Analysis',
                textSix: 'Optimized Template'
            },
            secondP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.',
            cardOne: {
                h4: 'SEO Analysis & Daily Reports',
                img: "./images/services-image.jpg"
            },
            cardTwo: {
                h4: 'Healthy Food & Life',
                img: "./images/services-image-02.jpg"
            },
            cardThree: {
                h4: 'Car Re-search & Transport',
                img: "./images/services-image-03.jpg"
            },
            cardFour: {
                h4: 'Online Shopping & Tracking ID',
                img: "./images/services-image-04.jpg"
            },
            cardFive: {
                h4: 'Enjoy & Travel',
                img: "./images/services-image.jpg"
            }
        }
    ];

    const mainContainer = document.querySelector('.btn-result');
    const btnOne = document.getElementById('btn-1');
    const btnTwo = document.getElementById('btn-2');
    const btnThree = document.getElementById('btn-3');
    const btnFour = document.getElementById('btn-4');
    const btnFive = document.getElementById('btn-5');
    const btnArray = Array.from(document.getElementsByClassName('btn-container'));



    const cardAnimation = [
        { opacity: '1', transform: 'translateX(0)' },
        { opacity: '0', transform: 'translateX(-20px)' }
    ];

    const cardTiming = {
        duration: 300,
        iteration: 1,
        fill: 'both',
    }

    function cardGenerator(firstP, secondP, text1, text2, text3, text4, text5, h4, img) {

        for (let i = 0; i < btnArray.length; i++) {
            if (btnArray[i].classList.contains('active')) {
                btnArray[i].classList.remove('active');
            }
        }

        if (mainContainer.childNodes.length) {
            const child = Array.from(document.querySelectorAll('.card-container'));
            child.forEach(function (element) {
                element.remove();
            })
        }

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        mainContainer.appendChild(cardContainer);

        // This is about text container

        const textContainer = document.createElement('div');
        textContainer.classList.add('text');

        cardContainer.appendChild(textContainer);

        const heading = document.createElement('h4');
        heading.innerHTML = h4;
        textContainer.appendChild(heading);

        const firstPara = document.createElement('p');
        firstPara.innerHTML = firstP;
        textContainer.appendChild(firstPara);

        const list = document.createElement('ul');
        list.classList.add('activity-list');
        textContainer.appendChild(list);

        const firstItem = document.createElement('li');
        list.appendChild(firstItem);

        const iconOne = document.createElement('i');
        iconOne.classList.add('bi');
        iconOne.classList.add('bi-check');
        firstItem.appendChild(iconOne);

        const listText1 = document.createTextNode(text1);
        firstItem.appendChild(listText1);


        const secondItem = document.createElement('li');
        list.appendChild(secondItem);
        const iconTwo = document.createElement('i');
        iconTwo.classList.add('bi');
        iconTwo.classList.add('bi-check');
        secondItem.appendChild(iconTwo);
        const listText2 = document.createTextNode(text2);
        iconTwo.appendChild(listText2);



        const thirdItem = document.createElement('li');
        const iconThree = document.createElement('i');
        iconThree.classList.add('bi');
        iconThree.classList.add('bi-check');
        thirdItem.appendChild(iconThree);
        const listText3 = document.createTextNode(text3);
        iconThree.appendChild(listText3);

        list.appendChild(thirdItem);

        const fourthItem = document.createElement('li');
        const iconFour = document.createElement('i');
        iconFour.classList.add('bi');
        iconFour.classList.add('bi-check');
        fourthItem.appendChild(iconFour);
        const listText4 = document.createTextNode(text4);
        iconFour.appendChild(listText4);

        list.appendChild(fourthItem);

        const fifthItem = document.createElement('li');
        const iconFive = document.createElement('i');
        iconFive.classList.add('bi');
        iconFive.classList.add('bi-check');
        fifthItem.appendChild(iconFive);
        const listText5 = document.createTextNode(text5);
        iconFive.appendChild(listText5);

        list.appendChild(fifthItem);


        const secondPara = document.createElement('p');
        secondPara.innerHTML = secondP;
        textContainer.appendChild(secondPara);

        // This is about img container

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image');
        cardContainer.appendChild(imgContainer);


        const image = document.createElement('img');
        image.src = img;

        imgContainer.appendChild(image);

        cardContainer.animate(cardAnimation, cardTiming).reverse();

    }

    btnOne.addEventListener('click', function () {
        // if (document.querySelector('.btn-result').firstElementChild) {
        //     document.querySelector('.card-container').remove();
        // }
        cardGenerator(firstP = card[0].firstP, secondP = card[0].secondP, text1 = card[0].span.textOne, text2 = card[0].span.textTwo, text3 = card[0].span.textThree, text4 = card[0].span.textFour, text5 = card[0].span.textFive, h4 = card[0].cardOne.h4, img = card[0].cardOne.img);
        btnOne.classList.add('active');
    });

    btnTwo.addEventListener('click', function () {
        cardGenerator(firstP = card[0].firstP, secondP = card[0].secondP, text1 = card[0].span.textOne, text2 = card[0].span.textTwo, text3 = card[0].span.textThree, text4 = card[0].span.textFour, text5 = card[0].span.textFive, h4 = card[0].cardTwo.h4, img = card[0].cardTwo.img);
        btnTwo.classList.add('active');
    });

    btnThree.addEventListener('click', function () {
        cardGenerator(firstP = card[0].firstP, secondP = card[0].secondP, text1 = card[0].span.textOne, text2 = card[0].span.textTwo, text3 = card[0].span.textThree, text4 = card[0].span.textFour, text5 = card[0].span.textFive, h4 = card[0].cardThree.h4, img = card[0].cardThree.img);
        btnThree.classList.add('active');
    });

    btnFour.addEventListener('click', function () {
        cardGenerator(firstP = card[0].firstP, secondP = card[0].secondP, text1 = card[0].span.textOne, text2 = card[0].span.textTwo, text3 = card[0].span.textThree, text4 = card[0].span.textFour, text5 = card[0].span.textFive, h4 = card[0].cardFour.h4, img = card[0].cardFour.img);
        btnFour.classList.add('active');
    });

    btnFive.addEventListener('click', function () {
        cardGenerator(firstP = card[0].firstP, secondP = card[0].secondP, text1 = card[0].span.textOne, text2 = card[0].span.textTwo, text3 = card[0].span.textThree, text4 = card[0].span.textFour, text5 = card[0].span.textFive, h4 = card[0].cardFive.h4, img = card[0].cardFive.img);
        btnFive.classList.add('active');
    });

    btnOne.click();

})