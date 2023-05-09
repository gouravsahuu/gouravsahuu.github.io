let resume1 = document.getElementById("resume-link-1");
let resume2 = document.getElementById("resume-link-2");
const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

resume1.addEventListener("click",() => {
    const href = this.getAttribute('href');
    window.open(href);
})
resume2.addEventListener("click",() => {
    const href = this.getAttribute('href');
    window.open(href);
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