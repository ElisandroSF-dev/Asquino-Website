// AULA
function toggleColapse_aula() {
    const conteudo1 = document.getElementById('conteudo1');
    const style1 = document.getElementById('btnColapse1');
    const icon1 = document.getElementById('icon1');

    if (conteudo1.style.display === 'none' || conteudo1.style.display === ''){
        conteudo1.style.display = 'block';
        style1.style.background = 'linear-gradient(to right, #8900A0, #D100F3)';
        icon1.style.transform = 'rotate(180deg)';
    } else {
        conteudo1.style.display = 'none';
        style1.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon1.style.transform = 'rotate(0deg)';
    }
}

// EVENTO
function toggleColapse_evento() {
    const conteudo2 = document.getElementById('conteudo2');
    const style2 = document.getElementById('btnColapse2');
    const icon2 = document.getElementById('icon2');

    if (conteudo2.style.display === 'none' || conteudo2.style.display === ''){
        conteudo2.style.display = 'block';
        style2.style.background = 'linear-gradient(to right, #8900A0, #D100F3)';
        icon2.style.transform = 'rotate(180deg)';
    } else {
        conteudo2.style.display = 'none';
        style2.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon2.style.transform = 'rotate(0deg)';
    }
}

// LOJA
function toggleColapse_loja() {
    const conteudo3 = document.getElementById('conteudo3');
    const style3 = document.getElementById('btnColapse3');
    const icon3 = document.getElementById('icon3');

    if (conteudo3.style.display === 'none' || conteudo3.style.display === ''){
        conteudo3.style.display = 'block';
        style3.style.background = 'linear-gradient(to right, #8900A0, #D100F3)';
        icon3.style.transform = 'rotate(180deg)';
    } else {
        conteudo3.style.display = 'none';
        style3.style.background = 'linear-gradient(to right, #232323, #434343)';
        icon3.style.transform = 'rotate(0deg)';
    }
}

//Pop Up
const aulaEdit_1 = document.getElementById("aulaEdit_1");
const aulaHidn_1 = document.getElementById("aulaHidn_1");
const aulaDel_1 = document.getElementById("aulaDel_1");
const closePopupBtn = document.querySelector(".popupClose");
const popupAulaEdit_1 = document.getElementById("popupAulaEdit_1");
const popupAulaHidn_1 = document.getElementById("popupAulaHidn_1");
const popupAulaDel_1 = document.getElementById("popupAulaDel_1");
const overlay = document.querySelector(".overlay");

// Abrir o popup
aulaEdit_1.addEventListener("click", () => {
    popupAulaEdit_1.style.display = "block";
    overlay.style.display = "block";
});
aulaHidn_1.addEventListener("click", () => {
    popupAulaHidn_1.style.display = "block";
    overlay.style.display = "block";
});
aulaDel_1.addEventListener("click", () => {
    popupAulaDel_1.style.display = "block";
    overlay.style.display = "block";
});

// Fechar o popup
closePopupBtn.addEventListener("click", () => {
    popupAulaEdit_1.style.display = "none";
    popupAulaHidn_1.style.display = "none";
    popupAulaDel_1.style.display = "none";
    overlay.style.display = "none";
});

// Fechar ao clicar na sobreposição
overlay.addEventListener("click", () => {
    popupAulaEdit_1.style.display = "none";
    popupAulaHidn_1.style.display = "none";
    popupAulaDel_1.style.display = "none";
    overlay.style.display = "none";
});