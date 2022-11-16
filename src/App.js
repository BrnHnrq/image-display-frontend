import { useEffect, useState } from 'react';
import './App.css';

import Image from './Image';

const url = "http://localhost:8080/image";


const App = () => {

  const [image, setImage] = useState([]);

  const getImage = async () =>{
    const reponse = await fetch(url);
    const data = await reponse.json();
    setImage(data);
  }
  
  const postImage = async event =>{
    event.preventDefault();

    setImage(document.getElementById("image").files[0]);

    const form = new FormData();
    form.append('file',document.getElementById("image").files[0]);

    const post = await fetch(url, {
      method: 'POST',
      body: form
    });

    window.location.reload(true);
  }
  
  useEffect(() =>{
    getImage();
  },[]);

  return (
    <div className="App">
      <form onSubmit={postImage} encType="multipart/form-data">
        <div className='input-div'>
          <input type="file" accept="image/png, image/jpeg" id="image"></input>
          <button>Confirm</button>
        </div>
      </form>
      <div className='images'>
        {
          image.map((data) =>(
            <Image data={data}></Image>
          ))
        }
      </div>
    </div>
  );
}

export default App;
