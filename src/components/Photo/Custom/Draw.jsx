import { fabric } from 'fabric';
import { useContext } from 'react';
import { SketchPicker } from 'react-color';

import useBrushColorStore from '../../../stores/Brush/BrushColorStore';
import useBrushSizeStore from '../../../stores/Brush/BrushSizeStore';
import { FabricCanvasContext } from '../../../utils/FabricCanvasContext';

export default function Draw() {
  const fabricCanvasRef = useContext(FabricCanvasContext);
  const { brushColor, setBrushColor } = useBrushColorStore();
  const { brushSize, setBrushSize } = useBrushSizeStore();

  const handleBrushSizeChange = (e) => {
    setBrushSize(e.target.value);
  };

  const handleColorChange = (color) => {
    setBrushColor(color.hex);

    document.body.style.backgroundColor = color.hex;
  };
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
      fabricCanvasRef.current.freeDrawingBrush.color = brushColor;
      fabricCanvasRef.current.freeDrawingBrush.width =
        parseInt(brushSize, 10) || 1;
    }
  };

  return (
    <div className="">
      <SketchPicker
        color={brushColor}
        onChange={handleColorChange}
        width="14rem"
      />
      <div className="mt-5">
        <div className="my-2">🖌️ Brush Size : {brushSize}</div>
        <input
          type="range"
          min="1"
          max="30"
          value={brushSize}
          onChange={handleBrushSizeChange}
          className="w-full"
          style={{ accentColor: `${brushColor}` }}
        />
      </div>
      <button className="m-4" type="button" onClick={handleSelect}>
        Select
      </button>
      <button className="m-4" type="button" onClick={handleDraw}>
        Draw
      </button>
    </div>
  );
}
