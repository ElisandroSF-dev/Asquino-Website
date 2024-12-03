function toggleColapse_aula() {
    const conteudo1 = document.getElementById('conteudo1');
    const style1 = document.getElementById('btnColapse1');
    const icon1 = document.getElementById('icon1');

    const conteudo2 = document.getElementById('conteudo2');
    const style2 = document.getElementById('btnColapse2');
    const icon2 = document.getElementById('icon2');

    const conteudo3 = document.getElementById('conteudo3');
    const style3 = document.getElementById('btnColapse3');
    const icon3 = document.getElementById('icon3');

    if (conteudo1.style.display === 'none' || conteudo1.style.display === ''){
        conteudo1.style.display = 'block';
        style1.style.background = 'linear-gradient(to right, #8900A0, #D100F3)';
        icon1.style.transform = 'rotate(180deg)';

        conteudo2.style.display = 'none';
        style2.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon2.style.transform = 'rotate(0deg)';

        conteudo3.style.display = 'none';
        style3.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon3.style.transform = 'rotate(0deg)';
    } else {
        conteudo1.style.display = 'none';
        style1.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon1.style.transform = 'rotate(0deg)';
    }
}

// EVENTO
function toggleColapse_evento() {
    const conteudo1 = document.getElementById('conteudo1');
    const style1 = document.getElementById('btnColapse1');
    const icon1 = document.getElementById('icon1');

    const conteudo2 = document.getElementById('conteudo2');
    const style2 = document.getElementById('btnColapse2');
    const icon2 = document.getElementById('icon2');

    const conteudo3 = document.getElementById('conteudo3');
    const style3 = document.getElementById('btnColapse3');
    const icon3 = document.getElementById('icon3');

    if (conteudo2.style.display === 'none' || conteudo2.style.display === ''){
        conteudo2.style.display = 'block';
        style2.style.background = 'linear-gradient(to right, #8900A0, #D100F3)';
        icon2.style.transform = 'rotate(180deg)';

        conteudo1.style.display = 'none';
        style1.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon1.style.transform = 'rotate(0deg)';

        conteudo3.style.display = 'none';
        style3.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon3.style.transform = 'rotate(0deg)';
    } else {
        conteudo2.style.display = 'none';
        style2.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon2.style.transform = 'rotate(0deg)';
    }
}

// LOJA
function toggleColapse_loja() {
    const conteudo1 = document.getElementById('conteudo1');
    const style1 = document.getElementById('btnColapse1');
    const icon1 = document.getElementById('icon1');

    const conteudo2 = document.getElementById('conteudo2');
    const style2 = document.getElementById('btnColapse2');
    const icon2 = document.getElementById('icon2');

    const conteudo3 = document.getElementById('conteudo3');
    const style3 = document.getElementById('btnColapse3');
    const icon3 = document.getElementById('icon3');

    if (conteudo3.style.display === 'none' || conteudo3.style.display === ''){
        conteudo3.style.display = 'block';
        style3.style.background = 'linear-gradient(to right, #8900A0, #D100F3)';
        icon3.style.transform = 'rotate(180deg)';

        conteudo2.style.display = 'none';
        style2.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon2.style.transform = 'rotate(0deg)';

        conteudo1.style.display = 'none';
        style1.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon1.style.transform = 'rotate(0deg)';
    } else {
        conteudo3.style.display = 'none';
        style3.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon3.style.transform = 'rotate(0deg)';
    }
}

//Pop Up
const closePopupBtns = document.querySelectorAll(".popupClose");
const overlay = document.getElementById("overlay");


//Pop Up AULA
const aulaEdit_1 = document.getElementById("aulaEdit_1");
const popupAulaEdit_1 = document.getElementById("popupAulaEdit_1");

const aulaHidn_1 = document.getElementById("aulaHidn_1");
const popupAulaHidn_1 = document.getElementById("popupAulaHidn_1");
const aulaVis_1 = document.getElementById("aulaVis_1");

const aulaDel_1 = document.getElementById("aulaDel_1");
const popupAulaDel_1 = document.getElementById("popupAulaDel_1");

const aula_1 = document.getElementById("Aula_1");

