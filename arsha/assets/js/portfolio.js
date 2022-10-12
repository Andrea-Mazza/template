document.addEventListener('DOMContentLoaded', function () {

    // Categories buttons animation active class
    const all = document.getElementById('all');
    const app = document.getElementById('app');
    const card = document.getElementById('card');
    const web = document.getElementById('web');

    const categories = [all, app, card, web];

    for (let i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click', function () {
            for (let j = 0; j < categories.length; j++) {
                categories[j].classList.remove('active');
            }
            categories[i].classList.add('active');
        });
    }

    //Portfolio description item animation
    const item = Array.from(document.getElementsByClassName('portfolio-item'));
    const description = Array.from(document.getElementsByClassName('description'));
    const img = Array.from(document.getElementsByClassName('img-item'));

    const descriptionAnimation = [
        { opacity: '0' },
        { opacity: '1' }
    ];

    const descriptionAnimationTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    };

    const imgAnimation = [
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)' }
    ];

    const imgTiming = {
        duration: 300,
        iterations: 1,
        fill: 'both'
    };

    // for (let i = 0; i < item.length; i++) {
    //     item[i].addEventListener('mouseenter', function () {
    //         description[i].animate(descriptionAnimation, descriptionAnimationTiming);
    //         img[i].animate(img1Animation, img1Timing);
    //     })

    //     item[i].addEventListener('mouseleave', function () {
    //         description[i].animate(descriptionAnimation, descriptionAnimationTiming).reverse();
    //         img[i].animate(img1Animation, img1Timing).reverse();
    //     });
    // }

    //Categories containier animation
    const plusIcon = "./assets/img/plus.svg";
    const shareIcon = "./assets/img/share.svg";
    const container = document.getElementById("categoriesContainer");

    const appOne = {
        imgSrc: "./assets/img/portfolio/portfolio-1.jpg",
        h4: "App 1",
        p: "App"
    };

    const appTwo = {
        imgSrc: "./assets/img/portfolio/portfolio-3.jpg",
        h4: "App 2",
        p: "App"
    };

    const appThree = {
        imgSrc: "./assets/img/portfolio/portfolio-6.jpg",
        h4: "App 3",
        p: "App"
    };

    const webOne = {
        imgSrc: "./assets/img/portfolio/portfolio-9.jpg",
        h4: "Web 1",
        p: "Web"
    };

    const webTwo = {
        imgSrc: "./assets/img/portfolio/portfolio-5.jpg",
        h4: "Web 2",
        p: "Web"
    };

    const webThree = {
        imgSrc: "./assets/img/portfolio/portfolio-2.jpg",
        h4: "Web 3",
        p: "Web"
    };

    const cardOne = {
        imgSrc: "./assets/img/portfolio/portfolio-4.jpg",
        h4: "Card 1",
        p: "Card"
    };

    const cardTwo = {
        imgSrc: "./assets/img/portfolio/portfolio-7.jpg",
        h4: "Card 2",
        p: "Card"
    };

    const cardThree = {
        imgSrc: "./assets/img/portfolio/portfolio-8.jpg",
        h4: "Card 1",
        p: "Card"
    };

    function itemCreation(path, heading, para) {
        const column = document.createElement('div');
        column.classList.add('col-lg-4');
        column.classList.add('col-md-6');
        column.classList.add('col-12');

        const item = document.createElement('div');
        item.id = "app1";
        item.classList.add('portfolio-item');

        const img = document.createElement('img');
        img.src = path;
        img.classList.add('img-item');

        const description = document.createElement('div');
        description.classList.add('description');

        const text = document.createElement('div');
        text.classList.add('text');

        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        const p = document.createElement('p');
        p.innerHTML = para;

        const icons = document.createElement('div');
        icons.classList.add('icons');
        const firstIcon = document.createElement('a');
        const plus = document.createElement('img');
        plus.classList.add('icon');
        plus.src = plusIcon;
        const secondIcon = document.createElement('a');
        const share = document.createElement('img');
        share.src = shareIcon;
        share.classList.add('icon');

        const columnAnimation = [
            { transform: 'scale(0)' },
            { transform: 'scale(1)' }
        ];

        const columnTiming = {
            duration: 300,
            iterations: 1,
            fill: 'both'
        };

        column.animate(columnAnimation, columnTiming);


        item.appendChild(img);
        item.appendChild(description);
        description.appendChild(text);
        text.appendChild(h4);
        text.appendChild(p);
        description.appendChild(icons);
        icons.appendChild(firstIcon);
        firstIcon.appendChild(plus);
        icons.appendChild(secondIcon);
        secondIcon.appendChild(share);
        column.appendChild(item);
        container.appendChild(column);


    }

    function allCreation() {
        const column1 = document.createElement('div');
        column1.classList.add('col-lg-4');
        column1.classList.add('col-md-6');
        column1.classList.add('col-12');

        //App 1

        const row1 = document.createElement('div');
        row1.classList.add('row');

        const app1 = document.createElement('div');
        app1.id = "app1";
        app1.classList.add('portfolio-item');

        const appImg1 = document.createElement('img');
        appImg1.src = appOne.imgSrc;
        appImg1.classList.add('img-item');

        const appDescription1 = document.createElement('div');
        appDescription1.classList.add('description');

        const appText1 = document.createElement('div');
        appText1.classList.add('text');

        const app1h4 = document.createElement('h4');
        app1h4.innerHTML = appOne.h4;
        const app1p = document.createElement('p');
        app1p.innerHTML = appOne.p;

        const appIcons1 = document.createElement('div');
        appIcons1.classList.add('icons');
        const firstIcon1 = document.createElement('a');
        const plus1 = document.createElement('img');
        plus1.classList.add('icon');
        plus1.src = plusIcon;
        const secondIcon1 = document.createElement('a');
        const share1 = document.createElement('img');
        share1.src = shareIcon;
        share1.classList.add('icon');

        // App 3

        const row2 = document.createElement('div');
        row2.classList.add('row');

        const app3 = document.createElement('div');
        app3.id = "app3";
        app3.classList.add('portfolio-item');

        const appImg3 = document.createElement('img');
        appImg3.src = appThree.imgSrc;
        appImg3.classList.add('img-item');

        const appDescription3 = document.createElement('div');
        appDescription3.classList.add('description');

        const appText3 = document.createElement('div');
        appText3.classList.add('text');

        const app3h4 = document.createElement('h4');
        app3h4.innerHTML = appThree.h4;
        const app3p = document.createElement('p');
        app3p.innerHTML = appThree.p;

        const appIcons3 = document.createElement('div');
        appIcons3.classList.add('icons');
        const firstIcon2 = document.createElement('a');
        const plus2 = document.createElement('img');
        plus2.classList.add('icon');
        plus2.src = plusIcon;
        const secondIcon2 = document.createElement('a');
        const share2 = document.createElement('img');
        share2.src = shareIcon;
        share2.classList.add('icon');


        app1.appendChild(appImg1);
        app1.appendChild(appDescription1);
        appDescription1.appendChild(appText1);
        appText1.appendChild(app1h4);
        appText1.appendChild(app1p);
        appDescription1.appendChild(appIcons1);
        appIcons1.appendChild(firstIcon1);
        firstIcon1.appendChild(plus1);
        appIcons1.appendChild(secondIcon1);
        secondIcon1.appendChild(share1);
        row1.appendChild(app1);

        app3.appendChild(appImg3);
        app3.appendChild(appDescription3);
        appDescription3.appendChild(appText3);
        appText3.appendChild(app3h4);
        appText3.appendChild(app3p);
        appDescription3.appendChild(appIcons3);
        appIcons3.appendChild(firstIcon2);
        firstIcon2.appendChild(plus2);
        appIcons3.appendChild(secondIcon2);
        secondIcon2.appendChild(share2);
        row2.appendChild(app3);

        column1.appendChild(row1);
        column1.appendChild(row2);
        container.appendChild(column1);

        //Second column
        const column2 = document.createElement('div');
        column2.classList.add('col-lg-4');
        column2.classList.add('col-md-6');
        column2.classList.add('col-12');

        //Web 3
        const row3 = document.createElement('div');
        row3.classList.add('row');

        const web3 = document.createElement('div');
        web3.id = "web3";
        web3.classList.add('portfolio-item');

        const webImg3 = document.createElement('img');
        webImg3.src = webThree.imgSrc;
        webImg3.classList.add('img-item');

        const webDescription3 = document.createElement('div');
        webDescription3.classList.add('description');

        const webText3 = document.createElement('div');
        webText3.classList.add('text');

        const web3h4 = document.createElement('h4');
        web3h4.innerHTML = webThree.h4;
        const web3p = document.createElement('p');
        web3p.innerHTML = webThree.p;

        const webIcons3 = document.createElement('div');
        webIcons3.classList.add('icons');
        const firstIcon3 = document.createElement('a');
        const plus3 = document.createElement('img');
        plus3.classList.add('icon');
        plus3.src = plusIcon;
        const secondIcon3 = document.createElement('a');
        const share3 = document.createElement('img');
        share3.src = shareIcon;
        share3.classList.add('icon');


        // Web 2

        const row4 = document.createElement('div');
        row4.classList.add('row');

        const web2 = document.createElement('div');
        web2.id = "web2";
        web2.classList.add('portfolio-item');

        const webImg2 = document.createElement('img');
        webImg2.src = webTwo.imgSrc;
        webImg2.classList.add('img-item');

        const webDescription2 = document.createElement('div');
        webDescription2.classList.add('description');

        const webText2 = document.createElement('div');
        webText2.classList.add('text');

        const web2h4 = document.createElement('h4');
        web2h4.innerHTML = webTwo.h4;
        const web2p = document.createElement('p');
        web2p.innerHTML = webTwo.p;

        const webIcons2 = document.createElement('div');
        webIcons2.classList.add('icons');
        const firstIcon4 = document.createElement('a');
        const plus4 = document.createElement('img');
        plus4.classList.add('icon');
        plus4.src = plusIcon;
        const secondIcon4 = document.createElement('a');
        const share4 = document.createElement('img');
        share4.src = shareIcon;
        share4.classList.add('icon');

        // Web 1

        const row5 = document.createElement('div');
        row5.classList.add('row');

        const web1 = document.createElement('div');
        web1.id = "web1";
        web1.classList.add('portfolio-item');

        const webImg1 = document.createElement('img');
        webImg1.src = webOne.imgSrc;
        webImg1.classList.add('img-item');

        const webDescription1 = document.createElement('div');
        webDescription1.classList.add('description');

        const webText1 = document.createElement('div');
        webText1.classList.add('text');

        const web1h4 = document.createElement('h4');
        web1h4.innerHTML = webOne.h4;
        const web1p = document.createElement('p');
        web1p.innerHTML = webOne.p;

        const webIcons1 = document.createElement('div');
        webIcons1.classList.add('icons');
        const firstIcon5 = document.createElement('a');
        const plus5 = document.createElement('img');
        plus5.classList.add('icon');
        plus5.src = plusIcon;
        const secondIcon5 = document.createElement('a');
        const share5 = document.createElement('img');
        share5.src = shareIcon;
        share5.classList.add('icon');


        web3.appendChild(webImg3);
        web3.appendChild(webDescription3);
        webDescription3.appendChild(webText3);
        webText3.appendChild(web3h4);
        webText3.appendChild(web3p);
        webDescription3.appendChild(webIcons3);
        webIcons3.appendChild(firstIcon3);
        firstIcon3.appendChild(plus3);
        webIcons3.appendChild(secondIcon3);
        secondIcon3.appendChild(share3);
        row3.appendChild(web3);

        web2.appendChild(webImg2);
        web2.appendChild(webDescription2);
        webDescription2.appendChild(webText2);
        webText2.appendChild(web2h4);
        webText2.appendChild(web2p);
        webDescription2.appendChild(webIcons2);
        webIcons2.appendChild(firstIcon4);
        firstIcon4.appendChild(plus4);
        webIcons2.appendChild(secondIcon4);
        secondIcon4.appendChild(share4);
        row4.appendChild(web2);

        web1.appendChild(webImg1);
        web1.appendChild(webDescription1);
        webDescription1.appendChild(webText1);
        webText1.appendChild(web1h4);
        webText1.appendChild(web1p);
        webDescription1.appendChild(webIcons1);
        webIcons1.appendChild(firstIcon5);
        firstIcon5.appendChild(plus5);
        webIcons1.appendChild(secondIcon5);
        secondIcon5.appendChild(share5);
        row5.appendChild(web1);

        column2.appendChild(row3);
        column2.appendChild(row4);
        column2.appendChild(row5);
        container.appendChild(column2);

        // Third column

        const column3 = document.createElement('div');
        column3.classList.add('col-lg-4');
        column3.classList.add('col-md-6');
        column3.classList.add('col-12');

        // App 2

        const row6 = document.createElement('div');
        row6.classList.add('row');

        const app2 = document.createElement('div');
        app2.id = "app2";
        app2.classList.add('portfolio-item');

        const appImg2 = document.createElement('img');
        appImg2.src = appTwo.imgSrc;
        appImg2.classList.add('img-item');

        const appDescription2 = document.createElement('div');
        appDescription2.classList.add('description');

        const appText2 = document.createElement('div');
        appText2.classList.add('text');

        const app2h4 = document.createElement('h4');
        app2h4.innerHTML = appTwo.h4;
        const app2p = document.createElement('p');
        app2p.innerHTML = appTwo.p;

        const appIcons2 = document.createElement('div');
        appIcons2.classList.add('icons');
        const firstIcon6 = document.createElement('a');
        const plus6 = document.createElement('img');
        plus6.classList.add('icon');
        plus6.src = plusIcon;
        const secondIcon6 = document.createElement('a');
        const share6 = document.createElement('img');
        share6.src = shareIcon;
        share6.classList.add('icon');

        // Card 2

        const row7 = document.createElement('div');
        row7.classList.add('row');

        const card2 = document.createElement('div');
        card2.id = "card2";
        card2.classList.add('portfolio-item');

        const cardImg2 = document.createElement('img');
        cardImg2.src = cardTwo.imgSrc;
        cardImg2.classList.add('img-item');

        const cardDescription2 = document.createElement('div');
        cardDescription2.classList.add('description');

        const cardText2 = document.createElement('div');
        cardText2.classList.add('text');

        const card2h4 = document.createElement('h4');
        card2h4.innerHTML = cardTwo.h4;
        const card2p = document.createElement('p');
        card2p.innerHTML = cardTwo.p;

        const cardIcons2 = document.createElement('div');
        cardIcons2.classList.add('icons');
        const firstIcon7 = document.createElement('a');
        const plus7 = document.createElement('img');
        plus7.classList.add('icon');
        plus7.src = plusIcon;
        const secondIcon7 = document.createElement('a');
        const share7 = document.createElement('img');
        share7.src = shareIcon;
        share7.classList.add('icon');

        // Card 1

        const row8 = document.createElement('div');
        row8.classList.add('row');

        const card1 = document.createElement('div');
        card1.id = "card1";
        card1.classList.add('portfolio-item');

        const cardImg1 = document.createElement('img');
        cardImg1.src = cardOne.imgSrc;
        cardImg1.classList.add('img-item');

        const cardDescription1 = document.createElement('div');
        cardDescription1.classList.add('description');

        const cardText1 = document.createElement('div');
        cardText1.classList.add('text');

        const card1h4 = document.createElement('h4');
        card1h4.innerHTML = cardOne.h4;
        const card1p = document.createElement('p');
        card1p.innerHTML = cardOne.p;

        const cardIcons1 = document.createElement('div');
        cardIcons1.classList.add('icons');
        const firstIcon8 = document.createElement('a');
        const plus8 = document.createElement('img');
        plus8.classList.add('icon');
        plus8.src = plusIcon;
        const secondIcon8 = document.createElement('a');
        const share8 = document.createElement('img');
        share8.src = shareIcon;
        share8.classList.add('icon');

        // Card 3

        const row9 = document.createElement('div');
        row9.classList.add('row');

        const card3 = document.createElement('div');
        card3.id = "card3";
        card3.classList.add('portfolio-item');

        const cardImg3 = document.createElement('img');
        cardImg3.src = cardThree.imgSrc;
        cardImg3.classList.add('img-item');

        const cardDescription3 = document.createElement('div');
        cardDescription3.classList.add('description');

        const cardText3 = document.createElement('div');
        cardText3.classList.add('text');

        const card3h4 = document.createElement('h4');
        card3h4.innerHTML = cardThree.h4;
        const card3p = document.createElement('p');
        card3p.innerHTML = cardThree.p;

        const cardIcons3 = document.createElement('div');
        cardIcons3.classList.add('icons');
        const firstIcon9 = document.createElement('a');
        const plus9 = document.createElement('img');
        plus9.classList.add('icon');
        plus9.src = plusIcon;
        const secondIcon9 = document.createElement('a');
        const share9 = document.createElement('img');
        share9.src = shareIcon;
        share9.classList.add('icon');



        app2.appendChild(appImg2);
        app2.appendChild(appDescription2);
        appDescription2.appendChild(appText2);
        appText2.appendChild(app2h4);
        appText2.appendChild(app2p);
        appDescription2.appendChild(appIcons2);
        appIcons2.appendChild(firstIcon6);
        firstIcon6.appendChild(plus6);
        appIcons2.appendChild(secondIcon6);
        secondIcon6.appendChild(share6);
        row6.appendChild(app2);

        card2.appendChild(cardImg2);
        card2.appendChild(cardDescription2);
        cardDescription2.appendChild(cardText2);
        cardText2.appendChild(card2h4);
        cardText2.appendChild(card2p);
        cardDescription2.appendChild(cardIcons2);
        cardIcons2.appendChild(firstIcon7);
        firstIcon7.appendChild(plus7);
        cardIcons2.appendChild(secondIcon7);
        secondIcon7.appendChild(share7);
        row7.appendChild(card2);

        card1.appendChild(cardImg1);
        card1.appendChild(cardDescription1);
        cardDescription1.appendChild(cardText1);
        cardText1.appendChild(card1h4);
        cardText1.appendChild(card1p);
        cardDescription1.appendChild(cardIcons1);
        cardIcons1.appendChild(firstIcon8);
        firstIcon8.appendChild(plus8);
        cardIcons1.appendChild(secondIcon8);
        secondIcon8.appendChild(share8);
        row8.appendChild(card1);

        card3.appendChild(cardImg3);
        card3.appendChild(cardDescription3);
        cardDescription3.appendChild(cardText3);
        cardText3.appendChild(card3h4);
        cardText3.appendChild(card3p);
        cardDescription3.appendChild(cardIcons3);
        cardIcons3.appendChild(firstIcon9);
        firstIcon9.appendChild(plus9);
        cardIcons3.appendChild(secondIcon9);
        secondIcon9.appendChild(share9);
        row9.appendChild(card3);

        column3.appendChild(row6);
        column3.appendChild(row7);
        column3.appendChild(row8);
        column3.appendChild(row9);
        container.appendChild(column3);

        const rows = [row1, row3, row3, row4, row5, row6, row7, row8, row9];
        const items = [app1, app2, app3, web1, web2, web3, card1, card2, card3];
        const descriptions = [appDescription1,
            appDescription3,
            webDescription3,
            webDescription2,
            webDescription1,
            appDescription2,
            cardDescription2,
            cardDescription1,
            cardDescription3];

        const images = [appImg1,
            appImg3,
            webImg3,
            webImg2,
            webImg1,
            appImg2,
            cardImg2,
            cardImg1,
            cardImg3];

        const descriptionAll = Array.from(document.getElementsByClassName('description'));

        const rowAnimation = [
            { transform: 'scale(0)' },
            { transform: 'scale(1)' }
        ];

        const rowTiming = {
            duration: 300,
            iterations: 1,
            fill: 'both'
        };

        for (i = 0; i < rows.length; i++) {
            rows[i].animate(rowAnimation, rowTiming);
        }
    }

    function cleanAll() {
        container.replaceChildren();
    }

    // All category is showed by default
    allCreation();

    all.addEventListener('click', function () {
        cleanAll();
        allCreation();
    });

    app.addEventListener('click', function () {
        cleanAll();
        itemCreation(appOne.imgSrc, appOne.h4, appOne.p);
        itemCreation(appTwo.imgSrc, appTwo.h4, appTwo.p);
        itemCreation(appThree.imgSrc, appThree.h4, appThree.p);
    });

    card.addEventListener('click', function () {
        cleanAll();
        itemCreation(cardOne.imgSrc, cardOne.h4, cardOne.p);
        itemCreation(cardTwo.imgSrc, cardTwo.h4, cardTwo.p);
        itemCreation(cardThree.imgSrc, cardThree.h4, cardThree.p);
    });

    web.addEventListener('click', function () {
        cleanAll();
        itemCreation(webOne.imgSrc, webOne.h4, webOne.p);
        itemCreation(webTwo.imgSrc, webTwo.h4, webTwo.p);
        itemCreation(webThree.imgSrc, webThree.h4, webThree.p);
    });
});