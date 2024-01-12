import frame from '../../assets/frame/2x2_w.png';
import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';
import SelectBackground from '../../components/Photo/Background/SelectBackground';

export default function BackgroundPage() {
  return (
    <div className="flex flex-col h-screen">
      <TeamName />
      <div className="body grow flex">
        <div className="basis-3/4 flex justify-center items-center">
          <img alt="frame" src={frame} className="" />
        </div>
        <SelectBackground />
        <ProgressFooter width="w-[19.2rem]" path="/filter" />
      </div>
    </div>
  );
}
