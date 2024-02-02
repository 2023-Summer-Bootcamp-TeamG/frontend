/* eslint-disable object-shorthand */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import apiV1Instance from '../../api/api-instance';
import TeamName from '../../components/Common/TeamName';
import RotateImg from '../../components/Photo/Final/RotateImg';
import SaveBtn from '../../components/Photo/Final/SaveBtn';
import useDrawingStore from '../../stores/Drawings/OnScreenDrawingsStore';
import useStickerStore from '../../stores/Stickers/OnScreenStickersStore';
import useTextStore from '../../stores/Text/OnScreenTextStore';

export default function FinalPage() {
  const location = useLocation();
  const { title, image, capturedData, photoId } = location.state || {};
  const { drawings } = useDrawingStore();
  const { stickers } = useStickerStore();
  const { texts } = useTextStore();
  const [qr, setQr] = useState();

  console.log('draw : ', drawings);
  console.log('stickers : ', stickers);
  console.log('texts : ', texts);
  console.log('cap', capturedData);
  console.log('qrId:', photoId);
  console.log('result image:', image);

  const clickSaveBtn = async () => {
    const data = {
      title: title,
      photo_data: capturedData,
      result_photo_data: image,
      stickers: stickers,
      textboxes: texts,
      drawings: drawings,
    };
    try {
      const response = await apiV1Instance.post('/photos/', data);
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const downloadImage = () => {
    const a = document.createElement('a');
    a.href = image;
    a.download = 'downloaded_image.png';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const getQr = async () => {
    try {
      const response = await apiV1Instance.get(`/photos/qr/${photoId}/`);
      setQr(response.data.qr_code);
      console.log(response.data.qr_code);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getQr();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <TeamName />

      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center w-[66rem] h-[42rem] pt-20 bg-cover bg-[url('./assets/sketch.png')]">
          <RotateImg image={image} />
          <div className="flex flex-col ml-14 items-center justify-center">
            <img
              src={`data:image/png;base64,${qr}`}
              alt="QR Code"
              className="h-[12rem] w-[12rem] mb-5"
            />

            <SaveBtn title="앨범 저장" clickSaveBtn={clickSaveBtn} />
            <SaveBtn title="다운로드" clickSaveBtn={downloadImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
