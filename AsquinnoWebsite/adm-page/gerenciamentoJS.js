// AULA
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

const inputFile1 = document.getElementById('arquivo1');
const fileNameDisplay1 = document.getElementById('file-name1');

    inputFile1.addEventListener('change', function() {
    const fileName1 = this.files.length > 0 ? this.files[0].name : "Nenhum arquivo escolhido";
    fileNameDisplay1.textContent = fileName1;
});

const inputGaleryFile1 = document.getElementById('galery1');
const fileGaleryNameDisplay1 = document.getElementById('fileGalery-name1');

    inputGaleryFile1.addEventListener('change', function() {
    const fileGaleryName1 = this.files.length > 0 ? this.files[0].name : "Nenhum arquivo escolhido";
    fileGaleryNameDisplay1.textContent = fileGaleryName1;
});

const inputFile2 = document.getElementById('arquivo2');
const fileNameDisplay2 = document.getElementById('file-name2');

    inputFile2.addEventListener('change', function() {
    const fileName2 = this.files.length > 0 ? this.files[0].name : "Nenhum arquivo escolhido";
    fileNameDisplay2.textContent = fileName2;
});

const inputFile3 = document.getElementById('arquivo3');
const fileNameDisplay3 = document.getElementById('file-name3');

    inputFile3.addEventListener('change', function() {
    const fileName3 = this.files.length > 0 ? this.files[0].name : "Nenhum arquivo escolhido";
    fileNameDisplay3.textContent = fileName3;
});

//PopUp
const button = document.getElementById('button')
const popupWrapper = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popupWrapper.style.display = 'block'
})

popupWrapper.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0];
  console.log(classNameOfClickedElement)
  const classNames = ['popup-close', 'popup-wrapper']
  const closePopup = classNames.some(className => className === classNameOfClickedElement)

  if (closePopup) {
    popupWrapper.style.display = 'none'
  }
})