import frame from '../../../assets/frame/2x2_w.png';
import NextBtn from '../../Common/NextBtn';

export default function FrameAndFixel() {
  return (
    <div className="frame & pixel basis-3/4 flex justify-center items-center">
      <img alt="frame" src={frame} className="" />
      <div className="flex absolute bottom-0 ml-60">
        <div className="bg-[url('./assets/images/pixelpeople.png')] items-ends h-32 w-[19.2rem]" />
        <NextBtn />
      </div>
    </div>
  );
}
