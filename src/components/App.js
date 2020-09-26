import React, {
  useEffect,
  useState
} from 'react';
import '../styles/style.min.css';
import Navbar from './Navbar';
import Image from './Image';

function App() {

  const [images, setImages] = useState([]);
  const [section, setSection] = useState('hot');
  const [sort, setSort] = useState('viral');
  const [windowP, setWindowP] = useState('day');
  const [showViral, setShowViral] = useState(false);


  useEffect(() => {
    getImages();
  }, [section, sort, windowP, showViral]);

  const updateWindowP = e => {
    setWindowP(e.target.value);
  };

  const updateSort = e => {
    setSort(e.target.value);
  };


const updateSection = e => {
    setSection(e.target.value);
}


  const toggleShowViral = () => setShowViral(!showViral);

  const getImages = async () => {
    const response = await fetch(`https://api.imgur.com/3/gallery/${section}/${sort}/${windowP}/5?showViral=${showViral}`, {
      method: 'GET',
      headers: {
        Authorization: 'Client-ID 5d777ff1d2321c6',
      },
    });
    const data = await response.json();
    setImages(data.data);
    console.log(data.data);
  };

  return (
    < div className = "App" >

    < Navbar
        updateSection = {updateSection}
        showViral = {showViral}
        toggleShowViral = {toggleShowViral}
        updateWindowP = {updateWindowP}
        updateSort = {updateSort}
        section = {section}
        sort = {sort}
        windowP = {windowP}
   / >


    <div className = "gallery" >

    {
      images.map((image, index) => (
        <Image key = {image.id}
        image = {image.images ? image.images[0].link : ''}
        title = {image.title}
        description = {image.description}
        />

      ))
    } </div>
     </div>

  );
}

export default App;
