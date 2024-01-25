/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';

export default function TestPage() {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    if (!fabricCanvasRef.current) {
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
        height: 500,
        width: 500,
        isDrawingMode: true,
      });
    }

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null;
      }
    };
  }, []);

  const handleSelect = () => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.isDrawingMode = false;
    }
  };

  const handleDraw = () => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.isDrawingMode = true;
      fabricCanvasRef.current.freeDrawingBrush = new fabric.PencilBrush(
        fabricCanvasRef.current,
      );
      fabricCanvasRef.current.freeDrawingBrush.color = 'blue';
      fabricCanvasRef.current.freeDrawingBrush.width = 30;
    }
  };

  return (
    <>
      <button className="m-4" type="button" onClick={handleSelect}>
        Select
      </button>
      <button className="m-4" type="button" onClick={handleDraw}>
        Draw
      </button>
      <canvas ref={canvasRef} id="canvas" />
    </>
  );
}
