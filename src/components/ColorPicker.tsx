import React from "react";
import "./style.css";

interface colorPickerProps {
  setSelectedColor: (color: string) => void;
  selectedColor: string;
}

export default function ColorPicker({
  setSelectedColor,
  selectedColor,
}: colorPickerProps): React.JSX.Element {
  const color = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFFFFF",
    "#000000",
  ];
  return (
    <div className="color-picker-container">
      <h1>ColorPicker </h1>
      <div className="color-picker">
        {color.map((c) => (
          <button
            key={c}
            style={{ backgroundColor: c }}
            onClick={() => setSelectedColor(c)}
            aria-label={`Select color ${c}`}
            value={c}
            className={`color-button ${selectedColor === c ? "active" : ""}`}
          />
        ))}
        <div className="selected-color">
          <span>Selected Color: </span>
          <span
            className="selected-color-box"
            style={{ backgroundColor: selectedColor }}
          ></span>
          <span>{selectedColor}</span>
        </div>
      </div>
      <select
        onChange={(e) => setSelectedColor(e.target.value)}
        value={selectedColor}
      >
        <option value="pencil">Pencil</option>
        <option value="eraser">Eraser</option>
        <option value="rectangle">Rectangle</option>
      </select>
    </div>
  );
}
