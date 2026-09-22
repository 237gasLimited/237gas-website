const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = `Website enquiry - ${form.get('service') || 'Gas / Heating / Plumbing'}`;
  const body =
`Name: ${form.get('name')}
Phone: ${form.get('phone')}
Email: ${form.get('email')}
Postcode: ${form.get('postcode')}
Service: ${form.get('service')}

Job details:
${form.get('message')}`;

  window.location.href =
    `mailto:237gas.eng@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
