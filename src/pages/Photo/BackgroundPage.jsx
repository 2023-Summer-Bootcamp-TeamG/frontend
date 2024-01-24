/* eslint-disable react/self-closing-comp */
/* eslint-disable simple-import-sort/imports */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SelectBackground from '../../components/Photo/Background/SelectBackground';
import Frame4w from '../../components/Photo/BasicFrame/Frame4w';
import Frame4long from '../../components/Photo/BasicFrame/Frame4long';
import Frame2l from '../../components/Photo/BasicFrame/Frame2l';
import Frame2w from '../../components/Photo/BasicFrame/Frame2w';
import Frame1 from '../../components/Photo/BasicFrame/Frame1';
import Frame4l from '../../components/Photo/BasicFrame/Fream4l';
import useImageStore from '../../stores/Background/useImageStore';
import Screen from '../../components/Common/Screen';

export default function BackgroundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = useImageStore();

  const stateOne = location.state;
  useEffect(() => {
    console.log('Selected state:', stateOne);
  }, [stateOne]);

  return (
    <div>
      <Screen stateOne={stateOne} path="/photo/select">
        <div className="flex">
          <div className="flex items-center justify-center w-[calc(115vh)] relative">
            {stateOne === '2x2_w' && <Frame4w frameUrl={imageUrl} />}
            {stateOne === '2x2_l' && <Frame4l frameUrl={imageUrl} />}
            {stateOne === '4x1' && <Frame4long frameUrl={imageUrl} />}
            {stateOne === '2x1_w' && <Frame2w frameUrl={imageUrl} />}
            {stateOne === '2x1_l' && <Frame2l frameUrl={imageUrl} />}
            {stateOne === '1x1' && <Frame1 frameUrl={imageUrl} />}
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-[0.2rem] absolute right-0 h-full bg-black " />
          </div>
          <div className="m-3.5" />
          <div>
            <SelectBackground
              className="h-calc(100vh - 10rem)"
              num={stateOne}
            />
          </div>
        </div>
      </Screen>
    </div>
  );
}
