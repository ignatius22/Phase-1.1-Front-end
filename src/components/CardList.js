import React from 'react';


import Card from './Card';

const CardList = ({ profiles }) => (
  <div data-testid="recipes" className="w-80 center" >
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
        key={i}
      />
    ))}
  </div>
);



export default CardList;
