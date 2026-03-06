import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ACTIVATE THE CONTACT FORM (2 minutes, completely free):
// 1. Go to https://web3forms.com
// 2. Enter your email (ak5480@columbia.edu) and click "Create Access Key"
// 3. Check your email, copy the access key
// 4. Replace "YOUR_ACCESS_KEY_HERE" below with your key
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = '8dc364fb-fefa-4e9e-8fd8-208c5f66f879';

const GmailCompose = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: formData.subject || 'New message from adityaramk.com',
          from_name: formData.name,
          replyto: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="gmail-compose">
      <div className="gmail-header">
        <span className="gmail-title">New Message</span>
        <div className="gmail-header-actions">
          <span className="gmail-icon-btn" title="Minimize">―</span>
          <span className="gmail-icon-btn" title="Pop-out">⤢</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="gmail-field">
          <label>From</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="gmail-field">
          <label>Reply-to</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="gmail-field gmail-field-to">
          <label>To</label>
          <span className="gmail-to-chip">ak5480@columbia.edu ✕</span>
        </div>
        <div className="gmail-field">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="gmail-body">
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
          />
        </div>
        <div className="gmail-footer">
          <button
            type="submit"
            className="gmail-send-btn"
            disabled={status === 'sending' || status === 'sent'}
          >
            {status === 'idle' && <><FontAwesomeIcon icon="paper-plane" /> Send</>}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && '✓ Sent!'}
            {status === 'error' && <><FontAwesomeIcon icon="paper-plane" /> Retry</>}
          </button>
          {status === 'error' && (
            <span className="gmail-error">
              Something went wrong.{' '}
              <a href="mailto:ak5480@columbia.edu">Email directly →</a>
            </span>
          )}
          {status === 'sent' && (
            <span className="gmail-success">Message delivered! I'll get back to you soon.</span>
          )}
        </div>
      </form>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <div className="contact-section">
      <GmailCompose />
      <div className="contact-links-row">
        <a rel="noopener noreferrer" target="_blank" href="mailto:ak5480@columbia.edu" className="contact-pill">
          <FontAwesomeIcon icon="envelope" />
          <span>ak5480@columbia.edu</span>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://wa.me/919296655778" className="contact-pill whatsapp">
          <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          <span>WhatsApp</span>
        </a>
        <a href="tel:+16464277052" className="contact-pill phone">
          <FontAwesomeIcon icon="phone" />
          <span>+1 (646) 427-7052</span>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/adityaramk" className="contact-pill linkedin">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <span>LinkedIn</span>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/adityaram-2003" className="contact-pill github">
          <FontAwesomeIcon icon={['fab', 'github']} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
