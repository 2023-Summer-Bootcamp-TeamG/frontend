/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

import apiV1Instance from '../../api/api-instance';
import tape1 from '../../assets/album/tape1.png';
import tape2 from '../../assets/album/tape2.png';
import tape3 from '../../assets/album/tape3.png';
import tape4 from '../../assets/album/tape4.png';
import TeamName from '../../components/Common/TeamName';

export default function AlbumPage() {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const tapes = [tape1, tape2, tape3, tape4];

  const getAllImages = async () => {
    try {
      const response = await apiV1Instance.get('/photos/');
      // 이미지 정보들을 images 상태에 저장
      setImages(response.data);
      console.log(images);
    } catch (error) {
      alert(error);
    }
  };

  const handleDel = async (id) => {
    try {
      const response = await apiV1Instance.delete(`/photos/${id}`);
      setModal(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllImages();
  }, [images]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModal(true);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-cover bg-[url('./assets/background.png')]">
      <TeamName />
      <div className="w-[73rem] h-[43rem] mt-6 px-10">
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={image.id} className="relative ">
              <div className="flex items-center justify-center ">
                <div
                  className="absolute top-2 w-[2rem] h-[4rem] bg-cover"
                  style={{
                    backgroundImage: `url(${tapes[index % 4]})`,
                  }}
                />
              </div>
              <div
                className="flex flex-col justify-start mt-[3rem] items-center max-h-[22rem] max-w-[22rem] cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="max-w-[20rem] max-h-[20rem]"
                />
                {/* <p className="mt-2 text-center">{image.title}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 구현 */}
      {modal && selectedImage && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 max-w-[50rem] max-h-[50rem] overflow-y-auto">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-[40rem] max-h-[40rem] mb-2"
            />
            <p className="mb-2 text-xl font-bold">{selectedImage.title}</p>
            <div className="flex justify-center">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md ">
                수정
              </button>
              <div className="px-8" />
              <button
                onClick={() => handleDel(selectedImage.origin)}
                className="px-4 py-2 text-white bg-blue-500 rounded-md "
              >
                삭제
              </button>
              <div className="px-8" />
              <button
                onClick={() => setModal(false)}
                className="px-4 py-2 text-white bg-blue-500 rounded-md "
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
