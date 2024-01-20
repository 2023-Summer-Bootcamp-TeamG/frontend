import { useEffect, useState } from 'react';

import TeamName from '../../components/Common/TeamName';
import Cut1 from '../../components/Photo/BasicFrame/Cut1';
import Cut2 from '../../components/Photo/BasicFrame/Cut2';
import Cut4 from '../../components/Photo/BasicFrame/Cut4';
import CutBtn from '../../components/Photo/BasicFrame/CutBtn';
import useImageStore from '../../stores/Background/useImageStore';

export default function BasicFramePage() {
  const [select, setSelect] = useState('');
  const { setImageUrl } = useImageStore();
  useEffect(() => {
    setImageUrl('');
  }, []);
  return (
    <div className="h-screen">
      <TeamName />
      <div className="flex justify-center">
        <div className="text-xl m-14">
          <CutBtn select={select} setSelect={setSelect} content="1Cut" />
        </div>
        <div className="text-xl m-14">
          <CutBtn select={select} setSelect={setSelect} content="2Cut" />
        </div>
        <div className="text-xl m-14">
          <CutBtn select={select} setSelect={setSelect} content="4Cut" />
        </div>
      </div>
      <div className="flex justify-around">
        {select === '1Cut' && <Cut1 />}
        {select === '2Cut' && <Cut2 />}
        {select === '4Cut' && <Cut4 />}
      </div>

      <div className="absolute bottom-0 flex ml-60">
        <div className="bg-[url('./assets/images/pixelpeople.png')] items-ends h-32 w-[5rem]" />
      </div>
    </div>
  );
}
