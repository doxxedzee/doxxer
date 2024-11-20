const audio = document.getElementById("myAudio");
const audioControl = document.getElementById("audio-control");
const overlay = document.getElementById("overlay");
const card = document.querySelector(".card");
const viewCountElem = document.getElementById("view-count");

audio.volume = 0;

audioControl.addEventListener("click", () => {
    if (audio.paused) {
        audio.muted = false;
        audio.play();
        audioControl.innerHTML = `<svg fill='#d8d8d8' width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m2 7.5v3c0 .8.6 1.5 1.4 1.5h2.3l3.2 2.8c.1.1.3.2.4.2s.2 0 .3-.1c.2-.1.4-.4.4-.7v-.9l-7.2-7.2c-.5.2-.8.8-.8 1.4zm8 2v-5.8c0-.3-.1-.5-.4-.7-.1 0-.2 0-.3 0s-.3 0-.4.2l-2.8 2.5-4.1-4.1-1 1 3.4 3.4 5.6 5.6 3.6 3.6 1-1z" fill-rule="evenodd"/></svg>`;
    } else {
        audio.pause();
        audioControl.innerHTML = `<svg width="18px" height="18px" viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#d8d8d8"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#1000]"></path></g></g></g></svg>`;
    }
});

overlay.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
    overlay.style.display = "none";
    card.classList.add("show");
    incrementViewCount();
});

function setVolume(level) {
    if (level >= 0 && level <= 1) {
        audio.volume = level;
    } else {
        console.error("Volume level must be between 0 and 1");
    }
}

setVolume(0.5);

function incrementViewCount() {
    let currentCount = parseInt(viewCountElem.textContent.split(' ')[0]);
    viewCountElem.textContent = `${currentCount + 1} Views`;
}