/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import apiV1Instance from '../../../api/api-instance';
import getImageStickers from '../../../utils/iamge';

export default function DetailStickerTest({ onClose, title }) {
  const stickers = getImageStickers(title);
  const [myStickers, setMyStickers] = useState([]);
  const [refresh, setRefresh] = useState(1);

  const getMyStickers = async () => {
    try {
      const response = await apiV1Instance.get('/stickers/?page=1&size=12');
      setMyStickers(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getMyStickers();
  }, [refresh]);

  return (
    <div className="px-10 pt-5 h-[31rem] bg-red-300">
      <div className="title font-bold text-lg flex items-center ">
        <MdOutlineArrowBackIosNew
          onClick={onClose}
          className="mr-4 cursor-pointer"
        />
        {title}
      </div>
      <div className="body h-[25rem] mt-4">
        {title === '나만의 스티커' ? (
          <div className="ml-4 mt-3 text-sm text-red-600">
            <div>* 배경을 제거하고</div>
            <div className="ml-3">스티커로 만들 사진을 추가해주세요</div>
          </div>
        ) : (
          <div />
        )}
        {title === 'AI 스티커' ? (
          <div className="ml-4 mt-3 text-sm text-red-600">
            * 만들고 싶은 스티커를 설명해주세요
          </div>
        ) : (
          <div />
        )}
        <div className="m-4 grid grid-cols-4">
          {title === '나만의 스티커' ? (
            <>
              {myStickers.map((image, index) => (
                <img
                  className="m-2 cursor-pointer h-20"
                  key={index}
                  src={image.image}
                  alt={`Sticker ${index + 1}`}
                  // onClick={() => handleStickerClick(image.image)}
                />
              ))}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: 'none' }}
                // onChange={(e) => handleFileSelect(e.target.files)}
              />
              <button
                className="ml-4 h-16 w-12 border border-btn-grey flex justify-center items-center rounded-md"
                // onClick={() => {
                //   document.getElementById('fileInput').click();
                // }}
              >
                <FiPlusCircle size={30} color="#BEBEBE" />
              </button>
            </>
          ) : (
            <>
              {stickers.map((image, index) => (
                <img
                  className="m-2 cursor-pointer h-20"
                  key={index}
                  src={image}
                  alt={`Sticker ${index + 1}`}
                  // onClick={() => handleStickerClick(image)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
