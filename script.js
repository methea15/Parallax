window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelector(".star-layer").style.transform = `translateY(${-scrollY * 0.1}px)`;
    document.querySelector(".nebula-layer").style.transform = `translateX(${scrollY * 0.1}px)`;
    document.querySelector(".comet-layer").style.transform = `translateX(${scrollY * 0.2}px) translateY(${scrollY * 0.5}px)`;
    document.querySelector(".meteorite-layer").style.transform = `translateX(${-scrollY * 0.3}px) translateY(${-scrollY * 0.05}px)`;
});

const links = document.getElementById('main');
const button = document.getElementById('toggle');

function hide() {
    if (links.style.display === 'none' || !links.style.display) {
        links.style.display = 'flex';
        button.textContent = '▲';
    } else {
        links.style.display = 'none';
        button.textContent = '▼';
    }
};
button.addEventListener('click', hide);
document.querySelectorAll('#main a').forEach(link => {
    link.addEventListener('click', () => {
        links.style.display = 'none';
        button.textContent = '▼';
    })
})


