import React from 'react';
import './DetailsPage.css';

const details = {
  addressLines: [
    '720 South Michigan Avenue',
    'Chicago, Illinois, 60605',
  ],
  name: 'Hilton Chicago',
  phoneNumber: '1-312-922-4400',
};

const DetailsPage = () =>
  <div className="details-page">
    <div className="hotel-exterior-image" />
    <h3 className="hotel-name">{details.name}</h3>
    {details.addressLines.map((line, i) => <address key={i}>{line}</address>)}
    <a href={`tel:+${details.phoneNumber.replace(/-/g, '')}`}>
      {details.phoneNumber}
    </a>
  </div>;

export default DetailsPage;
