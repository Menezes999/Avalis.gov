document.addEventListener('DOMContentLoaded', function() {
  const schoolList = document.getElementById('school-list');
  const loadingMessage = document.querySelector('main p');
  
  // Verifica se o 'school-list' está presente na página
  if (schoolList) {
    const storedReviews = localStorage.getItem('schools');
    const reviews = storedReviews ? JSON.parse(storedReviews) : [];

    if (reviews.length === 0) {
      schoolList.innerHTML = "<p>Nenhuma avaliação disponível.</p>";
    } else {
      schoolList.innerHTML = ''; // Limpa qualquer conteúdo de carregamento
      loadingMessage.style.display = 'none'; // Esconde a mensagem de carregamento
      
      reviews.forEach((school) => {
        const schoolDiv = document.createElement('div');
        schoolDiv.className = 'school';
        schoolDiv.innerHTML = `
          <h2>${school.name}</h2>
          <p><strong>Localização:</strong> ${school.location}</p>
          <p><strong>Avaliação:</strong> <span class="rating">${school.rating} estrelas</span></p>
          <h3>Comentários:</h3>
          <ul>
            ${school.comments.map(comment => `<li>${comment}</li>`).join('')}
          </ul>
        `;
        schoolList.appendChild(schoolDiv);
      });
    }
  }
});
