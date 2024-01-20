export default function Frame4long({ frameUrl }) {
  return (
    <div
      className="bg-black w-[11rem] h-[32rem] bg-contain"
      style={{ backgroundImage: `url(${frameUrl})` }}
    >
      <div className="flex flex-col items-center bg-contain">
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem]" />
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem]" />
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem]" />
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem]" />
        <div className="mt-6" />
        <div className="text-xs font-thin text-white">DoodleFilm</div>
      </div>
    </div>
  );
}
