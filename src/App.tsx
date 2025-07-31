import React, { useState } from "react";
import "./App.css";
import CanvasArea from "./components/CanvasArea/index";
import SideBar from "./components/SideBar/index";

function App() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedBrushSize, setSelectedBrushSize] = useState(5);
  const [selectedBrush, setSelectedBrush] = useState("pencil");

  const handleSave = (): void => {
    const canvas = document.querySelector(
      ".drawing-canvas"
    ) as HTMLCanvasElement;
    if (canvas) {
      const Link = document.createElement("a");
      Link.download = "drawing.png";
      Link.href = canvas.toDataURL("image/png", 1.0);
      Link.click();
    }
  };
  const handleUndo = () => {};
  const handleClear = (): void => {
    const canvas = document.querySelector(
      ".drawing-canvas"
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div className="App">
      <SideBar
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedBrushSize={selectedBrushSize}
        setSelectedBrushSize={setSelectedBrushSize}
        selectedBrush={selectedBrush}
        setSelectedBrush={setSelectedBrush}
        handleSave={handleSave}
        handleUndo={handleUndo}
        handleClear={handleClear}
      />
      <CanvasArea
        selectedColor={selectedColor}
        selectedBrushSize={selectedBrushSize}
        selectedBrush={selectedBrush}
      />
    </div>
  );
}

export default App;
