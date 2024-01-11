import frame from '../../../assets/frame/2x2_w.png';
import ProgressFooter from '../../Common/ProgressFooter';

export default function FrameAndFixel() {
  return (
    <div className="frame & pixel basis-3/4 flex justify-center items-center">
      <img alt="frame" src={frame} className="" />
      <ProgressFooter width="w-[19.2rem]" />
    </div>
  );
}
