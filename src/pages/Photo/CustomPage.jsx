import frame from '../../assets/frame/2x2_w.png';
import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';
import CustomBox from '../../components/Photo/Custom/CustomBox';

export default function CustomPage() {
  return (
    <div className="flex flex-col h-screen">
      <TeamName />
      <div className="flex ">
        <div className="basis-3/4 flex justify-center items-center mt-9">
          <img alt="frame" src={frame} className="" />
        </div>
        <CustomBox />
      </div>
      <ProgressFooter width="w-[40.4rem]" path="/final" />
    </div>
  );
}
