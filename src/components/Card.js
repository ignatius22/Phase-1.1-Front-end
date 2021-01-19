import React from 'react';
import '../containers/App.css';


const Card = ({
  FirstName,
  LastName,
  Gender,
  Latitude,
  Longitude,
  CreditCardNumber,
  Email,
  DomainName,
  PhoneNumber,
  MacAddress,
  URL,
  UserName,
  LastLogin,
  PaymentMethod,
}) => (
  <div class="pa3 pa5-ns mw6 fl w-100 w-25-ns pa2 ml9 shadow-3 center  br3 pa3 pa2-ns mv3 ba b--black-10 bg-gold">
    <h2 class="f3 fw5">Profile</h2>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">FirstName:</dt>
      <dd class="dib ml0 gray">{FirstName}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">LastName:</dt>
      <dd class="dib ml0 gray">{LastName}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">UserName:</dt>
      <dd class="dib ml0 gray">{UserName}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">LastLogin:</dt>
      <dd class="dib ml0 gray">{LastLogin}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">Gender:</dt>
      <dd class="dib ml0 gray">{Gender}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">PhoneNumber:</dt>
      <dd class="dib ml0 gray">{PhoneNumber}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">PaymentMethod:</dt>
      <dd class="dib ml0 gray">{PaymentMethod}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">Email:</dt>
      <dd class="dib ml0 gray">{Email}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">URL:</dt>
      <dd class="dib ml0 gray">{URL}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">MacAddress:</dt>
      <dd class="dib ml0 gray">{MacAddress}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">Longitude:</dt>
      <dd class="dib ml0 gray">{Longitude}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">CreditCardNumber:</dt>
      <dd class="dib ml0 gray">{CreditCardNumber}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b">Latitude:</dt>
      <dd class="dib ml0 gray">{Latitude}</dd>
    </dl>
    <dl class="f6 lh-title mv2">
      <dt class="dib b"> DomainName</dt>
      <dd class="dib ml0 gray">{DomainName}</dd>
    </dl>
  </div>
);




export default Card;
