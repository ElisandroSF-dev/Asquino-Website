function openDescription1() {
    const conteudo_1 = document.getElementById('conteudoColapse_1');
    const conteudo_2 = document.getElementById('conteudoColapse_2');
    const conteudo_3 = document.getElementById('conteudoColapse_3');

    if (conteudo_1.style.display === 'none' || conteudo_1.style.display === ''){
        conteudo_1.style.display = 'block';
        conteudo_2.style.display = 'none';
        conteudo_3.style.display = 'none';
    } else {
        conteudo_1.style.display = 'none';
        conteudo_2.style.display = 'none';
        conteudo_3.style.display = 'none';
    }
}

function openDescription2(){
    const conteudo_1 = document.getElementById('conteudoColapse_1');
    const conteudo_2 = document.getElementById('conteudoColapse_2');
    const conteudo_3 = document.getElementById('conteudoColapse_3');
    if (conteudo_2.style.display === 'none' || conteudo_2.style.display === ''){
        conteudo_1.style.display = 'none';
        conteudo_2.style.display = 'block';
        conteudo_3.style.display = 'none';
    } else {
        conteudo_1.style.display = 'none';
        conteudo_2.style.display = 'none';
        conteudo_3.style.display = 'none';
    }
}

function openDescription3(){
    const conteudo_1 = document.getElementById('conteudoColapse_1');
    const conteudo_2 = document.getElementById('conteudoColapse_2');
    const conteudo_3 = document.getElementById('conteudoColapse_3');
    if (conteudo_3.style.display === 'none' || conteudo_3.style.display === ''){
        conteudo_1.style.display = 'none';
        conteudo_2.style.display = 'none';
        conteudo_3.style.display = 'block';
    } else {
        conteudo_1.style.display = 'none';
        conteudo_2.style.display = 'none';
        conteudo_3.style.display = 'none';
    }
}