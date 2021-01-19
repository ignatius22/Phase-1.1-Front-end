import React from 'react';
import '../containers/App.css';


const Card = ({ title, image, id }) => (
  <div
    data-testid="card"
    className="tc grow bg-navy br3 pa2 ma3 dib bw2 shadow-3 "
  >
   <h1>hello Card</h1>
  </div>
);



export default Card;
