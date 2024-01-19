import { SketchPicker } from 'react-color';

import useBrushColorStore from '../../../stores/Brush/BrushColorStore';
import useBrushSizeStore from '../../../stores/Brush/BrushSizeStore';

export default function Draw() {
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
    <div className="bg-white mt-4 p-4 h-[30rem] w-[19rem] rounded-xl border-black border shadow-[0_4px_12.3px_0px_rgba(0,0,0,0.3)]">
      <SketchPicker
        color={brushColor}
        onChange={handleColorChange}
        width="16rem"
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
      <div className="text-sm mt-2">
        {' '}
        * 그림을 그리고 <span className="font-bold text-red-600">Save</span>를
        눌러주세요!
      </div>
    </div>
  );
}
