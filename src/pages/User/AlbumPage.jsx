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
    <div className="h-screen">
      <div>
        <Header />
      </div>
      {images && images.length > 0 && (
        <div className="flex justify-between">
          <div className="flex p-12">
            {images.map((image, index) => (
              <React.Fragment key={index}>
                <AlbumBtn
                  setModal={() => openModal(image)}
                  imageUrl={image.url}
                  title={image.title}
                />
                {index < images.length - 1 && <div className="m-10" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {modal && selectedImage && (
        <Modal
          setModal={() => setModal(false)}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
        />
      )}
    </div>
  );
}
