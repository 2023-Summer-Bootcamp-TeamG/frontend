/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { MdDraw, MdOutlineEmojiEmotions } from 'react-icons/md';
import { PiTextTBold } from 'react-icons/pi';

export default function Title({ select, setSelect }) {
  return (
    <div className="title h-[6rem] flex justify-center items-center border-b border-gray-500">
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
    </div>
  );
}
