import Lottie from 'lottie-react';
import { useState } from 'react';
import { MdDownload } from 'react-icons/md';

import finish from '../../../assets/Lottie/finish/Animation - 1704995244519.json';

export default function SaveBtn({ title, clickSaveBtn }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    clickSaveBtn();
  };

  return (
    <button
      className="rounded-lg border-solid border-2 flex items-center border-black py-2 pl-6 mr-12 mt-4 bg-white h-12 w-36"
      type="button"
      onClick={handleButtonClick}
      disabled={isClicked}
    >
      {title}
      <div>
        {isClicked ? (
          <Lottie animationData={finish} loop="false" className="h-14 w-14" />
        ) : (
          <MdDownload className="mx-3 mr-4" size={25} />
        )}
      </div>
    </button>
  );
}
