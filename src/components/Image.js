import React from 'react';

const Image = ({ image, title, description}) =>{
return(
  <div className="image">
    <h2>{title}</h2>
    <img src={image} alt={title}/>
    <p>{description}</p>
  </div>
)
}

export default Image;
