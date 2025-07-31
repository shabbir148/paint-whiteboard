import React from "react";
import ColorPicker from "../ColorPicker";
import BrushSelector from "../BrushSelector";
import Toolbar from "../Toolbar";
import "./styles.css";

interface SideBarProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  setSelectedBrushSize: (size: number) => void;
  selectedBrushSize: number;
  selectedBrush: string;
  setSelectedBrush: (brush: string) => void;
  handleSave: () => void;
  handleUndo: () => void;
  handleClear: () => void;
}

export default function SideBar({
  selectedColor,
  setSelectedColor,
  setSelectedBrushSize,
  selectedBrushSize,
  selectedBrush,
  setSelectedBrush,
  handleSave,
  handleUndo,
  handleClear,
}: SideBarProps): React.JSX.Element {
  return (
    <div className="side-bar">
      <h1>Side Bar</h1>
      <div className="side-bar-content">
        <BrushSelector
          selectedBrush={selectedBrush}
          setSelectedBrush={setSelectedBrush}
          setSelectedBrushSize={setSelectedBrushSize}
          selectedBrushSize={selectedBrushSize}
        />
        <ColorPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Toolbar
          handleSave={handleSave}
          handleUndo={handleUndo}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
}
