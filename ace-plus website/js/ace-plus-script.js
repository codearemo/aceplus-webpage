const headerScroll = document.querySelector("header");
const benefits_1_trig = Array.from(document.querySelectorAll("#benefits-view-1 #pic-details"));
const benefits_2_trig = document.querySelector("#benefits-view-2 button");
const benefits_1_view = document.querySelector("#benefits-view-1");
const benefits_2_view = document.querySelector("#benefits-view-2");

let careers_header = document.querySelector("#careers-header");
let careers_roles = document.querySelector("#careers-roles");
let careers_req = document.querySelector("#careers-req");
let careers_benefits = document.querySelector("#careers-benefits");

benefits_1_trig[0].style.backgroundImage = "url('http://www.engelmanaccountancy.com/images/productivity.jpg')";
benefits_1_trig[1].style.backgroundImage = "url('http://www.lawtechnologytoday.org/wp-content/uploads/2014/10/books-wood2-660x330.jpg')";
benefits_1_trig[2].style.backgroundImage = "url('https://appinventiv.com/articles/wp-content/uploads/2017/03/Essential-Skills-for-Becoming-a-Successful-iOS-App-Developer-800x400.jpg')";
benefits_1_trig[3].style.backgroundImage = "url('https://4.bp.blogspot.com/-Wmwpe2ZOYe4/VuLEyO1KXqI/AAAAAAAAScg/RaXt91p4vfMOWElSz55VzgDkvjpQZvScA/s1600/development-tools-for-developers.jpg')";
benefits_1_trig[4].style.backgroundImage = "url('http://mirellietc.com/wp-content/uploads/2014/06/businesswomen6.jpg')";
benefits_1_trig[5].style.backgroundImage = "url('http://www.drimlike.com/IMG/jpg/sketchbook.jpg')";


//  The slider function
setInterval(function () {
  var randonSlide = Math.floor((Math.random() * 5) + 1);
  document.querySelector("#slider").setAttribute("class", `slide${randonSlide}`);
}, 5000);

// For the header

function myScroll() {

  if (window.scrollY === 0) {
    document.querySelector("header").style.backgroundColor = "rgba(1,1,1,0.1)";
    document.querySelector('#toggleNav').style.backgroundColor = "rgba(1,1,1,0.1)";
  } else {
    document.querySelector("header").style.backgroundColor = "rgba(1,1,1,1)";
    document.querySelector('#toggleNav').style.backgroundColor = "rgba(1,1,1,1)";
  }

}

$(function () {
  $('#toggle-icon').on('click', function () {
    $('#nav-list ul').slideToggle();
  });
});

window.addEventListener('scroll', myScroll);

// To determine Scroll For Navigation colour change

window.addEventListener('scroll', function () {
  if (window.scrollY >= 0 && window.scrollY < 780) {
    document.querySelector("#home").style.color = "#428bca";
  } else {
    document.querySelector("#home").style.color = "#fff";
  }
  if (window.scrollY >= 780 && window.scrollY < 1450) {
    document.querySelector("#about").style.color = "#428bca";
  } else {
    document.querySelector("#about").style.color = "#fff";
  }
  if (window.scrollY >= 1700 && window.scrollY < 1900) {
    document.querySelector("#products-nav").style.color = "#428bca";
  } else {
    document.querySelector("#products-nav").style.color = "#fff";
  }
  if (window.scrollY >= 1900 && window.scrollY < 2540) {
    document.querySelector("#benefits").style.color = "#428bca";
  } else {
    document.querySelector("#benefits").style.color = "#fff";
  }
  if (window.scrollY >= 2540 && window.scrollY < 3090) {
    document.querySelector("#careers-nav").style.color = "#428bca";
  } else {
    document.querySelector("#careers-nav").style.color = "#fff";
  }
  if (window.scrollY >= 3090) {
    document.querySelector("#contact").style.color = "#428bca";
  } else {
    document.querySelector("#contact").style.color = "#fff";
  }
});





// For the Benefits Gallery

