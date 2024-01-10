import TeamName from '../components/Common/TeamName';
import NextBtn from '../components/Common/NextBtn';
import frame from '../assets/frame/2x2_w.png';
import FilterBtn from '../components/Photo/Fliter/FilterBtn';

export default function FilterPage() {
  return (
    <div>
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
      <div className="flex absolute bottom-0 ml-60">
        <div className="bg-[url('./assets/images/pixelpeople.png')] items-ends h-32 w-[32.2rem]" />
        <NextBtn />
      </div>
    </div>
  );
}
