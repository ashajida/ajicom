let burgerBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.nav-links');
let modal = document.querySelector('.modal-bg');
let modalCloseBtn = document.querySelector('.modal .close-modal')
let projectsDiv = document.querySelector('.projects');

burgerBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
})


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
  const modalText = document.querySelector('.modal-text');
  const title = document.querySelector('.modal .main-text .title');
  const table = document.querySelector('.table-wrapper');


  if (value === 'education') {
    modalText.innerText = `Education accessibility remains a challenge in Africa particularly Zimbabwe where over 60% of the population is domiciled in the remote rural areas and education infrastructure is limited.
        This will ride on the telecommunications above alluded to above.
        E-Learning is learning utilizing electronic technologies to access educational curriculum outside of a traditional classroom. E learning has gone beyond expectations that advanced courses, programs, degrees and even examinations are being delivered online. In most cases, it refers to a course, program or degree delivered completely online. AJIGOM WIRELESS VSAT Network allows rapid low cost but reliable network reconfiguration and expansion that has the artificial intelligence to meet new and any future unexpected business requirements. Yet its cost effective transmission and network operations are made possible by use of the satellite frequency times division multiple access techniques. Distance learning using AJIGOM WIRELESS VSAT is an innovation that allows educational content to be transmitted from area to area providing students in remote areas to get education of national, regional or international level without limitations of distance or geographical boundaries hence the need of VSAT high speed in order to receive maximum quality real time audio or video content with efficiency. 
        AJIGOM WIRELESS is going to be providing the platform and communication data network used to deliver online via the internet ranging from Distance Education to computerize electronic learning online learning internet learning and many others.
        `;
    title.innerText = 'AJICOM Elearning Wireless Project';

    table.innerHTML = `<table>
        <tr>
          <th>Project Status</th>
          <th>Implementation Stage</th>
        </tr>
        <tr>
          <td>Progress Check</td>
          <td>
            <ul>
              <li>Documentation Signed</li>
              <li>Key resources in place</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Outstanding Issues</td>
          <td></td>
        </tr>
        <tr>
          <td>Expected Implementation Date</td>
          <td>30 June 2019</td>
        </tr>
      </table>`
  }

  if (value === 'technology') {
    modalText.innerText = `
        Zimbabwe has three mobile network operators being ECONET Zimbabwe which controls +80% of the market and Telecel and Netone which are government owned and have been targeted for privatization in the next 2 years.

        AJIGOM WIRELESS is a virtual network operator (VNO) or mobile virtual network operator (MVNO) provider as well as managing the services and a reseller of network services from other telecommunications suppliers that does not own the telecommunication infrastructure. Our bandwidth comes from the most advanced earth station telecom providers that is linked in orbit. AJIGOM WIRELESS VSAT very small aperture terminal is a two way satellite ground station with a dish antenna that is located at the company premises in Harare, Zimbabwe. The subsidiary is managed by qualified staff in the areas of communication at international level both in retail and commercial applications. AJIGOM WIRELESS VSAT bandwidth is leased from large telecom providers with access to satellites in geosynchronous orbit or geostationary orbit to relay data from small remote earth stations to other terminals or master earth station “hubs”. AJIGOM WIRELESS VSAT will also be able to transmit narrowband data
         for POS machines transacting when purchasing using bank cards.
        `;

    title.innerText = 'Telecommunication Project';

    table.innerHTML = `<table>
        <tr>
          <th>Project Status</th>
          <th>Implementation Stage</th>
        </tr>
        <tr>
          <td>Progress Check</td>
          <td>
            <ul>
              <li>Documentation Signed</li>
              <li>Key resources in place</li>
              <li>Licence application in progress</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Outstanding Issues</td>
          <td></td>
        </tr>
        <tr>
          <td>Expected Implementation Date</td>
          <td>30 June 2019</td>
        </tr>
      </table>`
  }
};

function modalClose() {
  modal.classList.remove('modal-active');
};


const teamDiv = document.querySelector('.our-team');

teamDiv.addEventListener('click', (e) => {
  if (e.target.className === 'image') {
    teamModalOpen(e);
  }
});

const teamModal = document.querySelector('.team-modal-bg');

