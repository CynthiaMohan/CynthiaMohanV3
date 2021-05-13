const about = document.querySelector('#aboutMe');
const work = document.querySelector('#work');
const linkAboutMe = document.querySelector('#linkAboutMe');
const linkWork = document.querySelector('#linkWork');


linkAboutMe.addEventListener('click', () => {
    if (about) {
        work.classList.add("hidden");
        about.classList.remove("hidden");
    }
});
linkWork.addEventListener('click', () => {
    if (work) {
        about.classList.add("hidden");
        work.classList.remove("hidden");
    }
});

const mediaQuery = window.matchMedia('(min-width: 411px)');
if (mediaQuery.matches) {
    about.classList.remove("hidden");
    work.classList.remove("hidden");
}
