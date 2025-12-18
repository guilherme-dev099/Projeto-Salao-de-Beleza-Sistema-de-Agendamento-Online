document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');
  const forms = document.querySelectorAll('.form');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;

      forms.forEach(form => form.classList.add('hidden'));
      buttons.forEach(btn => btn.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(tab).classList.remove('hidden');
    });
  });
});
