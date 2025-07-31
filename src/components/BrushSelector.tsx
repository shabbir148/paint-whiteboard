import React from "react";
import { Eraser, Pencil, RectangleVertical } from "lucide-react";
import "./style.css";

interface BrushSelectorProps {
  selectedBrush: string;
  setSelectedBrush: (brush: string) => void;
  setSelectedBrushSize: (size: number) => void;
  selectedBrushSize: number;
}

export default function BrushSelector({
  selectedBrush,
  setSelectedBrush,
  setSelectedBrushSize,
  selectedBrushSize,
}: BrushSelectorProps) {
  // This component allows the user to select a brush type and size.
  return (
    <div className="brush-selector-container">
      <h1>Brush Selector</h1>
      <div className="brush-selector">
        <section className="brush-selector-label">
          Brush Type:
          <div className="button-group">
            <button
              className={selectedBrush === "pencil" ? "active" : ""}
              onClick={() => setSelectedBrush("pencil")}
            >
              <Pencil />
            </button>
            <button
              className={selectedBrush === "eraser" ? "active" : ""}
              onClick={() => setSelectedBrush("eraser")}
            >
              <Eraser />
            </button>
            <button
              className={selectedBrush === "rectangle" ? "active" : ""}
              onClick={() => setSelectedBrush("rectangle")}
            >
              <RectangleVertical />
            </button>
          </div>
        </section>
        Brush Size:
        <input
          type="range"
          min="1"
          max="100"
          value={selectedBrushSize}
          onChange={(e) => setSelectedBrushSize(Number(e.target.value))}
        />
        <span>{selectedBrushSize}</span>
      </div>
    </div>
  );
}
