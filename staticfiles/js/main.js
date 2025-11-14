document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nome = document.querySelector('input[name="nome"]');
  const idade = document.querySelector('input[name="idade"]');
  const erros = document.getElementById('erros');
  const mediaBtn = document.getElementById('btn-media');
  const mediaTexto = document.getElementById('media-idade');
  const contrasteBtn = document.getElementById('contraste-btn');

  // Validação simples
  form.addEventListener('submit', (e) => {
    erros.textContent = '';
    if (!nome.value.trim() || !idade.value.trim() || idade.value <= 0) {
      e.preventDefault();
      erros.textContent = 'Por favor, preencha todos os campos corretamente.';
      erros.focus();
    }
  });

  // Mostrar média de idades
  mediaBtn.addEventListener('click', () => {
    fetch('/api/media-idade/')
      .then(resp => resp.json())
      .then(data => {
        mediaTexto.textContent = `Média de idades: ${data.media_idade}`;
      })
      .catch(() => {
        mediaTexto.textContent = 'Erro ao calcular média.';
      });
  });

  // Alternar alto contraste
  contrasteBtn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
});
