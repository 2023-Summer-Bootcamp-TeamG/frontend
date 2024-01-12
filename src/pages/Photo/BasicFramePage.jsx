import { useState } from 'react';

import TeamName from '../../components/Common/TeamName';
import Cut4 from '../../components/Photo/BasicFrame/Cut4';
import Cut6 from '../../components/Photo/BasicFrame/Cut6';
import Cut8 from '../../components/Photo/BasicFrame/Cut8';
import CutBtn from '../../components/Photo/BasicFrame/CutBtn';

export default function BasicFramePage() {
  const [select, setSelect] = useState('');

  return (
    <div className="h-screen">
      <TeamName />
      <div className="flex justify-center">
        <div className="text-xl m-14">
          <CutBtn select={select} setSelect={setSelect} content="4Cut" />
        </div>
        <div className="text-xl m-14">
          <CutBtn select={select} setSelect={setSelect} content="6Cut" />
        </div>
        <div className="text-xl m-14">
          <CutBtn select={select} setSelect={setSelect} content="8Cut" />
        </div>
      </div>
      <div className="flex justify-around">
        {select === '4Cut' && <Cut4 />}
        {select === '6Cut' && <Cut6 />}
        {select === '8Cut' && <Cut8 />}
      </div>

      <div className="absolute bottom-0 flex ml-60">
        <div className="bg-[url('./assets/images/pixelpeople.png')] items-ends h-32 w-[5rem]" />
      </div>
    </div>
  );
}
