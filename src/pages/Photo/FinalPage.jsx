/* eslint-disable object-shorthand */
import { useLocation } from 'react-router-dom';

import apiV1Instance from '../../api/api-instance';
import TeamName from '../../components/Common/TeamName';
import RotateImg from '../../components/Photo/Final/RotateImg';
import SaveBtn from '../../components/Photo/Final/SaveBtn';

export default function FinalPage() {
  const location = useLocation();
  const { title, image } = location.state || {};

  console.log(image);

  const clickSaveBtn = async () => {
    const data = {
      title: title,
      url: image,
    };
    try {
      const response = await apiV1Instance.post('/photos/', data);
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <TeamName />

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[66rem] h-[42rem] pt-20 bg-cover bg-[url('./assets/sketch.png')]">
          <RotateImg image={image} />
          <div className="flex flex-col ml-14">
            <SaveBtn title="앨범 저장" clickSaveBtn={clickSaveBtn} />
            <SaveBtn title="다운로드" />
          </div>
        </div>
      </div>
    </div>
  );
}
