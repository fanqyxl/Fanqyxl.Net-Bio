// SCRIPT SKIDDED FROM FROGGIE!!!

// errr
const textElement = document.getElementById("text");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("audio-player");

// lyrics timing and stuff
const phrases = [
    "",
    "I've",
    "I've been,",
    "I've been, having",
    "I've been, having trouble",
    "I've been, having trouble sleeping..."
];

// these are in seconds btw
const delays = [1.66, 0.25, 0.8, 0.8, 0.6, 0.6];

overlay.addEventListener("click", () => {
    textElement.textContent = "";
    audio.play();
});

// main animation fade in
audio.addEventListener("play", () => {
    let i = 0;
    overlay.style.opacity = "1";
    
    function updateText() {
        if (i < phrases.length) {
            textElement.textContent = phrases[i];
            setTimeout(updateText, delays[i] * 1000);
            i++;
        } else {
            setTimeout(() => {
                overlay.style.transition = "opacity 1s ease";
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 1000);
            }, 300);
        }
    }
    updateText();
});
