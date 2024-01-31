/* eslint-disable simple-import-sort/imports */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import TeamName from '../../components/Common/TeamName';
import SelectBackground from '../../components/Photo/Background/SelectBackground';
import Frame4w from '../../components/Photo/BasicFrame/Frame4w';
import Frame4long from '../../components/Photo/BasicFrame/Frame4long';
import Frame2l from '../../components/Photo/BasicFrame/Frame2l';
import Frame2w from '../../components/Photo/BasicFrame/Frame2w';
import Frame1 from '../../components/Photo/BasicFrame/Frame1';
import Frame4l from '../../components/Photo/BasicFrame/Frame4l';
import useImageStore from '../../stores/Background/useImageStore';
import Navbar from '../../components/Common/Navbar';

export default function BackgroundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = useImageStore();

  const stateOne = location.state;
  useEffect(() => {
    console.log('Selected state:', stateOne);
  }, [stateOne]);
  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <div className="flex justify-between">
        <TeamName />
        <div />
        <Navbar pathN="/photo/select" stateOne={stateOne} />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-[66rem] h-[42rem] bg-cover bg-[url('./assets/sketch.png')]">
          <div className="flex items-center justify-center basis-3/4">
            {stateOne === '2x2_w' && (
              <Frame4w frameUrl={imageUrl} className="max-w-96 max-h-96" />
            )}
            {stateOne === '2x2_l' && (
              <Frame4l frameUrl={imageUrl} className="max-w-96 max-h-96" />
            )}
            {stateOne === '4x1' && (
              <Frame4long frameUrl={imageUrl} className="max-w-96 max-h-96" />
            )}
            {stateOne === '2x1_w' && (
              <Frame2w frameUrl={imageUrl} className="max-w-96 max-h-96" />
            )}
            {stateOne === '2x1_l' && (
              <Frame2l frameUrl={imageUrl} className="max-w-96 max-h-96" />
            )}
            {stateOne === '1x1' && (
              <Frame1 frameUrl={imageUrl} className="max-w-96 max-h-96" />
            )}
          </div>
          <div className="my-20 mr-4">
            <SelectBackground num={stateOne} />
          </div>
        </div>
      </div>
      <div className="m-1" />
    </div>
  );
}