benefits_1_trig.forEach(val => {
  val.addEventListener('click', function () {
    benefits_1_view.classList.add("not-showing");
    benefits_2_view.classList.add("showing");

    if (benefits_1_trig.indexOf(val) === 0) {
      careers_header.innerHTML = 'Online Maketer';

      careers_roles.innerHTML = '<li>Social Media Marketing – keeping the team aware of advancements or exploring social media opportunities, monitoring of activity, question answering, content creation, trend analysing, issue resolving and community engagement; as well as keen knowledge of CRM software.</li>' +
        '<li>Search Engine Optimisation (SEO): developing strategies to increase number of visitors to a website by getting high-ranking placements in search results as well as improve natural search rankings. Web traffic and source analytics monitoring and reporting against key performance indicators</li>' +
        '<li>Ongoing competitive reporting to include competitor on-site, advertising and email activity.</li>' +
        '<li>Email Marketing – create all ad track links as needed for email analysis and sell thru tracking.</li>' +
        '<li>Set-up and track all offer codes used in-conjunction with emails and online offers. Ensure accurate data to manage such offers and track for usage rates.</li>' +
        '<li>Maintain a log of all marketing activity results (search, newsletters and online ad campaigns, partner programs) including top line performance stats on each.</li>';

      careers_req.innerHTML = '<li>Good knowledge of Internet and Search Engine use, as well as Social Media.</li>' +
        '<li>Search engine marketing, organic marketing, PPC marketing, or training in marketing, advertising or communications.</li>' +
        '<li>Search engine marketing, organic marketing, PPC marketing, or training in marketing, advertising or communications</li>' +
        '<li>Strong organizational, time-management and communication skills; and great attention to detail</li>' +
        '<li>Ability to juggle multiple projects while meeting demanding deadlines, producing high quality work and projecting a positive attitude</li>' +
        '<li>Flexible, proactive & creative problem solving skills.</li>' +
        '<li>Strong sense of self-motivation and ability to learn and get results as an individual and part of a team</li>' +
        '<li>Should be either a current B.Sc, OND, HND student; or recent graduate with some working experience of the stated role Time commitment of 10 to 20 hours per week.</li>';

      careers_benefits.innerHTML =
        '<li>A collaborative environment that pushes you to think beyond your boundaries</li>' +
        '<li>A diverse workload, keeping you continually stimulated</li>' +
        '<li>An open forum for expression of ideas</li>' +
        '<li>Diverse opportunities to expand your skills, learn newer skills and make you ready for the job market</li>' +
        '<li>Flexible working hours</li>';

    } else if (benefits_1_trig.indexOf(val) === 1) {
      careers_header.innerHTML = 'Content & Copyright';

      careers_roles.innerHTML = '<li>Research, write and edit copy for marketing communications including but not limited to print and online articles, newsletters, videos, webinars, infographics, white papers, case studies, blog posts, Web site content and more.</li>' +
        '<li>Draft landing page copy as well as supporting email and social copy to drive demand for content initiatives.</li>' +
        '<li>Collaborate with design, digital, search and other teams to develop compelling, often unexpected, content plans.</li>' +
        '<li>Interview subject matter experts on a variety of topics and translate that information into captivating and concrete storytelling.</li>' +
        '<li>Think strategically and participate in creative concepting in a wide range of media, beyond the “what is” into the realm of “what can be”.</li>' +
        '<li>Establish strong relationships across departments and an understanding of client needs, the consumer experience, marketing strategy and operational capabilities.</li>';

      careers_req.innerHTML = '<li>Strong English, writing, and research skills; as well as good understanding of the B2B market</li>' +
        '<li>Proficient in Microsoft Word, Microsoft PowerPoint and Adobe Acrobat</li>' +
        '<li>Strong organizational, time-management and communication skills; and great attention to detail</li>' +
        '<li>Ability to juggle multiple projects while meeting demanding deadlines, producing high quality work and projecting a positive attitude</li>' +
        '<li>Flexible, proactive & creative problem solving skills.</li>' +
        '<li>Strong sense of self-motivation and ability to learn and get results as an individual and part of a team</li>' +
        '<li>Should be either a current B.Sc, OND, HND student; or recent graduate with some working experience of the stated role Time commitment of 10 to 20 hours per week.</li>';

      careers_benefits.innerHTML = '<li>A collaborative environment that pushes you to think beyond your boundaries</li>' +
        '<li>A diverse workload, keeping you continually stimulated</li>' +
        '<li>An open forum for expression of ideas</li>' +
        '<li>Diverse opportunities to expand your skills, learn newer skills and make you ready for the job market</li>' +
        '<li>Flexible working hours</li>';

    } else if (benefits_1_trig.indexOf(val) === 2) {
      careers_header.innerHTML = 'Product Developer';

      careers_roles.innerHTML = ' <li>Work under the supervision of Project Manager to coordinate and execute product development activities.</li> ' +
        '<li>Complete the product development projects within allotted budgets and timelines.</li>' +
        '<li>Ensure that final products meet customer requirements.</li>' +
        '<li>Develop process improvements to ensure product quality and productivity.</li>' +
        '<li>Make product updates based on changing business demands.</li>' +
        '<li>Maintain product requirements, technical and functional documentations for reference purposes.</li>' +
        '<li>Analyze and troubleshoot product issues in a timely fashion.</li>' +
        '<li>Follow best practices to ensure smooth and continuous product development operations.</li>';

      careers_req.innerHTML = '<li>Commercial awareness and good understanding of the B2B market.</li>' +
        '<li>Strong research skills and ability to think out of the box</li>' +
        '<li>Strong organizational, time-management and communication skills and great attention to detail</li>' +
        '<li>Ability to juggle multiple projects while meeting demanding deadlines, producing high quality work and projecting a positive attitude</li>' +
        '<li>Flexible, proactive & creative problem solving skills.</li>' +
        '<li>Strong sense of self-motivation and ability to learn and get results as an individual and part of a team</li>' +
        '<li>Should be either a current B.Sc, OND, HND student; or recent graduate with some working experience of the stated role Time commitment of 10 to 20 hours per week.</li>';

      careers_benefits.innerHTML = ' <li> A collaborative environment that pushes you to think beyond your boundaries </li> ' +
        '<li> A diverse workload, keeping you continually stimulated </li>' +
        '<li> An open forum for expression of ideas </li>' +
        '<li> Diverse opportunities to expand your skills, learn newer skills and make you ready for the job market </li>' +
        '<li> Flexible working hours </li>';

    }

    if (benefits_1_trig.indexOf(val) === 3) {
      careers_header.innerHTML = 'Web Developer';

      careers_roles.innerHTML = '<li>Understanding of UI, cross-browser compatibility, general web functions and standards.</li>' +
        '<li>The position requires constant communication with colleagues.</li>' +
        '<li>Experience or knowledge of planning and delivering software platforms used across multiple products and organizational units.</li>' +
        '<li>Hands on experience with Web Applications and programming languages such as HTML, CSS, JavaScript, JQuery and API’s.</li>' +
        '<li>Functional knowledge or hands on design experience with Web Services (REST, SOAP, etc ..).</li>' +
        '<li>Strong grasp of security principles and how they apply to web applications.</li>' +
        '<li>Designing graphics, animations and manipulating digital photographs; working with different content management systems; and search engine optimisation</li>' +
        '<li>Editing content, debugging code and re-designing web pages; proofreading content and grammar and making changes where necessary</li>' +
        '<li>Working with other web specialists including web developers and graphic designers</li>';

      careers_req.innerHTML = '<li>Knowledge of web applications and programming languages, as well as design software.</li>' +
        '<li>Exceptional creativity and innovation</li>' +
        '<li>work and projecting a positive attitude</li>' +
        '<li>Strong organizational, time-management and communication skills; and great attention to detail</li>' +
        '<li>Ability to juggle multiple projects while meeting demanding deadlines, producing high quality work and projecting a positive attitude</li>' +
        '<li>Flexible, proactive & creative problem solving skills.</li>' +
        '<li>Strong sense of self-motivation and ability to learn and get results as an individual and part of a team</li>' +
        '<li>Should be either a current B.Sc, OND, HND student; or recent graduate with some working experience of the stated role Time commitment of 10 to 20 hours per week.</li>' +
        '<li>Time commitment of 10 to 20 hours per week.</li>';

      careers_benefits.innerHTML = '<li>A collaborative environment that pushes you to think beyond your boundaries</li>' +
        '<li>A diverse workload, keeping you continually stimulated</li>' +
        '<li>An open forum for expression of ideas</li>' +
        '<li>Diverse opportunities to expand your skills, learn newer skills and make you ready for the job market</li>' +
        '<li>Flexible working hours</li>';

    }

    if (benefits_1_trig.indexOf(val) === 4) {
      careers_header.innerHTML = 'Customer Service Executive';

      careers_roles.innerHTML = '<li>Providing help and advice to customers using your organisation’s products or services</li>' +
        '<li>Communicating courteously with customers by telephone, email, letter and face to face</li>' +
        '<li>Investigating and handling customers’ problems and complaints, which may be complex or long- standing problems that have been passed on by customer service assistants</li>' +
        '<li>Keeping accurate records of discussions or correspondence with customers</li>' +
        '<li>Analysing statistics or other data to determine the level of customer service being provided and writing reports to that effect</li>' +
        '<li>Developing feedback or complaints procedures for customers to use</li>' +
        '<li>Meeting with other units to discuss possible improvements to customer service</li>' +
        '<li>Learning about the organisation’s products and keeping up to date with changes; as well as keeping ahead of developments in customer service by reading relevant journals, going to meetings and attending courses.</li>';

      careers_req.innerHTML = '<li>Experience or good knowledge of using CRM software</li>' +
        '<li>Strong English, writing, and research skills; as well as good understanding of the B2B market</li>' +
        '<li>Strong organizational, time-management and communication skills; and great attention to detail</li>' +
        '<li>Ability to juggle multiple projects while meeting demanding deadlines, producing high quality work and projecting a positive attitude</li>' +
        '<li>Flexible, proactive & creative problem solving skills.</li>' +
        '<li>Strong sense of self-motivation and ability to learn and get results as an individual and part of a team</li>' +
        '<li>Should be either a current B.Sc, OND, HND student; or recent graduate with some working experience of the stated role Time commitment of 10 to 20 hours per week.</li>' +
        '<li>Time commitment of 10 to 20 hours per week.</li>';

      careers_benefits.innerHTML = '<li>A collaborative environment that pushes you to think beyond your boundaries</li>' +
        '<li>A diverse workload, keeping you continually stimulated</li>' +
        '<li>An open forum for expression of ideas</li>' +
        '<li>Diverse opportunities to expand your skills, learn newer skills and make you ready for the job market</li>' +
        '<li>Flexible working hours</li>';

    }

    if (benefits_1_trig.indexOf(val) === 5) {
      careers_header.innerHTML = 'Graphics Designer';

      careers_roles.innerHTML = '<li>Interpreting the business needs and developing a concept to suit purpose; as well as estimating the time required to complete work, and providing quotes where applicable</li>' +
        '<li>Developing design briefs by gathering information and data through research</li>' +
        '<li>Thinking creatively to produce new ideas and concepts;</li>' +
        '<li>Using innovation to redefine a design brief within the constraints of cost and time</li>' +
        '<li>Presenting finalised ideas and concepts to clients or account managers</li>' +
        '<li>Working with a wide range of media, including photography and computer-aided design (cad)</li>' +
        '<li>Proofreading to produce accurate and high-quality work; and contributing ideas and design artwork to the overall brief</li>' +
        '<li>Demonstrating illustrative skills with rough sketches; and working on layouts and art working pages ready for print</li>' +
        '<li>Keeping abreast of emerging technologies in new media, particularly design programs such as indesign, quarkxpress, freehand, illustrator, photoshop, 3ds max, acrobat, director, dreamweaver and flash</li>' +
        '<li>Working as part of a team including copywriters, web developers, marketing specialists and other designers</li>';

      careers_req.innerHTML = '<li>Excellent research and IT skills, especially with design and photo-editing software</li>' +
        '<li>Exceptional creativity and innovation</li>' +
        '<li>Strong organizational, time-management and communication skills; and great attention to detail</li>' +
        '<li>Ability to juggle multiple projects while meeting demanding deadlines, producing high quality work and projecting a positive attitude</li>' +
        '<li>Flexible, proactive & creative problem solving skills.</li>' +
        '<li>Strong sense of self-motivation and ability to learn and get results as an individual and part of a team</li>' +
        '<li>Should be either a current B.Sc, OND, HND student; or recent graduate with some working experience of the stated role Time commitment of 10 to 20 hours per week.</li>';

      careers_benefits.innerHTML = '<li>A collaborative environment that pushes you to think beyond your boundaries</li>' +
        '<li>A diverse workload, keeping you continually stimulated</li>' +
        '<li>An open forum for expression of ideas</li>' +
        '<li>Diverse opportunities to expand your skills, learn newer skills and make you ready for the job market</li>' +
        '<li > Flexible working hours < /li>';

    }
  })
});


benefits_2_trig.addEventListener('click', function () {
  benefits_1_view.classList.remove("not-showing");
  benefits_2_view.classList.remove("showing");

});
