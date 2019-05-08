let burgerBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.nav-links');
let modal = document.querySelector('.modal-bg');
let modalCloseBtn = document.querySelector('.close-modal')
let projectsDiv = document.querySelector('.projects');

burgerBtn.addEventListener('click', function () {
    menu.classList.toggle('open');
})


// Add smooth scrolling to all links
$("header a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    } // End if
});

$(".services a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    } // End if
});

$("#about-us a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    } // End if
});

$(".footer-links a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    } // End if
});

// Model


projectsDiv.addEventListener('click', (e) => {
    if (e.target.className === 'btn btn-modal') {
        e.preventDefault();
        modalOpen(e);
    }
});

modalCloseBtn.addEventListener('click', modalClose);

function modalOpen(e) {
    modal.classList.add('modal-active');

    const value = e.target.attributes.data.value;
    const mainText = document.querySelector('.modal .main-text p');


    if (value === 'education') {
        mainText.innerText = `
            Education accessibility remains a challenge in Africa particularly Zimbabwe where over 60% of the population is domiciled in the remote rural areas and education infrastructure is limited.

            This will ride on the telecommunications above alluded to above. E-Learning is learning utilizing electronic technologies to access educational curriculum outside of a traditional classroom. E learning has gone beyond expectations that advanced courses, programs, degrees and even examinations are being delivered online. In most cases, it refers to a course, program or degree delivered completely online. AJIGOM WIRELESS VSAT Network allows rapid low cost but reliable network reconfiguration and expansion that has the artificial intelligence to meet new and any future unexpected business requirements. Yet its cost effective transmission and network operations are made possible by use of the satellite frequency times division multiple access techniques. Distance learning using AJIGOM WIRELESS VSAT is an innovation that allows educational content to be transmitted from area to area providing students in remote areas to get education of national, regional or international level without limitations of distance or geographical boundaries hence the need of VSAT high speed in order to receive maximum quality real time audio or video content with efficiency. AJIGOM WIRELESS is going to be providing the platform and communication data network used to deliver online via the internet ranging from Distance Education to computerize electronic learning online learning internet learning and many others. 
        `;
    }

    if (value === 'technology') {
        mainText.innerText = `
        Zimbabwe has three mobile network operators being ECONET Zimbabwe which controls +80% of the market and Telecel and Netone which are government owned and have been targeted for privatization in the next 2 years.

        AJIGOM WIRELESS is a virtual network operator (VNO) or mobile virtual network operator (MVNO) provider as well as managing the services and a reseller of network services from other telecommunications suppliers that does not own the telecommunication infrastructure. Our bandwidth comes from the most advanced earth station telecom providers that is linked in orbit. AJIGOM WIRELESS VSAT very small aperture terminal is a two way satellite ground station with a dish antenna that is located at the company premises in Harare, Zimbabwe. The subsidiary is managed by qualified staff in the areas of communication at international level both in retail and commercial applications. AJIGOM WIRELESS VSAT bandwidth is leased from large telecom providers with access to satellites in geosynchronous orbit or geostationary orbit to relay data from small remote earth stations to other terminals or master earth station “hubs”. AJIGOM WIRELESS VSAT will also be able to transmit narrowband data
         for POS machines transacting when purchasing using bank cards.
        `;
    }
};

function modalClose(e) {
    modal.classList.remove('modal-active');
};
