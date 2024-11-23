document.addEventListener('DOMContentLoaded', function () {

  // Página de Avaliação (review.html)
  const form = document.getElementById('review-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const schoolName = document.getElementById('school-name').value;
    const schoolLocation = document.getElementById('school-location').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    const newReview = {
      name: schoolName,
      location: schoolLocation,
      rating: rating,
      comments: comments
    };

    const storedReviews = JSON.parse(localStorage.getItem('schools')) || [];
    storedReviews.push(newReview);
    localStorage.setItem('schools', JSON.stringify(storedReviews));

    form.reset();
    window.location.href = 'schools.html';
  });

  // Página de Escolas Avaliadas (schools.html)
  const schoolList = document.getElementById('school-list');
  const reviews = JSON.parse(localStorage.getItem('schools')) || [];

  if (reviews.length === 0) {
    schoolList.innerHTML = "<p>Nenhuma avaliação disponível.</p>";
  } else {
    schoolList.innerHTML = '';
    reviews.forEach(function (review) {
      const schoolElement = document.createElement('div');
      schoolElement.classList.add('school');
      schoolElement.innerHTML = `
        <h3>${review.name} - ${review.location}</h3>
        <p class="rating">Avaliação: ${review.rating} estrelas</p>
        <p>${review.comments}</p>
      `;
      schoolList.appendChild(schoolElement);
    });
  }

});
