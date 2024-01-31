/* eslint-disable object-shorthand */
import { useLocation } from 'react-router-dom';

import apiV1Instance from '../../api/api-instance';
import TeamName from '../../components/Common/TeamName';
import RotateImg from '../../components/Photo/Final/RotateImg';
import SaveBtn from '../../components/Photo/Final/SaveBtn';
import useDrawingStore from '../../stores/Drawings/OnScreenDrawingsStore';
import useStickerStore from '../../stores/Stickers/OnScreenStickersStore';
import useTextStore from '../../stores/Text/OnScreenTextStore';
import CanvasWithDrawings from '../T3';

export default function FinalPage() {
  const location = useLocation();
  const { title, image } = location.state || {};
  const { drawings } = useDrawingStore();
  const { stickers } = useStickerStore();
  const { texts } = useTextStore();

  console.log('draw : ', drawings);
  console.log('stickers : ', stickers);
  console.log('texts : ', texts);

  const clickSaveBtn = async () => {
    const data = {
      title: title,
      photo_data: image,
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

  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <TeamName />

      <div className="flex items-center justify-center">
        <CanvasWithDrawings drawings={drawings} width={800} height={600} />
        <div className="flex justify-center items-center w-[66rem] h-[42rem] pt-20 bg-cover bg-[url('./assets/sketch.png')]">
          <RotateImg image={image} />
          <div className="flex flex-col ml-14">
            <SaveBtn title="앨범 저장" clickSaveBtn={clickSaveBtn} />
            <SaveBtn title="다운로드" clickSaveBtn={downloadImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
