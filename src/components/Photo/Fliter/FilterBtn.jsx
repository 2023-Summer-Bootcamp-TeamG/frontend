export default function FilterBtn({ filterName, filterColor1, filterColor2 }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <button type="button" className="flex-col">
        <div
          className={`${filterColor1} text-${filterColor2} p-1 font-bold text-xl mt-2 mb-5 h-10 w-36`}
        >
          {filterName}
        </div>
      </button>
    </div>
  );
}
