import Lottie from 'lottie-react';

import pixelHeart from '../assets/Lottie/heart/Animation - 1704960241879.json';
import Header from '../components/Common/Header';
import StartBtn from '../components/Main/StartBtn';

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="relative h-full  bg-cover bg-no-repeat bg-top-4 bg-[url('./assets/main.png')]">
        <StartBtn />
        <Lottie
          className="h-16 absolute right-40 bottom-32"
          animationData={pixelHeart}
        />
      </div>
    </div>
  );
}
