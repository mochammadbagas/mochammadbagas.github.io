// ======================================================================================
// == Dark Mode Toggle                                                                 ==
// ======================================================================================

    const darkMode = document.getElementById('darkMode');
    const mode = document.getElementById('mode');
    const toggle1 = document.getElementById('toggle1');
    const toggle2 = document.getElementById('toggle2');
    
        toggle1.onclick = () => selectTheme('dark');
        toggle2.onclick = () => selectTheme('light');

    const selectTheme = (value) => {
        localStorage.setItem ('theme', value);
        mode.classList.add(localStorage.getItem('theme'));
        if (value == "dark") {
            mode.classList.remove('light');
        } else {
            mode.classList.remove('dark');
        };
    };

    document.getElementById('mode').classList.add(localStorage.getItem('theme'));

    darkMode.addEventListener('click', function() {
        toggle1.classList.toggle ('hidden');
        toggle2.classList.toggle ('hidden');
    });

// ======================================================================================
// == End Dark Mode Toggle                                                             ==
// ======================================================================================


// ======================================================================================
// == Dark Mode Toggle Menu Mobile                                                     ==
// ======================================================================================

    const darkModeMobile = document.getElementById('darkModeMobile');
    const toggleMobile1 = document.getElementById('toggleMobile1');
    const toggleMobile2 = document.getElementById('toggleMobile2');

        toggleMobile1.onclick = () => selectTheme('dark');
        toggleMobile2.onclick = () => selectTheme('light');

    darkModeMobile.addEventListener('click', function() {
        toggleMobile1.classList.toggle ('hidden');
        toggleMobile2.classList.toggle ('hidden');
    });

// ======================================================================================
// == End Dark Mode Toggle Menu Mobile                                                 ==
// ======================================================================================


// ======================================================================================
// == Mobile Menu                                                                      ==
// ======================================================================================

const btn = document.getElementById('mobileBtn');
const menu = document.getElementById("mobileMenu");
const x = document.getElementById('x');
const y = document.getElementById('y');

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    y.classList.toggle ('hidden');
    x.classList.toggle ('hidden');
});

// ======================================================================================
// == End Mobile Menu                                                                  ==
// ======================================================================================