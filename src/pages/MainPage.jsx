/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Lottie from 'lottie-react';
import { FaArrowRight } from 'react-icons/fa';

import pixelHeart from '../assets/Lottie/Animation - 1704960241879.json';
import Header from '../components/Common/Header';

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="relative h-full  bg-cover bg-no-repeat bg-top-4 bg-[url('./assets/main.png')]">
        <div
          className="flex justify-end mt-52 mr-20 items-center font-semibold text-3xl cursor-pointer"
          onClick={() => {
            console.log('hi');
          }}
        >
          시작하기
          <FaArrowRight className="ml-2" />
        </div>
        <Lottie
          className="h-16 absolute right-40 bottom-32"
          animationData={pixelHeart}
        />
      </div>
    </div>
  );
}
