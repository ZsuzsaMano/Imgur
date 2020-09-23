import React from 'react';

const Image = ({ key, title, description }) => {
return(
  <div className="image">
    <h2>{title}</h2>

    <p>{description}</p>
  </div>
)
}

export default Image;
