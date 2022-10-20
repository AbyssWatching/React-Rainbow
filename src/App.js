

import React, {useState} from 'react';
import ColorBlock from "./ColorBlock";
import ColorForm from './ColorForm';

function App() {

  let [colors, setColors] = useState(["violet", "blue","lightblue", "green", "greenyellow", "yellow", "orange", "red"]);
  const addColor = (newColor) => {
    setColors ([...colors, newColor])
  };

    let colorMap = colors.map((color, i) => {
      return(
        <div>
        <ColorBlock key= {i} color = {color} />
        </div>
      );
    });


  return (
    <div className="App">
      {colorMap}
      <colorForm addColor={addColor} />
    </div>
  );
}

export default App;
