import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Enter a valid email address.');
      return;
    }
    alert('Message sent.');
  };

  return (
    <section>
      <h2>Contact Me</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
