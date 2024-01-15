/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

import frame1 from '../../../assets/frame/1x1.png';

export default function Cut1() {
  const navigate = useNavigate();
  const handleImageClick1 = () => {
    const imageSrc = frame1;
    navigate('/photo/Background', { state: { imageSrc } });
  };
  return (
    <div className="flex items-center p-10">
      <div className="relative h-60 group">
        <img
          src={frame1}
          alt="frame1"
          className="overflow-hidden transition-transform origin-center transform h-80 group-hover:scale-105"
          onClick={() => {
            handleImageClick1();
          }}
        />
      </div>
    </div>
  );
}
