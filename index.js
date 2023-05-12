let resume1 = document.getElementById("resume-button-1");
let resume2 = document.getElementById("resume-button-2");
const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const backToTop = document.getElementById("footerBtn");




resume1.addEventListener("click",() => {
    window.open(
        "https://drive.google.com/file/d/1EPXtSpyvLBCpQ74wA3rXR4BSPIutNWof/view?usp=share_link",
        "_blank"
      );
})
resume2.addEventListener("click",() => {
    window.open(
        "https://drive.google.com/file/d/1EPXtSpyvLBCpQ74wA3rXR4BSPIutNWof/view?usp=share_link",
        "_blank"
      );
})

home.addEventListener("click",() => {
  const element = document.getElementsByClassName("home")[0];
  element.scrollIntoView({ behavior: 'smooth' });
})
about.addEventListener("click",() => {
    const element = document.getElementsByClassName("about")[0];
    element.scrollIntoView({ behavior: 'smooth' });
})
skills.addEventListener("click",() => {
    const element = document.getElementsByClassName("skills")[0];
    element.scrollIntoView({ behavior: 'smooth' });
})
projects.addEventListener("click",() => {
    const element = document.getElementsByClassName("projects")[0];
    element.scrollIntoView({ behavior: 'smooth' });
})
contact.addEventListener("click",() => {
    const element = document.getElementsByClassName("contact")[0];
    element.scrollIntoView({ behavior: 'smooth' });
})
footerBtn.addEventListener("click",() => {
    const element = document.getElementsByClassName("home")[0];
    element.scrollIntoView({ behavior: 'smooth' });
  })

// hamburger 
const ham = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-main");

ham.addEventListener("click",() => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})

window.onscroll = () => {
    ham.classList.remove("active");
    navMenu.classList.remove("active");
}

document.querySelectorAll(".link-nav").forEach(n => n.addEventListener("click", () => {
    ham.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".home-git").forEach(n => n.addEventListener("click", () => {
    window.open("https://github.com/gouravsahuu","_blank");
}))
document.querySelectorAll(".home-linkedIn").forEach(n => n.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/gouravsahuu/","_blank");
}))