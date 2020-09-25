console.log("it works!");

//navigation


function scrollToElt(eltId) {

    var about = document.getElementById('aboutUs');
    var instructions = document.getElementById('howItWorks');
    var whyXp = document.getElementById('whyXpress');
    var contact = document.getElementById('contactUs');

    var thisEltId = eltId;
    switch (thisEltId) {
        case 'scrToAboutUs':
            about.scrollIntoView({ block: "start", behavior: "smooth" });
            break;
        case 'scrToHowItWorks':
            instructions.scrollIntoView({ block: "start", behavior: "smooth" });
            break;
        case 'scrToWhy':
            whyXp.scrollIntoView({ block: "start", behavior: "smooth" });
            break;
        case 'scrToContact':
            contact.scrollIntoView({ block: "start", behavior: "smooth" });
            break;
        default:
            break;
    }

}