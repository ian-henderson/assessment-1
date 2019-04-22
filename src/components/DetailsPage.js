import React, { Fragment } from 'react';
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
  <Fragment>
    <div className="hotel-exterior-image" />
    <div className="hotel-details">
      <h3 className="hotel-name">{details.name}</h3>
      {details.addressLines.map(line => <address>{line}</address>)}
      <a href={`+${details.phoneNumber.replace(/-/g, '')}`}>
        {details.phoneNumber}
      </a>
    </div>
  </Fragment>;

export default DetailsPage;
