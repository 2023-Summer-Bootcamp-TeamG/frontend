/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import { fabric } from 'fabric';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      height: 500,
      width: 500,
      isDrawingMode: true,
      selectionLineWidth: 3,
    });
    setCanvas(canvas);
  }, []);

  const handleSelect = () => {
    if (canvas) {
      canvas.isDrawingMode = false;
    }
  };

  const handleDraw = () => {
    if (canvas) {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = 'blue';
      canvas.freeDrawingBrush.width = 30;
    }
  };

  return (
    <>
      <button className="m-4" onClick={handleSelect}>
        Select
      </button>
      <button className="m-4" onClick={handleDraw}>
        Draw
      </button>
      <canvas id="canvas" />
    </>
  );
}
