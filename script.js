// Selecionando o formulário e mensagem de sucesso
const reviewForm = document.getElementById('review-form');
const successMessage = document.getElementById('success-message');

// Evento de envio do formulário
if (reviewForm) {
  reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Pegando os valores do formulário
    const schoolName = document.getElementById('school-name').value;
    const location = document.getElementById('location').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const comments = document.getElementById('comments').value;

    // Criando o objeto da nova avaliação
    const newReview = {
      name: schoolName,
      location: location,
      rating: rating,
      comments: [comments],
    };

    // Buscando avaliações existentes no localStorage
    const storedReviews = localStorage.getItem('schools');
    let reviews = storedReviews ? JSON.parse(storedReviews) : [];

    // Adicionando a nova avaliação à lista
    reviews.push(newReview);

    // Salvando de volta no localStorage
    localStorage.setItem('schools', JSON.stringify(reviews));

    // Mostrando mensagem de sucesso
    successMessage.style.display = 'block';
    reviewForm.reset();
  });
}

// Carregando avaliações no schools.html
if (schoolList) {
  const storedReviews = localStorage.getItem('schools');
  const reviews = storedReviews ? JSON.parse(storedReviews) : [];

  schoolList.innerHTML = '';

  reviews.forEach((school) => {
    const schoolDiv = document.createElement('div');
    schoolDiv.className = 'school';

    schoolDiv.innerHTML = `
      <h2>${school.name}</h2>
      <p>Localização: ${school.location}</p>
      <p>Avaliação: ${school.rating}</p>
      <h3>Comentários:</h3>
      <ul>
        ${school.comments.map((comment) => `<li>${comment}</li>`).join('')}
      </ul>
    `;

    schoolList.appendChild(schoolDiv);
  });
}
