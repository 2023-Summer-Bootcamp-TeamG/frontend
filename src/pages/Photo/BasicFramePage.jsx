/* eslint-disable simple-import-sort/imports */
import { useEffect, useState } from 'react';

import Cut1 from '../../components/Photo/BasicFrame/Cut1';
import Cut2 from '../../components/Photo/BasicFrame/Cut2';
import Cut4 from '../../components/Photo/BasicFrame/Cut4';
import CutBtn from '../../components/Photo/BasicFrame/CutBtn';
import Screen from '../../components/Common/Screen';
import useImageStore from '../../stores/Background/useImageStore';

export default function BasicFramePage() {
  const [select, setSelect] = useState('');
  const { setImageUrl } = useImageStore();
  useEffect(() => {
    setImageUrl('');
  }, []);
  return (
    <div className="h-screen">
      <Screen>
        <div>
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
        </div>
      </Screen>
    </div>
  );
}
