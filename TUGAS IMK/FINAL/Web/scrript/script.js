const text = document.querySelector('.sec-text');
const beforeText = window.getComputedStyle(text, '::before');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "PHOTO"
    }, 0);
    setTimeout(() => {
        text.textContent = "VIDEO"
    }, 2000);
    setTimeout(() => {
        text.textContent = "MOMENTS";
        text.style.setProperty('--before-animationTimingFunction', 'steps(8)');
    }, 4000);
};

textLoad();
setInterval(textLoad, 6000);