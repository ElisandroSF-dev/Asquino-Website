
// barra pesquisa
const clearButton = document.getElementById('clear-button');
const searchInput = document.getElementById('search-input');
const searchIcon   
 = document.getElementById('search-icon'); // Certifique-se que o ID está correto

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
});

function handleKeyPress(event) {
  if (event.key === "Enter") {
    realizarPesquisa();
  }
}

searchIcon.addEventListener('click', () => {
  realizarPesquisa();
});

function realizarPesquisa() {
  const searchTerm = searchInput.value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase();   

    if (productName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display   
 = 'none';
    }
  });
}


// cards

const whatsappButtons = document.querySelectorAll('.whatsapp-button');

whatsappButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtém as informações do produto
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('.price').textContent;

    // Monta a mensagem do WhatsApp
    const message = `Olá! Gostaria de comprar o ${productName} por ${productPrice}.`;

    // Codifica a mensagem para ser usada na URL
    const encodedMessage = encodeURIComponent(message);

    // Redireciona para o WhatsApp com a mensagem
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  });
});


// menu de categorias
// menu de categorias
const links = document.querySelectorAll('.category-nav a');
const activeBar = document.querySelector('.category-nav .active-bar');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Remove a classe "active" de todos os links
    links.forEach(l => l.parentNode.classList.remove('active'));

    // Adiciona a classe "active" ao link clicado
    const item = link.parentNode; // Seleciona o item da lista (<li>)
    item.classList.add('active');

    // Calcula a posição e largura do item clicado
    const itemRect = item.getBoundingClientRect();
    const itemLeft = itemRect.left + window.scrollX;
    const itemWidth = item.offsetWidth;

    // Calcula a posição left da barra para centralizá-la
    const barLeft = itemLeft + (itemWidth / 2) - (activeBar.offsetWidth / 2);

    // Move a barra
    activeBar.style.left = `${barLeft}px`;

    // Define a cor da barra com base na cor do link ativo no CSS
    const activeLinkColor = getComputedStyle(link).color;
    activeBar.style.backgroundColor = activeLinkColor;

    // Redireciona para a página do link após a animação da barra (opcional)
    setTimeout(() => {
      window.location.href = link.href;
    }, 300);
  });
});

// Seleciona as bolinhas e o botão
const selectionCircles = document.querySelectorAll('.selection-circle');
const finalizePurchaseButton = document.getElementById('finalize-purchase');

// Array para armazenar os produtos selecionados
let selectedProducts = [];

// Adiciona evento de clique a cada bolinha
selectionCircles.forEach(circle => {
  circle.addEventListener('click', () => {
    // Alterna a classe "selected" e atualiza o array de produtos
    circle.classList.toggle('selected');

    const productCard = circle.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('.price').textContent;

    if (circle.classList.contains('selected')) {
      // Adiciona o produto ao array
      selectedProducts.push({ name: productName, price: productPrice });

    } else {
      // Remove o produto do array
      selectedProducts = selectedProducts.filter(product => product.name !== productName);

    }

    // Atualiza o contador de itens
    const itemCount = document.getElementById('item-count');
    itemCount.textContent = `${selectedProducts.length} ITEM SELECIONADO`;
  });
});

// Adiciona evento de clique ao botão "Finalizar Compra"
finalizePurchaseButton.addEventListener('click', () => {
  if (selectedProducts.length === 0) {
    alert('Selecione pelo menos um produto.');
    return;
  }

  // Monta a mensagem do WhatsApp com a lista de produtos
  let message = 'Olá! Gostaria de comprar os seguintes produtos:\n\n';
  selectedProducts.forEach(product => {
    message += `${product.name} - ${product.price}\n`;
  });

  // Codifica a mensagem e abre o WhatsApp
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
});

// Adiciona evento de clique ao botão "X"
const closeSelectionButton = document.getElementById('close-selection');
closeSelectionButton.addEventListener('click', () => {
  // Remove a seleção de todos os produtos
  selectionCircles.forEach(circle => {
    circle.classList.remove('selected');
  });

  // Limpa o array de produtos selecionados
  selectedProducts = [];

  // Atualiza o contador de itens
  const itemCount = document.getElementById('item-count');
  itemCount.textContent = '0 ITEM SELECIONADO';
});