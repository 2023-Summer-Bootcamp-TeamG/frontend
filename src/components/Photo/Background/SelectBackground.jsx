/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

import apiV1Instance from '../../../api/api-instance';
import './CSB.css';
import useImageStore from '../../../stores/Background/useImageStore';

export default function SelectBackground({ num }) {
  const [frames, setFrames] = useState([]);
  const { imageUrl, setImageUrl } = useImageStore();
  const getAllFrames = async () => {
    try {
      const response = await apiV1Instance.get(`/frames?grid=${num}`);
      setFrames(response.data);
    } catch (error) {
      alert(error);
    }
  };
  console.log(imageUrl);

  useEffect(() => {
    getAllFrames();
  }, []);

  return (
    <div className="flex flex-col items-center w-[14rem] mt-2 overflow-y-auto h-[calc(73vh)] scroll-container">
      {frames.map((frameItem, index) => (
        <div key={index}>
          <img
            alt="background"
            src={frameItem.image}
            className="mx-1 my-4 border-black cursor-pointer max-w-40 max-h-40 hover:border-2"
            onClick={() => {
              setImageUrl(frameItem.image);
            }}
          />
        </div>
      ))}
    </div>
  );
}
