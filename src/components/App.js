import React, {useEffect, useState} from 'react';
 import '../styles/App.css';
 import Navbar from './Navbar';
import Image from './Image';

function App() {

const [images, setImages] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('top')

useEffect(()=> {
  getImages();
}, [query]);


const getImages = async()=>{
  const response = await fetch('https://api.imgur.com/3/gallery/top/top/5/day', {
	'method': 'GET',
	'headers': {
    'Authorization':'Client-ID 5d777ff1d2321c6'
	}
});
const data = await response.json();
setImages(data);
console.log(data);
};

    const updateSearch= e =>{
      setSearch(e.target.value)
    }

    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    console.log(images);


  return (
    <div className="App">

    <Navbar
        getSearch = {getSearch}
        search = {search}
        updateSearch = {updateSearch}/>


      <div className="images">


     {images.map((image, index)=>(
        <Image
                key={image.id}
                //image={image.images.link}
                title= {image.title}
                description ={image.description}/>

     ))}
     </div>
          </div>



      );
}

export default App;
