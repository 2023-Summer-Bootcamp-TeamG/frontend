/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { MdDraw, MdOutlineEmojiEmotions } from 'react-icons/md';
import { PiTextTBold } from 'react-icons/pi';
import { useLocation } from 'react-router-dom';

import apiV1Instance from '../../api/api-instance';
import next from '../../assets/next.png';
import TeamName from '../../components/Common/TeamName';
import DrawZ from '../../components/Photo/Custom/Canvas/DrawZ';
import StickerZ from '../../components/Photo/Custom/Canvas/StickerZ';
import TextZ from '../../components/Photo/Custom/Canvas/TextZ';
import Draw from '../../components/Photo/Custom/Draw';
import Stickers from '../../components/Photo/Custom/Stickers';
import Text from '../../components/Photo/Custom/Text';
import useDrawingStore from '../../stores/Drawings/OnScreenDrawingsStore';
import useStickerStore from '../../stores/Stickers/OnScreenStickersStore';
import useTextStore from '../../stores/Text/OnScreenTextStore';

export default function EditPage() {
  const location = useLocation();
  const id = location.state;

  const [select, setSelect] = useState('Draw');
  const [capturedImage, setCapturedImage] = useState('');
  const [imageUrl, setImageUrl] = useState();

  const height = 512;
  const width = 368;

  const contentRef = useRef(null);

  const getPhotoDetail = async () => {
    try {
      const response = await apiV1Instance.get(`/photos/${id}/`);
      console.log(response.data);
      setImageUrl(response.data.photo_url);
      const { stickers, textboxes, drawings } = response.data;

      // Populate the drawing store
      drawings.forEach((drawing) => {
        useDrawingStore.getState().addDrawing(drawing);
      });

      // Populate the sticker store
      stickers.forEach((sticker) => {
        useStickerStore.getState().addSticker(sticker);
      });

      // Populate the text store
      textboxes.forEach((textbox) => {
        useTextStore.getState().addText(textbox);
      });
    } catch (error) {
      alert(error);
    }
  };

  const { drawings } = useDrawingStore();
  const { stickers } = useStickerStore();
  const { texts } = useTextStore();

  const captureContent = async () => {
    const canvas = await html2canvas(contentRef.current, { useCORS: true });
    const image = canvas.toDataURL('');
    setCapturedImage(image);
  };

  const updatePhoto = async () => {
    const data = {
      result_photo_data: capturedImage,
      stickers: '/',
      textboxes: '/',
      drawings: '/',
    };
    try {
      const response = await apiV1Instance.put(`/photohs/${id}/`, data);
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  console.log(drawings, stickers, texts);

  useEffect(() => {
    getPhotoDetail();
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
        <div className="header flex justify-between">
          <TeamName />
          <div className="flex items-center justify-end mr-20">
            <img
              src={next}
              alt="next"
              className="h-[5rem] w-[6rem] cursor-pointer"
              onClick={() => {
                alert('수정되었습니다');
                // captureContent();
                // updatePhoto();
              }}
            />
          </div>
        </div>

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
                  src={imageUrl}
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
    </div>
  );
}
