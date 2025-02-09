import React from "react";

const ColorPicker = ({
  colorOptions,
  selectedColor,
  onColorChange,
  onReset,
}) => {
  const handleButtonClick = (color) => {
    onColorChange(color);
  };

  return (
    <div >
      {colorOptions.map((color) => (
        <button
          key={color}
          onClick={() => handleButtonClick(color)}
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ColorPicker;
