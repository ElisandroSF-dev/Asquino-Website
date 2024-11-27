// NAVEGAÇÃO
const cordas = document.getElementById("cordas");
const cordasNav = document.getElementById("cordasNav");
const percussao = document.getElementById("percussao");
const percussaoNav = document.getElementById("percussaoNav");
const sopro = document.getElementById("sopro");
const soproNav = document.getElementById("soproNav");
const vocal = document.getElementById("vocal");
const vocalNav = document.getElementById("vocalNav");
const teclas = document.getElementById("teclas");
const teclasNav = document.getElementById("teclasNav");
const emGrupo = document.getElementById("emGrupo");
const emGrupoNav = document.getElementById("emGrupoNav");

cordas.addEventListener("click", () => {
    cordasNav.style.display = "flex";
    percussaoNav.style.display = "none";
    soproNav.style.display = "none";
    vocalNav.style.display = "none";
    teclasNav.style.display = "none";
    emGrupoNav.style.display = "none";
});
percussao.addEventListener("click", () => {
    cordasNav.style.display = "none";
    percussaoNav.style.display = "flex";
    soproNav.style.display = "none";
    vocalNav.style.display = "none";
    teclasNav.style.display = "none";
    emGrupoNav.style.display = "none";
});
sopro.addEventListener("click", () => {
    cordasNav.style.display = "none";
    percussaoNav.style.display = "none";
    soproNav.style.display = "flex";
    vocalNav.style.display = "none";
    teclasNav.style.display = "none";
    emGrupoNav.style.display = "none";
});
vocal.addEventListener("click", () => {
    cordasNav.style.display = "none";
    percussaoNav.style.display = "none";
    soproNav.style.display = "none";
    vocalNav.style.display = "flex";
    teclasNav.style.display = "none";
    emGrupoNav.style.display = "none";
});
teclas.addEventListener("click", () => {
    cordasNav.style.display = "none";
    percussaoNav.style.display = "none";
    soproNav.style.display = "none";
    vocalNav.style.display = "none";
    teclasNav.style.display = "flex";
    emGrupoNav.style.display = "none";
});
emGrupo.addEventListener("click", () => {
    cordasNav.style.display = "none";
    percussaoNav.style.display = "none";
    soproNav.style.display = "none";
    vocalNav.style.display = "none";
    teclasNav.style.display = "none";
    emGrupoNav.style.display = "flex";
});

// CONTEÚDO
const topic1 = document.getElementById("topic1");
const content1 = document.getElementById("content1");
const topic2 = document.getElementById("topic2");
const content2 = document.getElementById("content2");
const topic3 = document.getElementById("topic3");
const content3 = document.getElementById("content3");
const topic4 = document.getElementById("topic4");
const content4 = document.getElementById("content4");

topic1.addEventListener("click", () => {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
});

topic2.addEventListener("click", () => {
    content1.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
    content4.style.display = "none";
});

topic3.addEventListener("click", () => {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
    content4.style.display = "none";
});

topic4.addEventListener("click", () => {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";
});