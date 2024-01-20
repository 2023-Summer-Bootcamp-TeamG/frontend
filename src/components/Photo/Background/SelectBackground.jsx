/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

import apiV1Instance from '../../../api/api-instance';
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
    <div className="basis-1/4 bg-white flex flex-col items-center p-4 overflow-y-auto h-[calc(100vh-5rem)]">
      {frames.map((frameItem, index) => (
        <div key={index}>
          <img
            alt="background"
            src={frameItem.image}
            className="my-4 border-black cursor-pointer max-w-56 max-h-56 hover:border-2"
            onClick={() => {
              setImageUrl(frameItem.image);
            }}
          />
        </div>
      ))}
    </div>
  );
}
