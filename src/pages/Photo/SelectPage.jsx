import frame from '../../assets/frame/2x2_w.png';
import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';

export default function SelectPage() {
  return (
    <div className="h-screen">
      <TeamName />
      <div className="flex justify-center mt-6">
        <img src={frame} alt="Frame" />
      </div>
      <ProgressFooter width="w-[19.2rem]" path="/background" />
    </div>
  );
}
