document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const btn = form.querySelector('button');

      if (btn) {
        const originalText = btn.textContent;
        btn.textContent = 'Заявка отправлена';
        btn.disabled = true;

        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          form.reset();
        }, 2000);
      }
    });
  }
});
