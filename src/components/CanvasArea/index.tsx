import React, { useEffect } from "react";

interface CanvasAreaProps {
  selectedColor: string;
  selectedBrushSize: number;
  selectedBrush: string;
}

export default function CanvasArea({
  selectedColor,
  selectedBrushSize,
  selectedBrush,
}: CanvasAreaProps): React.JSX.Element {
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [lastPosition, setLastPosition] = React.useState<{
    x: number;
    y: number;
  } | null>(null);

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setIsDrawing(true);
    setLastPosition({ x, y });
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(x, y);
    if (selectedBrush === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = selectedColor;
    }
    ctx.lineWidth = selectedBrushSize;
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !lastPosition) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (selectedBrush === "rectangle") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeRect(
        lastPosition.x,
        lastPosition.y,
        x - lastPosition.x,
        y - lastPosition.y
      );
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setLastPosition(null);
  };

  return (
    <div
      className="canvas-area"
      style={{ display: "felx", width: "100%", height: "100vh" }}
    >
      <h1>Canvas Area</h1>
      <p>Selected Color: {selectedColor}</p>
      <p>Selected Brush Size: {selectedBrushSize}</p>
      <p>Selected Brush: {selectedBrush}</p>
      {/* Here you would implement the canvas drawing logic */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{
          border: "1px solid black",
          width: "100%",
          backgroundColor: "#fff",
          height: "100%",
        }}
      ></canvas>
    </div>
  );
}
