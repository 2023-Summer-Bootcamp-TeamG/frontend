/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

import apiV1Instance from '../../api/api-instance';
import TeamName from '../../components/Common/TeamName';

export default function AlbumPage() {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

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

  useEffect(() => {
    getAllImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModal(true);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-cover bg-[url('./assets/background.png')]">
      <TeamName />
      {/* 그리드 컨테이너 */}
      <div className="bg-white w-[73rem] h-[43rem] mt-6  rounded-xl px-10">
        <div className="grid grid-cols-4 gap-4 p-4 w-full max-w-6xl">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white p-3 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto"
              />
              <p className="text-center mt-2">{image.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 구현 */}
      {modal && selectedImage && (
        <div className="modal">{/* 모달의 내용 구현 */}</div>
      )}
    </div>
  );
}
