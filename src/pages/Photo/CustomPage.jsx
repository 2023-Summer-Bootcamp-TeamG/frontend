/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { MdDraw, MdOutlineEmojiEmotions } from 'react-icons/md';
import { PiTextTBold } from 'react-icons/pi';
import { useLocation, useNavigate } from 'react-router-dom';

import next from '../../assets/next.png';
import prev from '../../assets/prev.png';
import TeamName from '../../components/Common/TeamName';
import DrawZ from '../../components/Photo/Custom/Canvas/DrawZ';
import StickerZ from '../../components/Photo/Custom/Canvas/StickerZ';
import TextZ from '../../components/Photo/Custom/Canvas/TextZ';
import CustomModal from '../../components/Photo/Custom/CustomModal';
import Draw from '../../components/Photo/Custom/Draw';
import Stickers from '../../components/Photo/Custom/Stickers';
import Text from '../../components/Photo/Custom/Text';
import { FabricCanvasContext } from '../../utils/FabricCanvasContext';

export default function CustomPage() {
  const location = useLocation();
  const { capturedData, width, height } = location.state;

  const fabricCanvasRef = useRef(null);

  const [select, setSelect] = useState('Draw');

  const [modalOpen, setModalOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState('');

  const contentRef = useRef(null);
  const navigate = useNavigate();

  const captureContent = async () => {
    const canvas = await html2canvas(contentRef.current);
    const image = canvas.toDataURL('');
    setCapturedImage(image);
  };

  const handleNextClick = async () => {
    await captureContent();
    setModalOpen(true);
  };

  const handleModalClose = (confirmed, title, image) => {
    setModalOpen(false);
    if (confirmed) {
      navigate('/photo/final', { state: { title, image } }); // 타이틀과 이미지 URL 전달
    }
  };

  useEffect(() => {
    console.log('width : ', width);
    console.log('height : ', height);
  }, []);

  return (
    <FabricCanvasContext.Provider value={fabricCanvasRef}>
      <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
        <div className="header flex justify-between">
          <TeamName />
          <div />
          <div className="flex items-center justify-end mr-20">
            <img
              src={prev}
              alt="prev"
              className="h-[5rem] w-[6rem] mr-8 cursor-pointer"
              onClick={() => {
                navigate('/photo/filter');
              }}
            />
            <img
              src={next}
              alt="next"
              className="h-[5rem] w-[6rem] cursor-pointer"
              onClick={() => {
                handleNextClick();
              }}
            />
          </div>
        </div>
        <CustomModal
          isOpen={modalOpen}
          onClose={handleModalClose}
          imageSrc={capturedImage}
        />

        <div className="body flex items-center justify-center">
          <div className="flex w-[66rem] h-[42rem] pt-20 bg-cover bg-[url('./assets/sketch.png')]">
            <div className="h-full  w-[49rem] flex justify-center items-center">
              <div
                className="flex items-center justify-center"
                ref={contentRef}
                style={{
                  height,
                  width,
                }}
              >
                <img
                  src={capturedData}
                  alt="Captured Content"
                  style={{
                    height,
                    width,
                  }}
                />

                <DrawZ activeTab={select} width={width} height={height} />
                <StickerZ activeTab={select} width={width} height={height} />
                <TextZ activeTab={select} width={width} height={height} />
              </div>
            </div>

            <div className="sidebar flex flex-col">
              <div className="flex justify-center text-base font-bold w-[15rem] mt-2 text-gray-400">
                <div
                  className={`flex flex-col items-center cursor-pointer mr-[2rem] ${
                    select === 'Draw' ? 'text-black' : ''
                  }`}
                  onClick={() => {
                    setSelect('Draw');
                  }}
                >
                  <MdDraw size={32} />
                  <div>그리기</div>
                </div>
                <div
                  className={`flex flex-col items-center cursor-pointer mr-[2rem] ${
                    select === 'Stickers' ? 'text-black' : ''
                  }`}
                  onClick={() => {
                    setSelect('Stickers');
                  }}
                >
                  <MdOutlineEmojiEmotions size={32} />
                  <div>스티커</div>
                </div>
                <div
                  className={`flex flex-col items-center cursor-pointer  ${
                    select === 'Text' ? 'text-black' : ''
                  }`}
                  onClick={() => {
                    setSelect('Text');
                  }}
                >
                  <PiTextTBold size={32} />
                  <div>텍스트</div>
                </div>
              </div>
              <div className="my-5" />
              {select === 'Draw' && (
                <div className="w-[15rem]">
                  <Draw />
                </div>
              )}
              {select === 'Stickers' && (
                <div className="w-[15rem]">
                  <Stickers />
                </div>
              )}
              {select === 'Text' && (
                <div className="w-[15rem]">
                  <Text />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </FabricCanvasContext.Provider>
  );
}
