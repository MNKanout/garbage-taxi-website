
function scrollToSection(element) {
    var element = document.getElementById(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}

function NavToggle(x) {
    x.classList.toggle("change");
  }