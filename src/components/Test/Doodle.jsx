/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';

function FabricCanvas() {
  const [lineWidth, setLineWidth] = useState(2);
  const [lineColor, setLineColor] = useState('black');
  const [shadowColor, setShadowColor] = useState('');
  const [shadowWidth, setShadowWidth] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });

    // 브러시 설정 업데이트 함수
    const updateBrush = () => {
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.width = lineWidth;
      canvas.freeDrawingBrush.color = lineColor;

      if (shadowColor && shadowWidth > 0) {
        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
          color: shadowColor,
          blur: shadowWidth,
        });
      } else {
        canvas.freeDrawingBrush.shadow = null;
      }
    };

    updateBrush();

    return () => {
      canvas.dispose();
    };
  }, [lineWidth, lineColor, shadowColor, shadowWidth]);

  return (
    <div>
      <div className="controls">
        <label>
          Line Width:
          <input
            type="number"
            value={lineWidth}
            onChange={(e) => setLineWidth(parseInt(e.target.value))}
          />
        </label>
        <label>
          Line Color:
          <input
            type="color"
            value={lineColor}
            onChange={(e) => setLineColor(e.target.value)}
          />
        </label>
        <label>
          Shadow Color:
          <input
            type="color"
            value={shadowColor}
            onChange={(e) => setShadowColor(e.target.value)}
          />
        </label>
        <label>
          Shadow Width:
          <input
            type="number"
            value={shadowWidth}
            onChange={(e) => setShadowWidth(parseInt(e.target.value))}
          />
        </label>
      </div>
      <canvas ref={canvasRef} width="800" height="600" />
    </div>
  );
}
export default FabricCanvas;
