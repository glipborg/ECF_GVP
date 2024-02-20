import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log({ name, surname, email, subject, message, phone });
  };

  return (
    <form className="contact-form-box" onSubmit={handleSubmit}>
      <input type="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder={t('Votre Nom')} />
      <input type="name" value={surname} onChange={(e) => setSurname(e.target.value)} required placeholder={t('Votre Prenom')} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder={t('Votre adresse Email')} />
      <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
        <option value="Select Subject">{t('Sujet de votre demande')}</option>
        <option value="vehicle-maintenance">{t('Entretien de mon véhicule')}</option>
        <option value="repair">{t('Réparation')}</option>
        <option value="spare-parts">{t('Pièce détachée')}</option>
        <option value="tire-change">{t('Changement de pneus')}</option>
        <option value="revision">{t('Révision')}</option>
        <option value="advice">{t('Conseils')}</option>
        <option value="vehicle-purchase">{t('Achat d\'un véhicule')}</option>
      </select>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder={t('Votre Message')}></textarea>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t('Votre téléphone')} />
      <button type="submit">{t('Envoyer!')}</button>
    </form>
  );
};

export default ContactForm;
