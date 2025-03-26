import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Ingresa un correo válido.');
      return;
    }
    alert('Mensaje enviado.');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input name="name" type="text" placeholder="Your Name" onChange={handleChange} />
      <input name="email" type="email" placeholder="Your Email" onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
