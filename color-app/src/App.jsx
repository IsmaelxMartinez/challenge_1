import React, { useState } from "react";
import ColorPicker from "./components/ColotPicker.jsx";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const colorOptions = ["red", "blue", "green", "yellow"];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleReset = () => {
    setSelectedColor("white");
  };

  return (
    <body style={{ backgroundColor: selectedColor }}>
      <div>
        <ColorPicker
          colorOptions={colorOptions}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
          onReset={handleReset}
        />
      </div>
    </body>
  );
};

export default App;
