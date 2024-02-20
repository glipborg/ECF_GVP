import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import AddressModal from '../../common/Modal/Address';
import LegalModal from '../../common/Modal/Legal';
import RGPDModal from '../../common/Modal/RGPD';
import HoursModal from '../../common/Modal/Hours';

const Footer = (props) => {
  const { t } = useTranslation();

  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const openAddressModal = () => setAddressModalOpen(true);
  const closeAddressModal = () => setAddressModalOpen(false);
  
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);
  const openLegalModal = () => setLegalModalOpen(true);
  const closeLegalModal = () => setLegalModalOpen(false);
  
  const [isRGPDModalOpen, setRGPDModalOpen] = useState(false);
  const openRGPDModal = () => setRGPDModalOpen(true);
  const closeRGPDModal = () => setRGPDModalOpen(false);

  const [isHoursModalOpen, setHoursModalOpen] = useState(false);
  const openHoursModal = () => setHoursModalOpen(true);
  const closeHoursModal = () => setHoursModalOpen(false);


  return (
    <div className="footer">
      <div className="foot-links">
        <a href="#Address" onClick={(e) => {e.preventDefault(); openAddressModal();}}>{t('Footer.Links.Address')}</a>
        <a href="#Legal" onClick={(e) => {e.preventDefault(); openLegalModal();}}>{t('Footer.Links.Legal')}</a>
        <a href="#RGPD" onClick={(e) => {e.preventDefault(); openRGPDModal();}}>{t('Footer.Links.RGPD')}</a>
        <a href="#Hours" onClick={(e) => {e.preventDefault(); openHoursModal();}}>{t('Footer.Links.Hours')}</a>
      </div>
      <AddressModal isOpen={isAddressModalOpen} onClose={closeAddressModal} />
      <LegalModal isOpen={isLegalModalOpen} onClose={closeLegalModal} />
      <RGPDModal isOpen={isRGPDModalOpen} onClose={closeRGPDModal} />
      <HoursModal isOpen={isHoursModalOpen} onClose={closeHoursModal} />
    </div> 
  );
};

export default Footer;
