/* =======================================================
   CONTROLE DE TEMA (DARK MODE) E ALTO CONTRASTE
======================================================= */

// Carrega o tema salvo ao abrir o site
document.addEventListener("DOMContentLoaded", function () {
    const temaSalvo = localStorage.getItem("tema");
    const contrasteSalvo = localStorage.getItem("contraste");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
    }

    if (contrasteSalvo === "on") {
        document.body.classList.add("contraste");
    }
});

/* ======================
      MODO DARK
====================== */

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.removeItem("tema");
    }
}

/* ==============================
   MODO ALTO CONTRASTE
============================== */

function toggleContraste() {
    document.body.classList.toggle("contraste");

    if (document.body.classList.contains("contraste")) {
        localStorage.setItem("contraste", "on");
    } else {
        localStorage.removeItem("contraste");
    }
}
