document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.accordion-item');
  
    items.forEach(item => {
      const question = item.querySelector('.question');
      const answer = item.querySelector('.answer');
      const icon = item.querySelector('.toggle-icon');
  
      question.addEventListener('click', () => {
        // Alterna o estado do item clicado
        const isActive = answer.classList.contains('open');
  
        if (isActive) {
          // Se o item estiver ativo, fecha ele
          answer.classList.remove('open');
          icon.src = 'assets/images/icon-plus.svg'; // Troca para o ícone de "+"
          icon.classList.remove('rotate');
        } else {
          // Se o item não estiver ativo, abre ele
          answer.classList.add('open');
          icon.src = 'assets/images/icon-minus.svg'; // Troca para o ícone de "-"
          icon.classList.add('rotate');
        }
      });
    });
  });
  