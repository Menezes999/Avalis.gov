document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('review-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const schoolName = document.getElementById('school-name').value;
    const schoolLocation = document.getElementById('school-location').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Cria um objeto com os dados da avaliação
    const newReview = {
      name: schoolName,
      location: schoolLocation,
      rating: rating,
      comments: comments.split('\n'), // Divide os comentários em linhas
    };

    // Recupera as avaliações já existentes no localStorage, ou um array vazio se não houver nenhuma
    const storedReviews = JSON.parse(localStorage.getItem('schools')) || [];

    // Adiciona a nova avaliação ao array
    storedReviews.push(newReview);

    // Salva as avaliações atualizadas no localStorage
    localStorage.setItem('schools', JSON.stringify(storedReviews));

    // Limpa o formulário
    form.reset();

    // Redireciona para a página de escolas avaliadas
    window.location.href = 'schools.html';
  });
});
