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
  <div class="pa3 pa5-ns center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow bg-warning">
    <h2
      class="f3 fw5 mb-4 text-monospace"
      data-toggle="tooltip"
      data-placement="top"
      title={FirstName}
    >
      {FirstName} {LastName}
    </h2>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">FirstName:</dt>
      <dd class="dib ml gray roboto">{FirstName}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">LastName:</dt>
      <dd class="dib ml0 gray">{LastName}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">UserName:</dt>
      <dd class="dib ml0 gray">{UserName}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">LastLogin:</dt>
      <dd class="dib ml0 gray">{LastLogin}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">Gender:</dt>
      <dd class="dib ml0 gray">{Gender}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">PhoneNumber:</dt>
      <dd class="dib ml0 gray">{PhoneNumber}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">PaymentMethod:</dt>
      <dd class="dib ml0 gray">{PaymentMethod}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">Email:</dt>
      <dd class="dib ml0 gray">{Email}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">URL:</dt>
      <dd class="dib ml0 gray">{URL}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">MacAddress:</dt>
      <dd class="dib ml0 gray">{MacAddress}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">Longitude:</dt>
      <dd class="dib ml0 gray">{Longitude}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">CreditCardNumber:</dt>
      <dd class="dib ml0 gray">{CreditCardNumber}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2">Latitude:</dt>
      <dd class="dib ml0 gray">{Latitude}</dd>
    </dl>
    <dl class="f5 lh-title mv2">
      <dt class="dib b mr-2"> DomainName</dt>
      <dd class="dib ml0 gray">{DomainName}</dd>
    </dl>
  </div>
);




export default Card;
