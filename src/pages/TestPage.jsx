/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';

import Screen from '../components/Common/Screen';
import DrawTest from '../components/Test/sidebar/DrawTest';
import StickerTest from '../components/Test/sidebar/StickerTest';
import TextTest from '../components/Test/sidebar/TextTest';
import Title from '../components/Test/sidebar/Title';

export default function TestPage() {
  const [select, setSelect] = useState('Draw');

  return (
    <div>
      <Screen>
        <div className="flex w-full h-full">
          <div className="bg-orange-300 w-[55rem] border border-black flex justify-center items-center">
            <div className="h-[28rem] w-[40rem] border border-black">
              사진들어갈 곳(너비랑 높이는 넘어오는 사진 크기에 맞춰)
            </div>
          </div>
          <div className=" w-[25rem] ">
            <Title select={select} setSelect={setSelect} />
            <div className="body h-[31rem] flex flex-col  ">
              {select === 'Draw' && <DrawTest />}
              {select === 'Stickers' && <StickerTest />}
              {select === 'Text' && <TextTest />}
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
}
