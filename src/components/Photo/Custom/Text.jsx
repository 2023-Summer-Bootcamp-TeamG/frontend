/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { CirclePicker } from 'react-color';

import useTextStore from '../../../stores/Text/OnScreenTextStore';

export default function Text() {
  const [inputValue, setInputValue] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textSize, setTextSize] = useState(16);

  const addText = useTextStore((state) => state.addText);

  const fonts = [
    'Arial',
    'Georgia',
    'Times New Roman',
    'Verdana',
    'Courier New',
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleColorChange = (color) => {
    setTextColor(color.hex);
  };
  const handleFontChange = (e) => {
    setFontFamily(e.target.value);
  };
  const handleTextSizeChange = (e) => {
    setTextSize(e.target.value); // 슬라이더 값에 따라 텍스트 크기 변경
  };

  const handleAddText = () => {
    // Zustand 스토어에 텍스트와 스타일 속성을 추가
    addText({
      value: inputValue,
      size: textSize,
      color: textColor,
      fontFamily,
      position: { top: 100, left: 100 },
    });

    // 입력 필드 초기화
    setInputValue('');
  };

  const colors = [
    '#f44336',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#4caf50',
    '#ffffff',
    '#ffeb3b',
    '#ff9800',
    '#795548',
    '#000000',
    '#ff48d1',
  ];

  return (
    <div className=" flex flex-col ">
      <CirclePicker
        colors={colors}
        className="my-5"
        onChangeComplete={handleColorChange}
      />
      <select
        onChange={handleFontChange}
        className="my-4 p-2 w-[15rem] border border-black  rounded "
      >
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="text"
        className="my-3 p-2 w-[15rem] border border-black  rounded"
      />
      <input
        type="range"
        min="10"
        max="30"
        value={textSize}
        onChange={handleTextSizeChange}
        className=" my-3  w-[15rem]"
      />

      <div
        className="h-9 my-3 mt-16 w-[15rem] text-center border-black border-b-2"
        style={{ fontFamily, color: textColor, fontSize: `${textSize}px` }}
      >
        {inputValue}
      </div>
      <button
        onClick={handleAddText}
        className="w-[15rem] bg-blue-500 text-white p-2 rounded"
      >
        TextBox 생성
      </button>
    </div>
  );
}
