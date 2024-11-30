const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click',   
 () => {
  searchInput.value   
 = '';
});

const menuItems = document.querySelectorAll('.category-nav li');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe 'active' de todos os itens
    menuItems.forEach(item => item.classList.remove('active'));
    // Adiciona a classe 'active' 1  ao item clicado
    item.classList.add('active');
  });
});