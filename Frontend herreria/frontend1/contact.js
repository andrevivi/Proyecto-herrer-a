// ContactForm.jsx
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      })
    })
    .then(res => res.text())
    .then(data => alert(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" required />
      <input name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Mensaje" required />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default ContactForm;