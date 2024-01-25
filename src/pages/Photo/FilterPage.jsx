/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable simple-import-sort/imports */
import html2canvas from 'html2canvas';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import FilterBtn from '../../components/Photo/Fliter/FilterBtn';
import useImageStore from '../../stores/Background/useImageStore';
import Frame4w from '../../components/Photo/BasicFrame/Frame4w';
import Frame4l from '../../components/Photo/BasicFrame/Fream4l';
import Frame4long from '../../components/Photo/BasicFrame/Frame4long';
import Frame2w from '../../components/Photo/BasicFrame/Frame2w';
import Frame2l from '../../components/Photo/BasicFrame/Frame2l';
import Frame1 from '../../components/Photo/BasicFrame/Frame1';
import useFilterStore from '../../stores/Filter/useFilterStore';
import TeamName from '../../components/Common/TeamName';
import Navbar from '../../components/Common/Navbar';

export default function FilterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = useImageStore();
  const { filterUrl } = useFilterStore();
  const [filter, setFilter] = useState('');
  const [applyFilter, setApplyFilter] = useState('');
  const onlyFilter = true;
  const stateOne = location.state;
  const componentRef = useRef(null);

  useEffect(() => {
    if (filter === '원본') {
      setApplyFilter('brightness(1.0)');
    } else if (filter === '밝은') {
      setApplyFilter('brightness(1.2)');
    } else if (filter === '어둡게') {
      setApplyFilter('brightness(0.8)');
    } else if (filter === '흑백') {
      setApplyFilter('grayscale(100%)');
    }
  }, [filter]);

  const captureAndNavigate = async () => {
    // componentRef의 내용을 캡처합니다
    const canvas = await html2canvas(componentRef.current);
    // 캔버스 데이터를 데이터 URL로 변환합니다
    const dataURL = canvas.toDataURL();
    // 사용자 정의 페이지로 이동합니다
    navigate('/photo/custom', { state: { capturedData: dataURL } });
  };
  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <div className="flex justify-between">
        <TeamName />
        <div />
        <Navbar
          pathP="/photo/select"
          pathN="/photo/custom"
          stateOne={stateOne}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-[66rem] h-[42rem] bg-cover bg-[url('./assets/sketch.png')]">
          <div className="flex items-center justify-center">
            <div
              ref={componentRef}
              className="flex items-center justify-center w-[calc(105vh)] relative"
            >
              {stateOne === '2x2_w' && (
                <Frame4w
                  filterUrl={filterUrl}
                  onlyFilter={onlyFilter}
                  frameUrl={imageUrl}
                  applyFilter={applyFilter}
                />
              )}
              {stateOne === '2x2_l' && (
                <Frame4l
                  filterUrl={filterUrl}
                  onlyFilter={onlyFilter}
                  frameUrl={imageUrl}
                  applyFilter={applyFilter}
                />
              )}
              {stateOne === '4x1' && (
                <Frame4long
                  filterUrl={filterUrl}
                  onlyFilter={onlyFilter}
                  frameUrl={imageUrl}
                  applyFilter={applyFilter}
                />
              )}
              {stateOne === '2x1_w' && (
                <Frame2w
                  filterUrl={filterUrl}
                  onlyFilter={onlyFilter}
                  frameUrl={imageUrl}
                  applyFilter={applyFilter}
                />
              )}
              {stateOne === '2x1_l' && (
                <Frame2l
                  filterUrl={filterUrl}
                  onlyFilter={onlyFilter}
                  frameUrl={imageUrl}
                  applyFilter={applyFilter}
                />
              )}
              {stateOne === '1x1' && (
                <Frame1
                  filterUrl={filterUrl}
                  onlyFilter={onlyFilter}
                  frameUrl={imageUrl}
                  applyFilter={applyFilter}
                />
              )}
            </div>
            <div className="flex flex-col mr-8 items-center justify-center">
              <div onClick={() => setFilter('원본')}>
                <FilterBtn
                  filterName="원본"
                  filterColor1="bg-light-brown"
                  filterColor2="white"
                  onClick={() => setFilter('원본')}
                />
              </div>
              <div onClick={() => setFilter('어둡게')}>
                <FilterBtn
                  filterName="어둡게"
                  filterColor1="bg-gray-400"
                  filterColor2="black"
                  onClick={() => setFilter('어둡게')}
                />
              </div>
              <div onClick={() => setFilter('밝은')}>
                <FilterBtn
                  filterName="밝은"
                  filterColor1="bg-yellow-100"
                  filterColor2="black"
                />
              </div>
              <div
                onClick={() => {
                  setFilter('흑백');
                  captureAndNavigate();
                }}
              >
                <FilterBtn
                  filterName="흑백"
                  filterColor1="bg-gray-200"
                  filterColor2="black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-1" />
    </div>
  );
}
