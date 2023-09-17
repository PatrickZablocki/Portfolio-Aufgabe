const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Devoloper";
    },4000);
    setTimeout(() => {
        text.textContent = "Web Devoloper";
    },8000);
}
textLoad();
setInterval(textLoad,12000);
loop:true;

const About = document.querySelectorAll(".About");

About.forEach((About) => {
    About.addEventListener("click", () => {
        About.classList.toggle("active");
    });
});