/* eslint-disable import/newline-after-import */
/* eslint-disable simple-import-sort/imports */
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Frame4w from '../../components/Photo/BasicFrame/Frame4w';
import Frame4long from '../../components/Photo/BasicFrame/Frame4long';
import Frame2l from '../../components/Photo/BasicFrame/Frame2l';
import Frame2w from '../../components/Photo/BasicFrame/Frame2w';
import Frame1 from '../../components/Photo/BasicFrame/Frame1';
import Frame4l from '../../components/Photo/BasicFrame/Frame4l';
import useImageStore from '../../stores/Background/useImageStore';
import TeamName from '../../components/Common/TeamName';
import Navbar from '../../components/Common/Navbar';
export default function SelectPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = useImageStore();

  const stateOne = location.state;
  const onlySelect = true;
  useEffect(() => {
    console.log('Selected state:', stateOne);
  }, [stateOne]);
  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <div className="flex justify-between">
        <TeamName />
        <div />
        <Navbar pathN="/photo/filter" stateOne={stateOne} />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-[66rem] h-[42rem] bg-cover bg-[url('./assets/sketch.png')]">
          <div className="flex items-center justify-center w-full h-full">
            {stateOne === '2x2_w' && (
              <Frame4w onlySelect={onlySelect} frameUrl={imageUrl} />
            )}
            {stateOne === '2x2_l' && (
              <Frame4l onlySelect={onlySelect} frameUrl={imageUrl} />
            )}
            {stateOne === '4x1' && (
              <Frame4long onlySelect={onlySelect} frameUrl={imageUrl} />
            )}
            {stateOne === '2x1_w' && (
              <Frame2w onlySelect={onlySelect} frameUrl={imageUrl} />
            )}
            {stateOne === '2x1_l' && (
              <Frame2l onlySelect={onlySelect} frameUrl={imageUrl} />
            )}
            {stateOne === '1x1' && (
              <Frame1 onlySelect={onlySelect} frameUrl={imageUrl} />
            )}
          </div>
          <div className="fixed ml-[26rem] bottom-8">
            SPACE BAR를 누르면 사진이 찍힙니다
          </div>
        </div>
      </div>
      <div className="m-1" />
    </div>
  );
}
