import React, {useEffect, useState} from 'react';
 import '../styles/style.min.css';
 import Navbar from './Navbar';
import Image from './Image';

function App() {

const [images, setImages] = useState([]);
const [section, setSection] = useState('hot');
const [sort, setSort] = useState('viral');
const [windowP, setWindowP] = useState('day');
const [showViral, setShowViral] = useState(true);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('top')

useEffect(()=> {
  getImages();
}, [query]);

/*&mature={{showMature}}&album_previews={{albumPreviews}}*/

const getImages = async()=>{
  const response = await fetch(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}/5?showViral=${showViral}`, {
	'method': 'GET',
	'headers': {
    'Authorization':'Client-ID 5d777ff1d2321c6'
	}
});
const data = await response.json();
setImages(data.data);
console.log(data.data);
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


      <div className="gallery">

     {images.map((image, index) =>(
       <Image
                key={image.id}
                image = {image.images ? image.images[0].link : ''}
                title= {image.title}
                description ={image.description}
                />

     ))}
     </div>
          </div>



      );
}

export default App;
