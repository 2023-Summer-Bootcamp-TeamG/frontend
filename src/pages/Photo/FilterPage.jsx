/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable simple-import-sort/imports */
import html2canvas from 'html2canvas';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import FilterBtn from '../../components/Photo/Fliter/FilterBtn';
import useImageStore from '../../stores/Background/useImageStore';
import Frame4w from '../../components/Photo/BasicFrame/Frame4w';
import Frame4l from '../../components/Photo/BasicFrame/Frame4l';
import Frame4long from '../../components/Photo/BasicFrame/Frame4long';
import Frame2w from '../../components/Photo/BasicFrame/Frame2w';
import Frame2l from '../../components/Photo/BasicFrame/Frame2l';
import Frame1 from '../../components/Photo/BasicFrame/Frame1';
import useFilterStore from '../../stores/Filter/useFilterStore';
import TeamName from '../../components/Common/TeamName';
import Navbar from '../../components/Common/Navbar';

export default function FilterPage() {
  const location = useLocation();
  const { imageUrl } = useImageStore();
  const { filterUrl } = useFilterStore();
  const [filter, setFilter] = useState('원본');
  const [applyFilter, setApplyFilter] = useState('');
  const [data, setData] = useState('');
  const onlyFilter = true;
  const stateOne = location.state;
  const componentRef = useRef(null);

  const capture = async () => {
    console.log(componentRef);
    const canvas = await html2canvas(componentRef.current);
    const dataURL = canvas.toDataURL();
    // 데이터 저장
    setData(dataURL);
  };
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
    const canvas = await html2canvas(componentRef.current);
    const width = componentRef.current.offsetWidth;
    const height = componentRef.current.offsetHeight;
    console.log('width : ', componentRef.current.offsetWidth);
    console.log('height : ', componentRef.current.offsetHeight);

    const dataURL = canvas.toDataURL();

    navigate('/photo/custom', {
      state: { capturedData: dataURL, width: width, height: height },
    });
  };


  useEffect(() => {
    capture();
  }, [applyFilter]);


  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <div className="flex justify-between">
        <TeamName />
        <div />

        <Navbar pathP="/photo/select" pathN="/photo/custom" stateOne={data} />
      </div>
      <img src={data} alt="a" />
      <div className="flex items-center justify-center">
        <div className="flex w-[66rem] h-[42rem] bg-cover bg-[url('./assets/sketch.png')]">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center ml-48 mr-28 relative">
              {stateOne === '2x2_w' && (
                <div ref={componentRef}>
                  <Frame4w
                    filterUrl={filterUrl}
                    onlyFilter={onlyFilter}
                    frameUrl={imageUrl}
                    applyFilter={applyFilter}
                  />
                </div>
              )}
              {stateOne === '2x2_l' && (
                <div ref={componentRef}>
                  <Frame4l
                    filterUrl={filterUrl}
                    onlyFilter={onlyFilter}
                    frameUrl={imageUrl}
                    applyFilter={applyFilter}
                  />
                </div>
              )}
              {stateOne === '4x1' && (
                <div ref={componentRef}>
                  <Frame4long
                    filterUrl={filterUrl}
                    onlyFilter={onlyFilter}
                    frameUrl={imageUrl}
                    applyFilter={applyFilter}
                  />
                </div>
              )}
              {stateOne === '2x1_w' && (
                <div ref={componentRef}>
                  <Frame2w
                    filterUrl={filterUrl}
                    onlyFilter={onlyFilter}
                    frameUrl={imageUrl}
                    applyFilter={applyFilter}
                  />
                </div>
              )}
              {stateOne === '2x1_l' && (
                <div ref={componentRef}>
                  <Frame2l
                    filterUrl={filterUrl}
                    onlyFilter={onlyFilter}
                    frameUrl={imageUrl}
                    applyFilter={applyFilter}
                    capture={capture}
                  />
                </div>
              )}
              {stateOne === '1x1' && (
                <div ref={componentRef}>
                  <Frame1
                    filterUrl={filterUrl}
                    onlyFilter={onlyFilter}
                    frameUrl={imageUrl}
                    applyFilter={applyFilter}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center">
              <div
                onClick={() => {
                  setFilter('원본');
                }}
              >
                <FilterBtn
                  filterName="원본"
                  filterColor1="bg-light-brown"
                  filterColor2="white"
                />
              </div>
              <div
                onClick={() => {
                  setFilter('어둡게');
                }}
              >
                <FilterBtn
                  filterName="어둡게"
                  filterColor1="bg-gray-400"
                  filterColor2="black"
                />
              </div>
              <div
                onClick={() => {
                  setFilter('밝은');
                }}
              >
                <FilterBtn
                  filterName="밝은"
                  filterColor1="bg-yellow-100"
                  filterColor2="black"
                />
              </div>
              <div
                onClick={() => {
                  setFilter('흑백');
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
