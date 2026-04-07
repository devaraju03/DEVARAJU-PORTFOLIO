const text = "Aspiring Software Developer | Web Developer";
let i = 0;

function typing() {
    const element = document.getElementById("typing");

    if (!element) return;

    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    } else {
        // Wait 5 seconds, then restart
        setTimeout(() => {
            element.innerHTML = "";
            i = 0;
            typing();
        }, 5000);
    }
}

window.addEventListener("load", () => {
    typing();

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});