function teamModalOpen(e) {
  teamModal.classList.add('modal-active');

  const value = e.target.attributes.data.value;
  const name = document.querySelector('.name');
  const qualification = document.querySelector('.qualification');
  const info = document.querySelector('.info');
  const imgSrc = document.querySelector('.modal-img');

  if (value === 'Isac Manyeu') {
    name.innerText = 'Isac Manyeu';
    imgSrc.src = './assets/images/team-9.png';
    qualification.innerText = 'BCompt. Honours in Management Accounting; BCompt. in Accounting  Sciences; HDipAcc;Dip. Accounting in Business & Management; Dip. Banking & Finance; Dip. Business English; BA. Islamic Law';
    info.innerText = 'A skilled and talented financial manager with over six years of experience adept at increasing work process efficiency and profitability through functional and technical analysis mainly in the South African market. Proficient in managing financial and accounting operations with oversight for financial reporting, account records and accounting controls. A visionary Change Agent who builds and leads motivated teams to drive organizational success within diverse industries and sectors across international and emerging markets and in face of challenging economic conditions. Fluent in English, well versed in Arabic and isiZulu. Isaac has been the Finance Director of the company.'
  }

  if (value === 'Herbert Tayengwa') {
    name.innerText = 'Herbert Tayengwa';
    imgSrc.src = './assets/images/team-4.png';
    qualification.innerText = 'Master in Sustainable farming (Cranfield University) BSc (Hons) in Land Management and Agriculture (University of Northampton';
    info.innerText = 'Expert in precision farming to optimise field level management with regard to: crop science-by matching farming practices more closely to crop needs (eg) fertilizer inputs. Environmental protection: by reducing environmental risks and footprint of farming (eg) limiting leaching.  of nitrogen. Economics by boosting competitiveness through more efficient practices (eg) management of fertilizer usage and other inputs. Precision agriculture also provide farmers with wealth of information. Improve decision-making: foster greater traceability enhance marketing of farm products. Improve lease arrangements and relationship with landlords enhance the inherent quality of farm product (eg) protein level of bread flour wheat.'
  }

  if (value === 'Bruce Charamba') {
    name.innerText = 'Bruce Charamba';
    imgSrc.src = './assets/images/team-8.png';
    qualification.innerText = '';
    info.innerText = 'A highly skilled artisan and a go getter with an excellent reference and solid exposure to infrastructure, agriculture and mining development in Zimbabwe. A role a model farming multiple award winner in crop variety Bruce is a member to various organizations in Zimbabwe were he shares his skills and empowerment. Bruce has more than 20 years hands on experience of Zimbabwe and Southern Africa landscape, industrial  and current affairs. Bruce  runs the infrastructure portfolio of Ajicom.';
  }

  if (value === 'Simba Zoromedza') {
    name.innerText = 'Simba Zoromedza';
    imgSrc.src = './assets/images/team-7.png';
    qualification.innerText = 'MSc. In Finance & Investment; BCom Finance';
    info.innerText = 'A passionate risk manager with extensive experience in developing and implementing successful risk management policies in the Zimbabwean market with a keen interest in big data and data analytics. Proficient in planning, organizing, directing and leading of the business unit. A Change Agent with excellent communication skills with a can-do approach to problem solving and resolution. Extremely meticulous with an eye for detail and positive outlook in often complex environment. Simba has been tasked with project risk management and valuation.';
  }


  if (value === 'Ayidi Ajida') {
    name.innerText = 'Ayidi Ajida';
    imgSrc.src = './assets/images/team-1.jpg';
    qualification.innerText = '';
    info.innerText = 'A highly skilled marketer and a go getter with solid exposure to infrastructure development in South Africa having spent more than 8 years as an operations manager of Inter-Afrika Limited which specializes in industrial and mining infrastructure development. Iyidi runs the marketing portfolio of the company.';
  }

  if (value === 'Felix Chataika') {
    name.innerText = 'Felix Chataika';
    imgSrc.src = './assets/images/team-6.png';
    qualification.innerText = 'BSc. in Telecommunications Hons Degree';
    info.innerText = ' A hands on university level educated professional who is passionate about what he can do, proud of what he can deliver and prepared to go the extra mile to make a difference. He is a self-starter and a quick leaner who is willing to the initiative and has the ability to work in a high dynamic, fast paced demanding and deadline driven environment. Felix is multi task and excellent communicator who  collaborates with team members and consults with third party groups to achieve goals. Felix focuses on research and telecommunication portfolio of the company.';
  }


  if (value === 'Lloyd Bondia') {
    name.innerText = 'Lloyd Bondia';
    imgSrc.src = './assets/images/team-3.jpg';
    qualification.innerText = 'Mastery in Money, Banking and Financial Systems';
    info.innerText = 'A well-presented, industrious and highly personable individual who has extensive in-depth experience of the entire banking industry with great exposure to the UK financial sector. Adept at utilizing a variety of computer software platforms to manage accounts and maintain service notes. He Innovates business solutions to a wide range of challenging issues which results in the development of profitable relationships and maintains a growing library of information on current banking products and tracks the trends that will lead to new offerings. Lloyd has been tasked to lead the research and innovation portfolio as well as software engineering portfolio.';
  }

  if (value === 'Benson Musah Msuweje') {
    name.innerText = 'Benson Musah Msuweje';
    imgSrc.src = './assets/images/team-5.png';
    qualification.innerText = '';
    info.innerText = `An advocate of Industry 4.0 (I4), a Six Sigma candidate with successful implementation of automated  workflows in Aerospace and Fleet operations under his belt. He has over 10yrs of Applied Satellite Communication skillset in Maritime, Land, Air and Sea operations, with traceable records of Telemetry, M2M, SCADA applications and over 6yrs of IIoT solutions throughout EMEA & APAC region. Musah is driven by solving today and tomorrow's  challenges with keen focus on greater results.`;
  }





};

const teamModalClose = document.querySelector('.team-modal .close-modal');
teamModalClose.addEventListener('click', teamModalCloseBtn);

function teamModalCloseBtn(e) {
  teamModal.classList.remove('modal-active');
};