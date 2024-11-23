// Caminho do arquivo JSON
const jsonFile = 'schools.json';

// Elemento onde vamos exibir as escolas
const schoolList = document.getElementById('school-list');

// Função para carregar os dados do JSON
async function loadSchools() {
  try {
    const response = await fetch(jsonFile); // Carrega o arquivo JSON
    const schools = await response.json(); // Converte para um objeto JS

    // Limpa a mensagem de carregamento
    schoolList.innerHTML = '';

    // Adiciona cada escola ao HTML
    schools.forEach(school => {
      const schoolDiv = document.createElement('div');
      schoolDiv.className = 'school';

      schoolDiv.innerHTML = `
        <h2>${school.name}</h2>
        <p>Localização: ${school.location}</p>
        <p>Avaliação: ${school.rating}</p>
        <h3>Comentários:</h3>
        <ul>
          ${school.comments.map(comment => `<li>${comment}</li>`).join('')}
        </ul>
      `;

      schoolList.appendChild(schoolDiv);
    });
  } catch (error) {
    schoolList.innerHTML = '<p>Erro ao carregar as escolas. Tente novamente mais tarde.</p>';
    console.error('Erro ao carregar JSON:', error);
  }
}

// Chama a função ao carregar a página
if (schoolList) loadSchools();
