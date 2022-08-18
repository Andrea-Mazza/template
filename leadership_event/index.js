document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-hamburger').style.justifyContent = 'space-between';

    document.getElementById('mobile-menu').addEventListener("click", mobileMenu);

    function mobileMenu() {

        let menuLine = Array.from(document.querySelectorAll('.menu-line'));


        if (document.querySelector('.menu-hamburger').style.justifyContent === 'space-between') {



            menuLine[1].classList.remove('appear');
            menuLine[1].classList.add('disappear');

            document.querySelector('.menu-hamburger').style.justifyContent = 'center';

            menuLine[0].classList.remove('active-1-reverse');
            menuLine[0].classList.add('active-1');

            menuLine[2].classList.remove('active-2-reverse');
            menuLine[2].classList.add('active-2');

            document.querySelector('.mobileMenu-container').classList.remove('mobileMenu-container-hide-animation');
            document.querySelector('.mobileMenu-container').classList.add('mobileMenu-container-animation');

        } else {

            document.querySelector('.menu-hamburger').style.justifyContent = 'space-between';

            menuLine[0].classList.add('active-1-reverse');
            menuLine[0].classList.remove('active-1');

            menuLine[1].classList.add('appear');
            menuLine[1].classList.remove('disappear');

            menuLine[2].classList.add('active-2-reverse');
            menuLine[2].classList.remove('active-2');

            document.querySelector('.mobileMenu-container').classList.add('mobileMenu-container-hide-animation');
            document.querySelector('.mobileMenu-container').classList.remove('mobileMenu-container-animation');

        }
    }

    //SECTION 4 LIST

    // Below are defined array for each day, which are composed of object for each event of the day. 

    const firstDay = [
        {
            mainImgSrc: "./images/schedule/fabian-friedrich-JDUVM9_VaZE-unsplash.jpg",
            h4: "Startup Development Ideas",
            p: "You are free to download any HTML CSS template from TemplateMo website. You can use any" +
                "template for business purposes. You are not allowed to redistribute the downloadable ZIP" +
                "file on any other template website. Thank you.",
            avatar: {
                imgSrc: "./images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg",
                name: "Logan Wilson",
                role: "CEO / Founder"
            },
            details: {
                time: "9:00 - 9:45 AM",
                location: "Conference Hall 3"
            }
        },
        {
            mainImgSrc: "./images/schedule/clayton-cardinalli-JMoFpdqL3XM-unsplash.jpg",
            h4: "Introduction to Online Businesses",
            p: "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora.",
            avatar: {
                imgSrc: "./images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg",
                name: "Natalie",
                role: "Event Planner"
            },
            details: {
                time: "10:00 - 10:45 AM",
                location: "100-D Room"
            }
        },
        {
            mainImgSrc: "./images/schedule/business-woman-making-presentation-office.jpg",
            h4: "Bootstrapping Startup",
            p: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut consequat purus posuere tortor efficitur, sit amet dignissim libero aliquam.",
            avatar: {
                imgSrc: "images/avatar/senior-man-white-sweater-eyeglasses.jpg",
                name: "Thomas",
                role: "Startup Coach"
            },
            details: {
                time: "11:00 - 11:45 AM",
                location: "100-B Room"
            }
        }
    ];

    const secondDay = [
        {
            mainImgSrc: "./images/schedule/people-smiling-while-conference-room.jpg",
            h4: "Building a famous company",
            p: "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora torquent per conubia.",
            avatar: {
                imgSrc: "./images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg",
                name: "Isabella",
                role: "Event Manager"
            },
            details: {
                time: "9:00 - 9:45 AM",
                location: "Conference Hall 2"
            }
        },
        {
            mainImgSrc: "./images/schedule/jason-goodman-bzqU01v-G54-unsplash.jpg",
            h4: "Dev Ops life in corporate",
            p: "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
            avatar: {
                imgSrc: "./images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg",
                name: "Samantha",
                role: "Top Level Speaker"
            },
            details: {
                time: "10:00 - 10:45 AM",
                location: "100-A Room"
            }
        }
    ];

    const thirdDay = [
        {
            mainImgSrc: "./images/schedule/people-smiling-while-conference-room.jpg",
            h4: "Maintaining a successful business",
            p: "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu.",
            avatar: {
                imgSrc: "./images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg",
                name: "Isabella",
                role: "Event Manager"
            },
            details: {
                time: "9:00 - 9:45 AM",
                location: "Conference Hall 1"
            }
        },
        {
            mainImgSrc: "./images/schedule/jason-goodman-bzqU01v-G54-unsplash.jpg",
            h4: "Working Life in Corporate Environment",
            p: "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna.",
            avatar: {
                imgSrc: "./images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg",
                name: "Samantha",
                role: "Top Level Speaker"
            },
            details: {
                time: "10:00 - 10:45 AM",
                location: "100-C Room"
            }
        }
    ];

    const fourthDay = [
        {
            mainImgSrc: "./images/schedule/jeshoots-com-TWRCH-GaKr4-unsplash.jpg",
            h4: "After Party at the fullest",
            p: "There is a plenty of great HTML CSS templates available at TemplateMo.com website for your businesses. You can download, edit and use any template for any purpose. Please let us know your feedback via Email. Thank you.",
            details: {
                time: "8:00 - 9:00 AM",
                location: "Conference Hall 2"
            }
        }
    ];




    // Define functions to generate list of event for each day using the array defined above

    // Day One
    function dayOne() {

        document.getElementById('day1').classList.add('active');
        document.getElementById('day2').classList.remove('active');
        document.getElementById('day3').classList.remove('active');
        document.getElementById('day4').classList.remove('active');


        // Find the main container
        const container = document.querySelector('.items-container');
        if (container.hasChildNodes) {
            const child = Array.from(document.getElementsByClassName('containerChild'));
            child.forEach(function (element) {
                element.classList.add('fade');
                element.remove();
            })
        }

        for (let i = 0; i < firstDay.length; i++) {


            // Create the list-item container and append to it the class 'list-item'
            const listItemContainer = document.createElement('div');
            listItemContainer.classList.add('list-item');
            listItemContainer.classList.add("containerChild");

            container.appendChild(listItemContainer);

            // Then create the image section on the left side and define its src attribute
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image');
            const imageElement = document.createElement('img');
            imageElement.src = firstDay[i].mainImgSrc;

            imageContainer.appendChild(imageElement);
            listItemContainer.appendChild(imageContainer);

            // Now create the text section on the right side
            const textContainer = document.createElement('div');
            textContainer.classList.add('text');

            const h4 = document.createElement('h4');
            h4.innerHTML = firstDay[i].h4;
            textContainer.appendChild(h4);

            const p = document.createElement('p');
            p.innerHTML = firstDay[i].p;
            textContainer.appendChild(p);

            // Inside the text section create the item footer
            const footer = document.createElement('div');
            footer.classList.add('item-footer');
            const avatarGroup = document.createElement('div');
            avatarGroup.classList.add('avatar-group');

            const avatarImage = document.createElement('img');
            avatarImage.src = firstDay[i].avatar.imgSrc;

            const textAvatar = document.createElement('div');
            textAvatar.classList.add('text-avatar');
            const speakerName = document.createTextNode(firstDay[i].avatar.name);
            textAvatar.appendChild(speakerName);
            const speakerRole = document.createElement('p');
            speakerRole.innerHTML = firstDay[i].avatar.role;
            textAvatar.appendChild(speakerRole);


            avatarGroup.appendChild(avatarImage);
            avatarGroup.appendChild(textAvatar);
            footer.appendChild(avatarGroup);

            // Now create the details section about the time and the location where the event will be placed
            // First create the section about the time
            const time = document.createElement('div');
            time.classList.add('details');

            const timeIcon = document.createElement('i');
            timeIcon.classList.add('bi');
            timeIcon.classList.add('bi-clock');
            time.appendChild(timeIcon);

            const timeText = document.createElement('p');
            timeText.innerHTML = firstDay[i].details.time;
            time.appendChild(timeText);

            //Then create the section about the place
            const place = document.createElement('div');
            place.classList.add('details');

            const placeIcon = document.createElement('i');
            placeIcon.classList.add('bi');
            placeIcon.classList.add('bi-geo');
            place.appendChild(placeIcon);

            const placeText = document.createElement('p');
            placeText.innerHTML = firstDay[i].details.location;
            place.appendChild(placeText);


            footer.appendChild(time);
            footer.appendChild(place);

            textContainer.appendChild(footer);

            listItemContainer.appendChild(textContainer);

        }


    }

    // Day Two
    function dayTwo() {
        document.getElementById('day1').classList.remove('active');
        document.getElementById('day2').classList.add('active');
        document.getElementById('day3').classList.remove('active');
        document.getElementById('day4').classList.remove('active');

        // Find the main container and remove check if ti already has content created by other functions
        const container = document.querySelector('.items-container');
        if (container.hasChildNodes) {
            const child = Array.from(document.getElementsByClassName('containerChild'));
            child.forEach(function (element) {
                element.classList.add('fade');
                element.remove();
            })
        }

        for (let i = 0; i < secondDay.length; i++) {


            // Create the list-item container and append to it the class 'list-item'
            const listItemContainer = document.createElement('div');
            listItemContainer.classList.add('list-item');
            listItemContainer.classList.add('containerChild');

            container.appendChild(listItemContainer);

            // Then create the image section on the left side and define its src attribute
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image');
            const imageElement = document.createElement('img');
            imageElement.src = secondDay[i].mainImgSrc;

            imageContainer.appendChild(imageElement);
            listItemContainer.appendChild(imageContainer);

            // Now create the text section on the right side
            const textContainer = document.createElement('div');
            textContainer.classList.add('text');

            const h4 = document.createElement('h4');
            h4.innerHTML = secondDay[i].h4;
            textContainer.appendChild(h4);

            const p = document.createElement('p');
            p.innerHTML = secondDay[i].p;
            textContainer.appendChild(p);

            // Inside the text section create the item footer
            const footer = document.createElement('div');
            footer.classList.add('item-footer');
            const avatarGroup = document.createElement('div');
            avatarGroup.classList.add('avatar-group');

            const avatarImage = document.createElement('img');
            avatarImage.src = secondDay[i].avatar.imgSrc;

            const textAvatar = document.createElement('div');
            textAvatar.classList.add('text-avatar');
            const speakerName = document.createTextNode(secondDay[i].avatar.name);
            textAvatar.appendChild(speakerName);
            const speakerRole = document.createElement('p');
            speakerRole.innerHTML = secondDay[i].avatar.role;
            textAvatar.appendChild(speakerRole);


            avatarGroup.appendChild(avatarImage);
            avatarGroup.appendChild(textAvatar);
            footer.appendChild(avatarGroup);

            // Now create the details section about the time and the location where the event will be placed
            // First create the section about the time
            const time = document.createElement('div');
            time.classList.add('details');

            const timeIcon = document.createElement('i');
            timeIcon.classList.add('bi');
            timeIcon.classList.add('bi-clock');
            time.appendChild(timeIcon);

            const timeText = document.createElement('p');
            timeText.innerHTML = secondDay[i].details.time;
            time.appendChild(timeText);

            //Then create the section about the place
            const place = document.createElement('div');
            place.classList.add('details');

            const placeIcon = document.createElement('i');
            placeIcon.classList.add('bi');
            placeIcon.classList.add('bi-geo');
            place.appendChild(placeIcon);

            const placeText = document.createElement('p');
            placeText.innerHTML = secondDay[i].details.location;
            place.appendChild(placeText);


            footer.appendChild(time);
            footer.appendChild(place);

            textContainer.appendChild(footer);

            listItemContainer.appendChild(textContainer);

        }


    }

    // Day Three
    function dayThree() {

        document.getElementById('day1').classList.remove('active');
        document.getElementById('day2').classList.remove('active');
        document.getElementById('day3').classList.add('active');
        document.getElementById('day4').classList.remove('active');

        // Find the main container and remove check if ti already has content created by other functions
        const container = document.querySelector('.items-container');
        if (container.hasChildNodes) {
            const child = Array.from(document.getElementsByClassName('containerChild'));
            child.forEach(function (element) {
                element.classList.add('fade');
                element.remove();
            })
        }

        for (let i = 0; i < thirdDay.length; i++) {


            // Create the list-item container and append to it the class 'list-item'
            const listItemContainer = document.createElement('div');
            listItemContainer.classList.add('list-item');
            listItemContainer.classList.add('containerChild');

            container.appendChild(listItemContainer);

            // Then create the image section on the left side and define its src attribute
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image');
            const imageElement = document.createElement('img');
            imageElement.src = thirdDay[i].mainImgSrc;

            imageContainer.appendChild(imageElement);
            listItemContainer.appendChild(imageContainer);

            // Now create the text section on the right side
            const textContainer = document.createElement('div');
            textContainer.classList.add('text');

            const h4 = document.createElement('h4');
            h4.innerHTML = thirdDay[i].h4;
            textContainer.appendChild(h4);

            const p = document.createElement('p');
            p.innerHTML = thirdDay[i].p;
            textContainer.appendChild(p);

            // Inside the text section create the item footer
            const footer = document.createElement('div');
            footer.classList.add('item-footer');
            const avatarGroup = document.createElement('div');
            avatarGroup.classList.add('avatar-group');

            const avatarImage = document.createElement('img');
            avatarImage.src = thirdDay[i].avatar.imgSrc;

            const textAvatar = document.createElement('div');
            textAvatar.classList.add('text-avatar');
            const speakerName = document.createTextNode(thirdDay[i].avatar.name);
            textAvatar.appendChild(speakerName);
            const speakerRole = document.createElement('p');
            speakerRole.innerHTML = thirdDay[i].avatar.role;
            textAvatar.appendChild(speakerRole);


            avatarGroup.appendChild(avatarImage);
            avatarGroup.appendChild(textAvatar);
            footer.appendChild(avatarGroup);

            // Now create the details section about the time and the location where the event will be placed
            // First create the section about the time
            const time = document.createElement('div');
            time.classList.add('details');

            const timeIcon = document.createElement('i');
            timeIcon.classList.add('bi');
            timeIcon.classList.add('bi-clock');
            time.appendChild(timeIcon);

            const timeText = document.createElement('p');
            timeText.innerHTML = thirdDay[i].details.time;
            time.appendChild(timeText);

            //Then create the section about the place
            const place = document.createElement('div');
            place.classList.add('details');

            const placeIcon = document.createElement('i');
            placeIcon.classList.add('bi');
            placeIcon.classList.add('bi-geo');
            place.appendChild(placeIcon);

            const placeText = document.createElement('p');
            placeText.innerHTML = thirdDay[i].details.location;
            place.appendChild(placeText);


            footer.appendChild(time);
            footer.appendChild(place);

            textContainer.appendChild(footer);

            listItemContainer.appendChild(textContainer);

        }


    }


    function dayFour() {

        document.getElementById('day1').classList.remove('active');
        document.getElementById('day2').classList.remove('active');
        document.getElementById('day3').classList.remove('active');
        document.getElementById('day4').classList.add('active');

        // Find the main container and remove check if ti already has content created by other functions
        const container = document.querySelector('.items-container');
        if (container.hasChildNodes) {
            const child = Array.from(document.getElementsByClassName('containerChild'));
            child.forEach(function (element) {
                element.classList.add('fade');
                element.remove();
            })
        }

        for (let i = 0; i < fourthDay.length; i++) {


            // Create the list-item container and append to it the class 'list-item'
            const listItemContainer = document.createElement('div');
            listItemContainer.classList.add('list-item');
            listItemContainer.classList.add('containerChild');

            container.appendChild(listItemContainer);

            // Then create the image section on the left side and define its src attribute
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image');
            const imageElement = document.createElement('img');
            imageElement.src = fourthDay[i].mainImgSrc;

            imageContainer.appendChild(imageElement);
            listItemContainer.appendChild(imageContainer);

            // Now create the text section on the right side
            const textContainer = document.createElement('div');
            textContainer.classList.add('text');

            const h4 = document.createElement('h4');
            h4.innerHTML = fourthDay[i].h4;
            textContainer.appendChild(h4);

            const p = document.createElement('p');
            p.innerHTML = fourthDay[i].p;
            textContainer.appendChild(p);

            // Inside the text section create the item footer
            const footer = document.createElement('div');
            footer.classList.add('item-footer');

            // Now create the details section about the time and the location where the event will be placed
            // First create the section about the time
            const time = document.createElement('div');
            time.classList.add('details');

            const timeIcon = document.createElement('i');
            timeIcon.classList.add('bi');
            timeIcon.classList.add('bi-clock');
            time.appendChild(timeIcon);

            const timeText = document.createElement('p');
            timeText.innerHTML = fourthDay[i].details.time;
            time.appendChild(timeText);

            //Then create the section about the place
            const place = document.createElement('div');
            place.classList.add('details');

            const placeIcon = document.createElement('i');
            placeIcon.classList.add('bi');
            placeIcon.classList.add('bi-geo');
            place.appendChild(placeIcon);

            const placeText = document.createElement('p');
            placeText.innerHTML = fourthDay[i].details.location;
            place.appendChild(placeText);


            footer.appendChild(time);
            footer.appendChild(place);

            textContainer.appendChild(footer);

            listItemContainer.appendChild(textContainer);

        }


    }


    document.getElementById('day1').addEventListener("click", dayOne);
    document.getElementById('day2').addEventListener("click", dayTwo);
    document.getElementById('day3').addEventListener("click", dayThree);
    document.getElementById('day4').addEventListener("click", dayFour);

    document.getElementById('day1').click();  //this button is clicked by default but his aspect doesn't change
})