// Abrir o popup
aulaEdit_1.addEventListener("click", () => {
    popupAulaEdit_1.style.display = "block";
    popupAulaHidn_1.style.display = "none";
    popupAulaDel_1.style.display = "none";
    overlay.style.display = "block";
});

aulaHidn_1.addEventListener("click", () => {
    popupAulaEdit_1.style.display = "none";
    popupAulaHidn_1.style.display = "block";
    popupAulaDel_1.style.display = "none";
    overlay.style.display = "block";

    aulaVis_1.style.display = "block";
    aula_1.style.color = "gray";
    aulaHidn_1.style.display = "none";
});

aulaVis_1.addEventListener("click", () => {
    aulaVis_1.style.display = "none";
    aula_1.style.color = "black";
    aulaHidn_1.style.display = "block";
});

aulaDel_1.addEventListener("click", () => {
    popupAulaHidn_1.style.display = "none";
    popupAulaEdit_1.style.display = "none";
    popupAulaDel_1.style.display = "block";
    overlay.style.display = "block";
});

// Fechar o popup
closePopupBtns.forEach(button => {
    button.addEventListener("click", () => {
        popupAulaEdit_1.style.display = "none";
        popupAulaHidn_1.style.display = "none";
        popupAulaDel_1.style.display = "none";
        overlay.style.display = "none";
    });
});

// Fechar o popup
overlay.addEventListener("click", () => {
    popupAulaEdit_1.style.display = "none";
    popupAulaHidn_1.style.display = "none";
    popupAulaDel_1.style.display = "none";
    overlay.style.display = "none";
});

popupAulaEdit_1.addEventListener("click", (event) => event.stopPropagation());
popupAulaHidn_1.addEventListener("click", (event) => event.stopPropagation());
popupAulaDel_1.addEventListener("click", (event) => event.stopPropagation());


//Pop Up AULA
const lojaEdit_1 = document.getElementById("lojaEdit_1");
const popupLojaEdit_1 = document.getElementById("popupLojaEdit_1");

const lojaHidn_1 = document.getElementById("lojaHidn_1");
const popupLojaHidn_1 = document.getElementById("popupLojaHidn_1");
const lojaVis_1 = document.getElementById("lojaVis_1");

const lojaDel_1 = document.getElementById("lojaDel_1");
const popupLojaDel_1 = document.getElementById("popupLojaDel_1");

const prod_1 = document.getElementById("Prod_1");

// Abrir o popup
lojaEdit_1.addEventListener("click", () => {
    popupLojaEdit_1.style.display = "block";
    popupLojaHidn_1.style.display = "none";
    popupLojaDel_1.style.display = "none";
    overlay.style.display = "block";
});

lojaHidn_1.addEventListener("click", () => {
    popupLojaEdit_1.style.display = "none";
    popupLojaHidn_1.style.display = "block";
    popupLojaDel_1.style.display = "none";
    overlay.style.display = "block";

    lojaVis_1.style.display = "block";
    prod_1.style.color = "gray";
    lojaHidn_1.style.display = "none";
});

lojaVis_1.addEventListener("click", () => {
    lojaVis_1.style.display = "none";
    prod_1.style.color = "black";
    lojaHidn_1.style.display = "block";
});

lojaDel_1.addEventListener("click", () => {
    popupLojaHidn_1.style.display = "none";
    popupLojaEdit_1.style.display = "none";
    popupLojaDel_1.style.display = "block";
    overlay.style.display = "block";
});

// Fechar o popup
closePopupBtns.forEach(button => {
    button.addEventListener("click", () => {
        popupLojaEdit_1.style.display = "none";
        popupLojaHidn_1.style.display = "none";
        popupLojaDel_1.style.display = "none";
        overlay.style.display = "none";
    });
});

// Fechar o popup
overlay.addEventListener("click", () => {
    popupLojaEdit_1.style.display = "none";
    popupLojaHidn_1.style.display = "none";
    popupLojaDel_1.style.display = "none";
    overlay.style.display = "none";
});

popupLojaEdit_1.addEventListener("click", (event) => event.stopPropagation());
popupLojaHidn_1.addEventListener("click", (event) => event.stopPropagation());
popupLojaDel_1.addEventListener("click", (event) => event.stopPropagation());