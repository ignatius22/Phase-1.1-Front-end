import React from 'react';


import Card from './Card';

const CardList = ({ profiles }) => (
  <div data-testid="recipes" className="mw9 center ph3-ns w-90 ">
    {profiles.map((profile, i) => (
      <Card
        FirstName={profile.FirstName}
        LastName={profile.LastName}
        Gender={profile.Gender}
        Latitude={profile.Latitude}
        Longitude={profile.Longitude}
        CreditCardNumber={profile.CreditCardNumber}
        Email={profile.Email}
        DomainName={profile.DomainName}
        PhoneNumber={profile.PhoneNumber}
        MacAddress={profile.MacAddress}
        URL={profile.URL}
        UserName={profile.UserName}
        LastLogin={profile.LastLogin}
        PaymentMethod={profile.PaymentMethod}
      />
    ))}
  </div>
);



export default CardList;
