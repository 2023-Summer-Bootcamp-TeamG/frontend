/* eslint-disable camelcase */
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
  const [basicStickers, setBasicStickers] = useState([]);
  const [myStickers, setMyStickers] = useState([]);
  const [aiStickers, setAiStickers] = useState([]);
  const [refresh, setRefresh] = useState(1);
  const [saveSticker, setSaveSticker] = useState(false);
  const [showAIDetails, setShowAIDetails] = useState(false);
  const [showAIList, setShowAIList] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [t_id, setT_id] = useState('');
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');

  // 이미지 사이즈
  const getImageSize = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: 100, height: 100 });
      };
      img.src = src;
    });
  };

  const handleStickerClick = async (image) => {
    try {
      const size = await getImageSize(image);
      addSticker({
        url: image,
        position: { x: 100, y: 100 },
        size,
      });
    } catch (error) {
      console.error('Error getting image size:', error);
    }
  };
  const getBasicStickers = async () => {
    try {
      const response = await apiV1Instance.get('/stickers/basic');
      console.log(response.data);
      setBasicStickers(response.data);
    } catch (error) {
      alert(error);
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
    // task_id: task_id,
  };

  const pollForAIResult = async (task_id) => {
    try {
      setLoading(true);
      while (true) {
        const response = await apiV1Instance.get(`/stickers/${task_id}`);
        if (response.data.status === 'SUCCESS') {
          console.log('task_id : ', task_id);
          console.log('state : ', response.data.status);
          console.log('result : ', response.data.result);
          setT_id(task_id);
          setLoading(false);
          setSaveSticker(true);
          setUrl(response.data.result);
          return;
        }
      }
    } catch (error) {
      console.error('Error polling for AI result:', error);
    }
  };

  const handleAISubmit = async () => {
    try {
      const response = await apiV1Instance.post('/stickers/ai/', data);
      // setTask_id(response.data);
      console.log('message : ', response.data.message);
      console.log('task_id : ', response.data.task_id);
      pollForAIResult(response.data.task_id);
    } catch (error) {
      alert(error);
    }
  };

  const handleAISave = async () => {
    try {
      const response = await apiV1Instance.post('/stickers/ai/save', {
        task_id: t_id,
      });
      console.log('message : ', response.data.message);
      setShowAIList(false);
      setShowAIDetails(false);
      setSaveSticker(false);
    } catch (error) {
      alert(error);
    }
  };

  const getAiStickers = async () => {
    try {
      const response = await apiV1Instance.get('/stickers/ai/');
      setAiStickers(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleAICancel = () => {
    setShowAIList(false);
    setShowAIDetails(false);
    setSaveSticker(false);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    getBasicStickers();
    getMyStickers();
    getAiStickers();
  }, [refresh]);

  return (
    <div className="">
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
          {basicStickers.map((image, index) => (
            <img
              className="m-2 cursor-pointer"
              key={index}
              src={image.image}
              alt={`Sticker ${index + 1}`}
              onClick={() => handleStickerClick(image.image)}
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
                {aiStickers.map((image, index) => (
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
            <div className="flex items-center justify-center">
              <div className="my-[8rem]" />
              <Lottie animationData={Loading} loop />
            </div>
          )}
          {saveSticker && (
            <div className="flex flex-col justify-center">
              <div className="w-[15rem] h-[15rem] flex justify-center items-center">
                <img
                  src={url}
                  alt="aiSticker"
                  className="w-[12rem] h-[12rem]"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleAISave}
                  className="p-2 text-white w-[5rem] bg-blue-500 rounded-md cursor-pointer"
                >
                  저장
                </button>
                <div className="mx-4" />
                <button
                  onClick={handleAICancel}
                  className="p-2 text-white w-[5rem] bg-blue-500 rounded-md cursor-pointer"
                >
                  취소
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
