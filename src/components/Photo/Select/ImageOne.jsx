/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable simple-import-sort/imports */
import React, { useCallback, useState, useEffect } from 'react';
import { MdOutlineUploadFile } from 'react-icons/md';

import Webcam from 'react-webcam';
import SelectModal from './SelectModal';
import useFilterStore from '../../../stores/Filter/useFilterStore';

export default function ImageOne({ size }) {
  const [modal1, setModal1] = useState(false);
  const [image1, setImage1] = useState(null);
  const [camera1, setCamera1] = useState(false);
  const webcamRef = React.useRef(null);
  const { setFilterUrl } = useFilterStore();
  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage1(reader.result);
        setFilterUrl(reader.result);
        setModal1(false); // 이미지 선택 후 모달 닫기
      };
      reader.readAsDataURL(file);
    }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage1(imageSrc);
    setFilterUrl(imageSrc);
  }, [setImage1, setFilterUrl]);

  const openModal1 = () => {
    setModal1(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' && !modal1) {
        // 스페이스바를 누르고 모달이 열려 있지 않은 경우에만 capture 함수 호출
        capture();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [capture, modal1]);

  const renderContent1 = () => {
    return (
      <div className="w-full h-full">
        {image1 ? (
          <img src={image1} alt="Uploaded" className={`object-cover ${size}`} />
        ) : (
          camera1 && (
            <Webcam
              videoConstraints={{ facingMode: 'user', aspectRatio: 1 }}
              audio={false}
              ref={webcamRef}
              mirrored
              screenshotFormat="image/jpeg"
              className={`object-cover ${size}`}
            />
          )
        )}
        {!image1 && !camera1 && (
          <div className="flex flex-col items-center justify-center h-full">
            <MdOutlineUploadFile size={40} />
            {/* <div className="mt-2 text-xl">클릭하여 이미지 선택</div> */}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div onClick={openModal1}>{renderContent1()}</div>
      <input
        type="file"
        id="upload"
        accept="image/*"
        onChange={handleImageChange1}
        className="hidden"
      />
      {modal1 && (
        <SelectModal
          setCamera={setCamera1}
          setModal={setModal1}
          handleImageChange={handleImageChange1}
        />
      )}
    </div>
  );
}
