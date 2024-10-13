import React, {useState} from 'react';
import Images from './Images';
import './style.scss';
import './index'

function App() {

  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      <div class = "container">
        <img src ={selectedImg} alt="Selected" className = "selected"/>
      </div>

      <div class = "imgContainer">
        {Images.map((img, index ) => (
          <img key = {index} src = {img} alt="Selected"
          
          onClick = {() => setSelectedImg(img)}
          
          />
         ) )
        }
      </div>
    </div>
  );
}

export default App;
