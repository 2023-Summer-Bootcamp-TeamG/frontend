/* eslint-disable no-promise-executor-return */
/* eslint-disable consistent-return */
/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/order */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import apiV1Instance from '../../../../api/api-instance';
import useStickerStore from '../../../../stores/Stickers/OnScreenStickersStore';
import getImageStickers from '../../../../utils/iamge';
import Loading from '../../../../assets/Lottie/loading/Animation - 1706164449804.json';
import Lottie from 'lottie-react';

export default function DetailStickers({ onClose, title }) {
  const addSticker = useStickerStore((state) => state.addSticker);
  const stickers = getImageStickers(title);
  const [myStickers, setMyStickers] = useState([]);
  const [refresh, setRefresh] = useState(1);
  const [showAIDetails, setShowAIDetails] = useState(false);
  const [showAIList, setShowAIList] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

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
      const response = await apiV1Instance.get('/stickers/?page=1&size=12');
      setMyStickers(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await apiV1Instance.post('/stickers/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setRefresh(refresh * -1);
    } catch (error) {
      alert('Error uploading image:', error);
    }
  };

  const handleFileSelect = (files) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      uploadImage(selectedFile);
    }
  };

  const HandleClickAIAdd = () => {
    setShowAIDetails(true);
  };

  const HandleClickAIList = () => {
    setShowAIList(true);
  };

  const data = {
    keyword: keyword,
  };

  const pollForAIResult = async (taskId) => {
    try {
      while (true) {
        setLoading(true);
        const response = await apiV1Instance.get(`/stickers/ai/${taskId}`);
        const statusCode = response.status;

        console.log('AI 결과:', response.data);

        if (statusCode === 202) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else if (statusCode === 200) {
          setLoading(false);
          return response.data;
        } else {
          throw new Error(`Failed to fetch URLs. Status code: ${statusCode}`);
        }
      }
    } catch (error) {
      console.error('Error polling for AI result:', error);
    }
  };

  const handleAISubmit = async () => {
    console.log('Submitted keyword:', keyword);
    try {
      const response = await apiV1Instance.post('/stickers/ai', data);
      const taskId = response.data;
      pollForAIResult(taskId);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    getMyStickers();
  }, [refresh]);
  // 백에서 시간 단축 시켜준다 함. 굳이 롱폴링 안 해도 될듯. 시간 단축이 얼마나 되느냐에 따라 달라지겠지만

  return (
    <div className="bg-white mt-4 p-6 h-[30rem] w-[19rem] rounded-xl border-black border shadow-[0_4px_12.3px_0px_rgba(0,0,0,0.3)]">
      <div className="flex items-center m-1 text-lg font-bold">
        <MdOutlineArrowBackIosNew
          onClick={onClose}
          className="mr-4 cursor-pointer"
        />
        {title}
      </div>
      {title === '나만의 스티커' ? (
        <div className="mt-3 ml-4 text-sm text-red-600">
          <div>* 배경을 제거하고</div>
          <div className="ml-3">스티커로 만들 사진을 추가해주세요</div>
        </div>
      ) : (
        <div />
      )}
      {title === '나만의 스티커' ? (
        <div className="grid grid-cols-4 m-4">
          {myStickers.map((image, index) => (
            <img
              className="m-2 cursor-pointer"
              key={index}
              src={image.image}
              alt={`Sticker ${index + 1}`}
              onClick={() => handleStickerClick(image.image)}
            />
          ))}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => handleFileSelect(e.target.files)}
          />
          <button
            className="flex items-center justify-center w-12 h-16 ml-4 border rounded-md border-btn-grey"
            onClick={() => {
              document.getElementById('fileInput').click();
            }}
          >
            <FiPlusCircle size={30} color="#BEBEBE" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 m-4">
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
      {title === 'AI 스티커' && (
        <div className="flex flex-col items-center justify-center">
          {showAIDetails ? (
            <div className="flex items-center">
              <input
                type="text"
                placeholder="키워드 입력하세요..."
                className="p-2 my-2 mr-1 border border-gray-300 rounded-md"
                value={keyword}
                onChange={handleInputChange}
              />
              <button
                onClick={handleAISubmit}
                className="p-2 text-white bg-blue-500 rounded-md cursor-pointer"
              >
                제출
              </button>
            </div>
          ) : (
            showAIList && (
              <div className="grid grid-cols-4 m-4">
                <Lottie animationData={Loading} loop />
                {myStickers.map((image, index) => (
                  <img
                    className="m-2 cursor-pointer"
                    key={index}
                    src={image.image}
                    alt={`Sticker ${index + 1}`}
                    onClick={() => handleStickerClick(image.image)}
                  />
                ))}
              </div>
            )
          )}

          {!showAIDetails && !showAIList && (
            <div>
              <div
                onClick={HandleClickAIAdd}
                className="text-black text-xl flex items-center bg-gray-300 w-[10rem] rounded-md h-[6rem] justify-center"
              >
                생성하기
              </div>
              <div className="my-8" />
              <div
                onClick={HandleClickAIList}
                className="text-black text-xl flex items-center bg-gray-300 w-[10rem] rounded-md h-[6rem] justify-center"
              >
                스티커 목록
              </div>
            </div>
          )}
          {loading && (
            <div>
              <Lottie animationData={Loading} loop={false} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// export const getImages = async (taskId: string) => {
//   try {
//     while (true) {
//       const response = await baseInstance.get(`/characters/urls/${taskId}`);
//       const statusCode = response.status;

//       if (statusCode === 202) {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       } else if (statusCode === 200) {
//         return response.data;
//       } else {
//         throw new Error(`Failed to fetch URLs. Status code: ${statusCode}`);
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
