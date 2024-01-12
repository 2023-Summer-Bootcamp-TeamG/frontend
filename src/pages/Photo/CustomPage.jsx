/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line import/newline-after-import, simple-import-sort/imports
import { MdDraw, MdOutlineEmojiEmotions } from 'react-icons/md';
import { PiTextTBold } from 'react-icons/pi';

import frame1 from '../../assets/frame/2x2_w.png';
import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';
// eslint-disable-next-line import/order
import { useState } from 'react';
import Draw from '../../components/Photo/Custom/Draw';
import Text from '../../components/Photo/Custom/Text';
import Stickers from '../../components/Photo/Custom/Stickers';

export default function CustomPage() {
  const [select, setSelect] = useState('');
  return (
    <div className="h-screen">
      <div>
        <TeamName />
      </div>
      <div className="flex justify-end text-3xl">
        <div
          onClick={() => {
            setSelect('Draw');
          }}
        >
          <MdDraw />
        </div>
        <div className="mx-4" />
        <div
          onClick={() => {
            setSelect('Stickers');
          }}
        >
          <MdOutlineEmojiEmotions />
        </div>
        <div className="mx-4" />
        <div
          onClick={() => {
            setSelect('Text');
          }}
        >
          <PiTextTBold />
        </div>
        <div className="mx-28 m-8" />
      </div>
      <div className="flex">
        <div className="m-16 " />
        <img
          src={frame1}
          alt="frame1"
          className="text-center ml-24 h-[28rem]"
        />
        <div className="m-8" />
        <div className="flex justify-around">
          {select === 'Draw' && <Draw />}
          {select === 'Stickers' && <Stickers />}
          {select === 'Text' && <Text />}
        </div>
      </div>
      <div>
        <ProgressFooter width="w-[40.4rem]" path="/final" />
      </div>
    </div>
  );
}
