// Mobile Menu

const btn = document.getElementById('mobileBtn');

const menu = document.getElementById("mobileMenu");
const x = document.getElementById('x');
const y = document.getElementById('y');

btn.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    y.classList.toggle ('hidden');
    x.classList.toggle ('hidden');
});

// End Mobile Menu



const userBtn = document.getElementById('userBtn');
const documentBtn = document.getElementById('documentBtn');
const documents = document.getElementById('documents');
const usersData = document.getElementById('usersData');

let lihat  = localStorage.getItem("lihat");

const modeUsersData = () => {
    usersData.classList.remove('hidden');
    documents.classList.add('hidden');

    userBtn.setAttribute('disabled', '');
    documentBtn.removeAttribute('disabled', '');

    userBtn.classList.toggle('text-accent');
    documentBtn.classList.toggle('text-accent');

    userBtn.classList.toggle('hover:text-accent');
    documentBtn.classList.toggle('hover:text-accent');

    localStorage.setItem("lihat", "enabled");
};

const modeDocuments = () => {
    usersData.classList.add('hidden');
    documents.classList.remove('hidden');

    userBtn.removeAttribute('disabled', '');
    documentBtn.setAttribute('disabled', '');

    userBtn.classList.toggle('text-accent');
    documentBtn.classList.toggle('text-accent' );

    userBtn.classList.toggle('hover:text-accent');
    documentBtn.classList.toggle('hover:text-accent');

    localStorage.setItem("lihat", null);
};

    if (lihat === 'enabled') {
        modeUsersData();
        };

    userBtn.addEventListener('click', () => {
        lihat = localStorage.getItem("lihat");
        if (lihat !== "enabled") {
            modeUsersData();
        } else {
            modeDocuments();
        }
    });

    documentBtn.addEventListener('click', () => {
        lihat = localStorage.getItem("lihat");
        if (lihat == "enabled") {
            modeDocuments();
        } else {
            modeUsersData();
        }
    })
