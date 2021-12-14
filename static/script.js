
function scrollToSection(element) {
    var element = document.getElementById(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}