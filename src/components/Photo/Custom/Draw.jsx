import { SketchPicker } from 'react-color';

import useBrushColorStore from '../../../stores/Brush/BrushColorStore';
import useBrushSizeStore from '../../../stores/Brush/BrushSizeStore';
import DrawBtns from './Canvas/DrawBtns';

export default function Draw({ contentRef }) {
  const { brushColor, setBrushColor } = useBrushColorStore();
  const { brushSize, setBrushSize } = useBrushSizeStore();

  const handleBrushSizeChange = (e) => {
    setBrushSize(e.target.value);
  };

  const handleColorChange = (color) => {
    setBrushColor(color.hex);

    document.body.style.backgroundColor = color.hex;
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
      <DrawBtns contentRef={contentRef} />
    </div>
  );
}
