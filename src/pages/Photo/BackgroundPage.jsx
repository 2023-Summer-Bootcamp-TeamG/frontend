import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';
import SelectBackground from '../../components/Photo/Background/SelectBackground';

export default function BackgroundPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const stateOne = location.state;
  useEffect(() => {
    console.log('Selected state:', stateOne);
  }, [stateOne]);
  return (
    <div className="flex flex-col h-screen">
      <TeamName />
      <div className="flex h-[calc(100vh-16rem)]">
        <div className="flex items-center justify-center basis-3/4">
          {stateOne && (
            <img
              src={stateOne.imageSrc}
              alt="frame"
              className="max-w-96 max-h-96"
            />
          )}
        </div>
        <SelectBackground />
        <ProgressFooter width="w-[13.85rem]" path="/filter" />
      </div>
    </div>
  );
}
