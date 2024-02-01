/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/no-unresolved */
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
import { CiMenuKebab } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';

export default function AlbumPage() {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    getAllImages();
  }, [images]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModal(true);
  };

  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto bg-cover bg-[url('./assets/background.png')]">
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
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75 rounded-md">
          <div className="bg-white p-4 w-[41rem] max-h-[40rem] overflow-y-auto">
            <div>
              <div className="flex justify-between">
                <p className="mb-2 ml-8 text-xl font-bold">
                  {selectedImage.title}
                </p>
                <div />
                <CiMenuKebab
                  className="w-[2rem] h-[2rem] mb-2"
                  onClick={handleMenuClick}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-[30rem] max-h-[30rem] mx-10 mb-4"
              />
              <button
                onClick={() => setModal(false)}
                className="px-4 py-2 text-white bg-gray-400 rounded-md "
              >
                닫기
              </button>
            </div>
            {isModalOpen && (
              <div className="fixed grid grid-cols-1 divide-y-2 items-center p-2 bg-white border-2 border-black border-solid rounded-md top-[12.7rem] right-[25rem]">
                <button className="flex items-center p-1">
                  <FaRegEdit />
                  수정하기
                </button>
                {/* <div className="w-20 border-2 border-black border-solid" /> */}

                <button
                  className="flex items-center p-1"
                  onClick={() => handleDel(selectedImage.origin)}
                >
                  <FaTrash />
                  삭제하기
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
