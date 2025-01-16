import './Contact.css';
import call from '../assets/call.png';
import whatsApp from '../assets/whatsApp.png';
import email from '../assets/email.png';
import github from '../assets/github.png';
import sms from '../assets/sms.png';

export default function Contact() {
  const contacts = [
    { href: "sms:+917895683926", imgSrc: sms, alt: "SMS" },
    { href: "mailto:tyagiparth286@gmail.com", imgSrc: email, alt: "Email" },
    { href: "tel:+917895683926", imgSrc: call, alt: "Phone" },
    { href: "https://github.com/Parthh191", imgSrc: github, alt: "GitHub", target: "_blank", rel: "noopener noreferrer" },
    { href: "https://wa.me/917895683926", imgSrc: whatsApp, alt: "WhatsApp", target: "_blank", rel: "noopener noreferrer" }
  ];

  return (
    <div className="contact">
      <div className="moving-stars"></div>
      <div className="bottom-moving-stars"></div>

      {/* Header Section */}
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have any questions or just want to say hello? Feel free to reach out through any of the following channels.</p>
      </header>

      {/* Contact Icons List */}
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <a href={contact.href} target={contact.target} rel={contact.rel}>
              <img src={contact.imgSrc} alt={contact.alt} className="contact-image" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
