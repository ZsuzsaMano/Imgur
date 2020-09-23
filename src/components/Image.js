import React from 'react';
import '../styles/style.min.css';

const Image = ({ image, title, description}) =>{
return(
  <figure className="figure">
    <h3>{title}</h3>
    <img className="figure__img" src={image} alt={title}/>
    <figcaption>{description}</figcaption>
  </figure>
)
}

export default Image;
