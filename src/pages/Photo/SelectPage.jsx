/* eslint-disable simple-import-sort/imports */
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Screen from '../../components/Common/Screen';
import Frame4w from '../../components/Photo/BasicFrame/Frame4w';
import Frame4long from '../../components/Photo/BasicFrame/Frame4long';
import Frame2l from '../../components/Photo/BasicFrame/Frame2l';
import Frame2w from '../../components/Photo/BasicFrame/Frame2w';
import Frame1 from '../../components/Photo/BasicFrame/Frame1';
import Frame4l from '../../components/Photo/BasicFrame/Fream4l';
import useImageStore from '../../stores/Background/useImageStore';

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
    <div>
      <Screen stateOne={stateOne} path="/photo/filter">
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
        <div className="fixed">SPACE BAR를 누르면 사진이 찍힙니다</div>
        {/* 일단 사진 찍는 법 설명 / 임시
        저 말(space바 누르라는 설명)을 낙서 체로 넣을 까 고민
        이미지만 넣을건지 문장도 넣을건지 고민
        4long이면 비교적 이미지와 문장이 커서 55에서 40으로 줄이고 문장 제거 /임시 */}
      </Screen>
    </div>
  );
}
