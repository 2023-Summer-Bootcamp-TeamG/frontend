/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { FiPlusCircle } from 'react-icons/fi';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import apiV1Instance from '../../../../api/api-instance';
import useStickerStore from '../../../../stores/Stickers/OnScreenStickersStore';
import getImageStickers from '../../../../utils/iamge';

export default function DetailStickers({ onClose, title }) {
  const addSticker = useStickerStore((state) => state.addSticker);
  const stickers = getImageStickers(title);
  const mySticker = [];

  const getImageSize = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.src = src;
    });
  };

  const handleStickerClick = async (image) => {
    try {
      const size = await getImageSize(image);
      addSticker({
        image,
        position: { top: 100, left: 100 },
        size,
      });
    } catch (error) {
      console.error('Error getting image size:', error);
    }
  };

  const getMyStickers = async () => {
    try {
      const response = await apiV1Instance.get('/stickers/');
      console.log(response.data);
      // myStickers 상태 만들어서 거기에 저장
    } catch (error) {
      alert(error);
    }
  };

  const addMyStickers = async () => {
    try {
      // 스티커 추가 로직
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-white mt-4 p-6 h-[30rem] w-[19rem] rounded-xl border-black border shadow-[0_4px_12.3px_0px_rgba(0,0,0,0.3)]">
      <div className="font-bold m-1 text-lg flex items-center">
        <MdOutlineArrowBackIosNew
          onClick={onClose}
          className="mr-4 cursor-pointer"
        />
        {title}
      </div>
      {title === '나만의 스티커' ? (
        <div className="ml-4 mt-3 text-sm text-red-600">
          <div>* 배경을 제거하고</div>
          <div className="ml-3">스티커로 만들 사진을 추가해주세요</div>
        </div>
      ) : (
        <div />
      )}
      {title === '나만의 스티커' ? (
        <div className="m-4 grid grid-cols-4">
          {mySticker.map((image, index) => (
            <img
              className="m-2 cursor-pointer"
              key={index}
              src={image}
              alt={`Sticker ${index + 1}`}
              onClick={() => handleStickerClick(image)}
            />
          ))}
          <button
            className="mx-2 h-16 w-12 border border-btn-grey flex justify-center items-center rounded-md"
            onClick={() => {
              addMyStickers();
            }}
          >
            <FiPlusCircle size={30} color="#BEBEBE" />
          </button>
        </div>
      ) : (
        <div className="m-4 grid grid-cols-4">
          {stickers.map((image, index) => (
            <img
              className="m-2 cursor-pointer"
              key={index}
              src={image}
              alt={`Sticker ${index + 1}`}
              onClick={() => handleStickerClick(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
