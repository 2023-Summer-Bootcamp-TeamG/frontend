/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { MdDraw, MdOutlineEmojiEmotions } from 'react-icons/md';
import { PiTextTBold } from 'react-icons/pi';

import Draw from './Draw';
import Stickers from './Stickers';
import Text from './Text';

export default function CustomBox() {
  const [select, setSelect] = useState('Draw');
  return (
    <div className="basis-1/4 mr-10 flex flex-col items-center">
      <div className="flex text-gray-400 font-bold text-base">
        <div
          className={`flex flex-col items-center cursor-pointer mr-10 ${
            select === 'Draw' ? 'text-black' : ''
          }`}
          onClick={() => {
            setSelect('Draw');
          }}
        >
          <MdDraw size={32} />
          <div>그리기</div>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer mr-10 ${
            select === 'Stickers' ? 'text-black' : ''
          }`}
          onClick={() => {
            setSelect('Stickers');
          }}
        >
          <MdOutlineEmojiEmotions size={32} />
          <div>스티커</div>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer  ${
            select === 'Text' ? 'text-black' : ''
          }`}
          onClick={() => {
            setSelect('Text');
          }}
        >
          <PiTextTBold size={32} />
          <div>텍스트</div>
        </div>
      </div>
      {select === 'Draw' && <Draw />}
      {select === 'Stickers' && <Stickers />}
      {select === 'Text' && <Text />}
    </div>
  );
}
