import React, { useEffect } from "react";

interface ConvasAreaProps {
  selectedColor: string;
  selectedBrushSize: number;
  selectedBrush: string;
}

export default function CanvasArea({
  selectedColor,
  selectedBrushSize,
  selectedBrush,
}: ConvasAreaProps): React.JSX.Element {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [lastPosition, setLastPosition] = React.useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const cxt = canvas.getContext("2d");
    if (!cxt) {
      return;
    }
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    cxt.lineCap = "round";
    cxt.lineJoin = "round";
    cxt.fillStyle = "white"; // Default background color
    cxt.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setIsDrawing(true);
    setLastPosition({ x, y });

    const cxt = canvas.getContext("2d");
    if (!cxt) {
      return;
    }

    cxt.beginPath();
    cxt.moveTo(x, y);
    if (selectedBrush === "eraser") {
      cxt.globalCompositeOperation = "destination-out";
    } else {
      cxt.globalCompositeOperation = "source-over";
      cxt.strokeStyle = selectedColor;
    }
    cxt.lineWidth = selectedBrushSize;
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !lastPosition) {
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cxt = canvas.getContext("2d");
    if (!cxt) {
      return;
    }
    if (selectedBrush === "rectangle") {
      cxt.clearRect(0, 0, canvas.width, canvas.height);
      cxt.fillStyle = "white";
      cxt.fillRect(0, 0, canvas.width, canvas.height);
      cxt.strokeRect(x, y, lastPosition.x - x, lastPosition.y - y);
    } else {
      cxt.lineTo(x, y);
      cxt.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setLastPosition(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h1>Canvas Area</h1>
      <div className="canvas-controls">
        <p>Selected Color: {selectedColor}</p>
        <p>Selected Brush Size: {selectedBrushSize}</p>
        <p>Selected Brush: {selectedBrush}</p>
      </div>
      <div
        className="canvas"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* Canvas drawing logic will go here */}
        <canvas
          style={{
            border: "1px solid black",
            width: "100%",
            height: "100%",
          }}
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          aria-label="Drawing Canvas"
          tabIndex={0} // Make the canvas focusable
        ></canvas>
      </div>
    </div>
  );
}
