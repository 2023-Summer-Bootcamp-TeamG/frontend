import React, { useEffect, useState } from 'react';

import apiV1Instance from '../../api/api-instance';
import AlbumBtn from '../../components/Album/AlbumBtn';
import Modal from '../../components/Album/Modal';
import Header from '../../components/Common/Header';

export default function AlbumPage() {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const getAllImages = async () => {
    try {
      const response = await apiV1Instance.get('/photos/');
      // 이미지 정보들을 images 상태에 저장
      setImages(response.data);
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
    <div>
      <div>
        <Header />
      </div>
      {images && images.length > 0 && (
        <div className="flex justify-center">
          <div className="grid grid-cols-4">
            {images.map((image, index) => (
              <AlbumBtn
                key={index}
                setModal={() => openModal(image)}
                imageUrl={image.url}
                title={image.title}
              />
            ))}
          </div>
        </div>
      )}
      {modal && selectedImage && (
        <Modal
          setModal={() => setModal(false)}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          id={selectedImage.id}
        />
      )}
    </div>
  );
}
