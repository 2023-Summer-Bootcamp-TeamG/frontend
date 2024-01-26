/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
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

export default function CustomPage() {
  const location = useLocation();
  const capturedData = location.state?.capturedData;

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

  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <div className="flex justify-between">
        <TeamName />
        <div />
        <div className="flex items-center mr-20 justify-end basis-1/3">
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

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[66rem] h-[42rem] pt-20 bg-cover bg-[url('./assets/sketch.png')]">
          <div
            className="h-[25rem] w-[41rem] flex items-center justify-center relative mr-20 "
            ref={contentRef}
          >
            <img
              src={capturedData}
              alt="Captured Content"
              className="h-full w-full"
            />
            <DrawZ activeTab={select} />
            <StickerZ activeTab={select} />
            <TextZ activeTab={select} />
          </div>
          <CustomModal
            isOpen={modalOpen}
            onClose={handleModalClose}
            imageSrc={capturedImage}
          />

          <div className="flex flex-col items-center">
            <div className="flex text-gray-400 font-bold text-base">
              <div
                className={`flex flex-col items-center cursor-pointer mr-10 ${
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
                className={`flex flex-col items-center cursor-pointer mr-10 ${
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
            {select === 'Draw' && <Draw />}
            {select === 'Stickers' && <Stickers />}
            {select === 'Text' && <Text />}
          </div>
        </div>
      </div>
    </div>
  );
}
