const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');

if (contactForm && contactFeedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const senderEmail = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !senderEmail || !message) {
      contactFeedback.textContent = 'Please complete all fields before sending.';
      return;
    }

    const recipient = 'gurmulet@gmail.com';
    const subject = encodeURIComponent(`Toshibas Solutions Inquiry from ${name}`);
    const safeMessage = message.replace(/\r?\n/g, '\n');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${safeMessage}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    contactFeedback.textContent = 'Opening your email app with your message...';
  });
}
