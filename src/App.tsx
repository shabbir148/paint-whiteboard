import React, { useState } from "react";
import "./App.css";
import CanvasArea from "./components/CanvasArea/index";
import SideBar from "./components/SideBar/index";

function App() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedBrushSize, setSelectedBrushSize] = useState(5);
  const [selectedBrush, setSelectedBrush] = useState("pencil");

  const handleSave = () => {};
  const handleUndo = () => {};
  const handleClear = () => {};

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
