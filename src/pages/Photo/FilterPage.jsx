import frame from '../../assets/frame/2x2_w.png';
import ProgressFooter from '../../components/Common/ProgressFooter';
import TeamName from '../../components/Common/TeamName';
import FilterBtn from '../../components/Photo/Fliter/FilterBtn';

export default function FilterPage() {
  return (
    <div className="h-screen">
      <div>
        <TeamName />
      </div>
      <div className="flex ">
        <img src={frame} alt="frame" className="mt-16 ml-56 w-2/5" />
        <div className="mt-28">
          <FilterBtn
            filterName="원본"
            filterColor1="bg-light-brown"
            filterColor2="white"
          />
          <FilterBtn
            filterName="밝은"
            filterColor1="bg-white"
            filterColor2="black"
          />
        </div>
      </div>
      <ProgressFooter width="w-[32.2rem]" />
    </div>
  );
}
