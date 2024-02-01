/* eslint-disable react/button-has-type */
import './custom.css';

import { useState } from 'react';

import apiV1Instance from '../../../api/api-instance';

export default function CustomModal({ isOpen, onClose, imageSrc }) {
  const [title, setTitle] = useState('');
  const [photoId, setPhotoId] = useState(null);

  if (!isOpen) return null;

  const createQR = async () => {
    try {
      const response = await apiV1Instance.post('/photos/qr', {
        image: imageSrc,
      });
      setPhotoId(response.data.photo_id);
      console.log(response.data.photo_id);
      return response.data.photo_id; // photoId 반환
    } catch (error) {
      alert(error);
      return null; // 에러 발생 시 null 반환
    }
  };

  const handleNextClick = async () => {
    const qrId = await createQR(); // createQR 완료를 기다림
    onClose(true, title, imageSrc, qrId); // 여기서 qrId를 직접 전달
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
      <div className="modal-content bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <input
          placeholder="사진 제목을 입력해주세요"
          className="h-10 p-4 m-4 w-[27.5rem] border-black border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <img
          src={imageSrc}
          alt="Captured"
          className="h-auto w-full object-cover px-4"
        />
        <div className="flex justify-evenly p-4">
          <button
            onClick={handleNextClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            다음
          </button>
          <button
            onClick={() => onClose(false)}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
