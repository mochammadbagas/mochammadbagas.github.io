let darkMode  = localStorage.getItem("darkMode");
const mode = document.getElementById("mode");


const darkModeToggle = document.getElementById("darkMode");
const darkModeMobileToggle = document.getElementById("darkModeMobile");


const dark = document.getElementById("dark");
const light = document.getElementById("light");


const darkMobile = document.getElementById("darkMobile");
const lightMobile = document.getElementById("lightMobile");

    // check if dark mode is enabled
    // if it's enabled, turn it off
    // if it's disabled, turn it on


const enableDarkMode = () => {
    // 1. add the class modeGelap to the body
    mode.classList.add("dark");

    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");

    darkMobile.classList.toggle("hidden");
    lightMobile.classList.toggle("hidden");

    // 2. update modeGelap in the localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disabledDarkMode = () => {
    // 1. add the class modeGelap to the body
    mode.classList.remove("dark");

    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");

    darkMobile.classList.toggle("hidden");
    lightMobile.classList.toggle("hidden");

    // 2. update modeGelap in the localStorage
    localStorage.setItem("darkMode", null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disabledDarkMode();
    }
});

darkModeMobileToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disabledDarkMode();
    }
});