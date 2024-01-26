/* eslint-disable react/button-has-type */
import './custom.css';

import { useState } from 'react';

export default function CustomModal({ isOpen, onClose, imageSrc }) {
  const [title, setTitle] = useState('');

  if (!isOpen) return null;

  const handleNextClick = () => {
    onClose(true, title, imageSrc); // 타이틀과 이미지 URL 전달
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
      <div className="modal-content bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <input
          placeholder="사진 제목을 입력해주세요"
          className="h-10 p-4 m-4 w-[28rem] border-black border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <img
          src={imageSrc}
          alt="Captured"
          className="h-auto w-full object-cover"
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
