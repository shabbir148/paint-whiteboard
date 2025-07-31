import React from "react";
import { Undo, Delete, SaveAll } from "lucide-react";
import "./style.css";

interface ToolbarProps {
  handleSave: () => void;
  handleUndo: () => void;
  handleClear: () => void;
}

export default function Toolbar({
  handleSave,
  handleUndo,
  handleClear,
}: ToolbarProps): React.JSX.Element {
  return (
    <div className="toolbar">
      <h1>Toolbar </h1>
      <div className="action-buttons">
        <button onClick={() => handleSave()}>
          <SaveAll />
        </button>
        <button onClick={() => alert("Undo action")}>
          <Undo />
        </button>
        <button onClick={() => handleClear()}>
          <Delete />
        </button>
      </div>
    </div>
  );
}
