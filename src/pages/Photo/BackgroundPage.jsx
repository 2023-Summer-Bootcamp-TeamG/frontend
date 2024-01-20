/* eslint-disable simple-import-sort/imports */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';
import SelectBackground from '../../components/Photo/Background/SelectBackground';
import Frame4w from '../../components/Photo/BasicFrame/Frame4w';
import Frame4long from '../../components/Photo/BasicFrame/Frame4long';
import Frame2l from '../../components/Photo/BasicFrame/Frame2l';
import Frame2w from '../../components/Photo/BasicFrame/Frame2w';
import Frame1 from '../../components/Photo/BasicFrame/Frame1';
import Frame4l from '../../components/Photo/BasicFrame/Fream4l';
import useImageStore from '../../stores/Background/useImageStore';

export default function BackgroundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = useImageStore();

  const stateOne = location.state;
  useEffect(() => {
    console.log('Selected state:', stateOne);
  }, [stateOne]);

  return (
    <div className="flex flex-col h-screen">
      <TeamName />
      <div className="flex h-[calc(100vh-16rem)]">
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
        <SelectBackground num={stateOne} />
        <ProgressFooter width="w-[13.85rem]" path="/select" />
      </div>
    </div>
  );
}
