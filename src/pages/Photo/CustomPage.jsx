/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { MdDraw, MdOutlineEmojiEmotions } from 'react-icons/md';
import { PiTextTBold } from 'react-icons/pi';

import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';
import DrawZ from '../../components/Photo/Custom/Canvas/DrawZ';
import StickerZ from '../../components/Photo/Custom/Canvas/StickerZ';
import TextZ from '../../components/Photo/Custom/Canvas/TextZ';
import Draw from '../../components/Photo/Custom/Draw';
import Stickers from '../../components/Photo/Custom/Stickers';
import Text from '../../components/Photo/Custom/Text';

export default function CustomPage() {
  const [select, setSelect] = useState('Draw');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col h-screen">
      <TeamName />

      <div className="h-[calc(100vh-16rem)] flex items-center justify-center">
        <div className="h-[28rem] w-[40rem] flex items-center justify-center relative">
          <DrawZ activeTab={activeTab} />
          <StickerZ activeTab={activeTab} />
          <TextZ activeTab={activeTab} />
          {select === 'Draw' && <DrawZ activeTab={activeTab} />}
          {select === 'Stickers' && <StickerZ activeTab={activeTab} />}
          {select === 'Text' && <TextZ activeTab={activeTab} />}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex text-gray-400 font-bold text-base">
            <div
              className={`flex flex-col items-center cursor-pointer mr-10 ${
                select === 'Draw' ? 'text-black' : ''
              }`}
              onClick={() => {
                setSelect('Draw');
                setActiveTab(0);
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
                setActiveTab(1);
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
                setActiveTab(2);
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
      </div>
      <ProgressFooter width="w-[40.4rem]" path="/final" />
    </div>
  );
}
