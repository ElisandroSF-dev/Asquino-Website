const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click',   
 () => {
  searchInput.value   
 = '';
});