import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';

import useBrushColorStore from '../../stores/Brush/BrushColorStore';
import useBrushSizeStore from '../../stores/Brush/BrushSizeStore';

export default function ZTestD({ select }) {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  const { brushColor } = useBrushColorStore();
  const { brushSize } = useBrushSizeStore();

  useEffect(() => {
    if (!fabricCanvasRef.current) {
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
        height: 448,
        width: 640,
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

  useEffect(() => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.freeDrawingBrush.color = brushColor;
      fabricCanvasRef.current.freeDrawingBrush.width =
        parseInt(brushSize, 10) || 1;
    }
  }, [brushColor, brushSize]);

  return (
    <div
      className="h-[28rem] w-[40rem] bg-transparent absolute bg-orange-600"
      style={{ zIndex: select === 'Draw' ? 3 : 1 }}
    >
      <canvas ref={canvasRef} id="canvas">
        a
      </canvas>
    </div>
  );
}
