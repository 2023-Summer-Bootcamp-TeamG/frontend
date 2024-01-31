/* eslint-disable object-shorthand */
/* eslint-disable react/button-has-type */
import { fabric } from 'fabric';
import { useContext, useEffect, useRef } from 'react';

import useBrushColorStore from '../../../../stores/Brush/BrushColorStore';
import useBrushSizeStore from '../../../../stores/Brush/BrushSizeStore';
import useDrawingStore from '../../../../stores/Drawings/OnScreenDrawingsStore';
import { FabricCanvasContext } from '../../../../utils/FabricCanvasContext';

export default function DrawZ({ activeTab, width, height }) {
  const fabricCanvasRef = useContext(FabricCanvasContext);
  const canvasRef = useRef(null);
  const { brushColor } = useBrushColorStore();
  const { brushSize } = useBrushSizeStore();
  const { addDrawing } = useDrawingStore();

  useEffect(() => {
    if (!fabricCanvasRef.current) {
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
        height: height,
        width: width,
        isDrawingMode: true,
      });

      fabricCanvasRef.current.on('path:created', (event) => {
        const { path } = event;
        const pathData = path.toJSON();
        const essentialData = {
          path: pathData.path, // 경로 데이터
          stroke: pathData.stroke, // 선 색상
          strokeWidth: pathData.strokeWidth, // 선 두께
          strokeLineCap: pathData.strokeLineCap, // 선 끝 모양
          x: pathData.left, // x 좌표
          y: pathData.top, // y 좌표
          fill: 0,
        };

        console.log('Path created: ', pathData);
        console.log('Path created: ', essentialData);

        // console.log('Path created at position: ', drawingData);
        // addDrawing(drawingData);
        addDrawing(essentialData);
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
      className=" absolute bg-transparen "
      style={{ zIndex: activeTab === 'Draw' ? 3 : 1 }}
    >
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
}
