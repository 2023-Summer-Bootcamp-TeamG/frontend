import frame from '../../../assets/frame/2x2_w.png';

export default function FilterBtn({ filterName, filterColor1, filterColor2 }) {
  return (
    <button type="button" className="flex-col ml-52">
      <img src={frame} alt="frame" className="w-1/3" />
      <div
        className={`${filterColor1} text-${filterColor2} p-1 font-extrabold text-xl mt-2 mb-5 h-10 w-36`}
      >
        {filterName}
      </div>
    </button>
  );
}
