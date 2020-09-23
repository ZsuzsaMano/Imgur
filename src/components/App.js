import React, {useEffect, useState} from 'react';
 import '../styles/App.css';
 import Navbar from './Navbar';
import Image from './Image';

function App() {
// const  client_id = '5d777ff1d2321c6'
// const client_secret = '4169cf94633df81fbda0788177d241d0aad5138f'
// const access_token ='d75041f62531d0d5a388a753dfa29cbb673e1ece'
//  const token_type='bearer'
// const refresh_token='6a9dde3cfbfad53a37125da50e7c92902d85f883'

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


  return (
    <div className="App">

    <Navbar
        getSearch = {getSearch}
        search = {search}
        updateSearch = {updateSearch}/>


      <div className="images">

     {images.map((image,index)=>(
        <Image
                key={image.id}
                image={image.images.link}
                title= {image.title}
                description ={image.description}/>

     ))}

     </div>
   </div>

      );
}

export default App;
