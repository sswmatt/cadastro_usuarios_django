document.addEventListener("DOMContentLoaded", function () {
    const tema = localStorage.getItem("tema");
    const contraste = localStorage.getItem("contraste");

    if (tema === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (contraste === "on") {
        document.body.classList.add("contraste");
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.removeItem("tema");
    }
}

function toggleContraste() {
    document.body.classList.toggle("contraste");

    if (document.body.classList.contains("contraste")) {
        localStorage.setItem("contraste", "on");
    } else {
        localStorage.removeItem("contraste");
    }
}
