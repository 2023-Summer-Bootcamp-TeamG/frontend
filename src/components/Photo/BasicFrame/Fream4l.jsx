export default function Frame4l({ frameUrl }) {
  return (
    <div
      style={{ backgroundImage: `url(${frameUrl})` }}
      className="bg-black w-[19rem] h-[28rem] bg-contain"
    >
      <div className="flex">
        <div>
          <div className="ml-3 m-2 mt-3 bg-white w-[8.2rem] h-[11rem]" />
          <div className="ml-3 m-2 mt-3 bg-white w-[8.2rem] h-[11rem]" />
        </div>
        <div>
          <div className="m-2 mt-3 bg-white w-[8.2rem] h-[11rem]" />
          <div className="m-2 mt-3 bg-white w-[8.2rem] h-[11rem]" />
        </div>
      </div>
      <div className="my-5" />
      <div className="text-xs font-thin tracking-widest text-center text-white">
        DoodleFilm
      </div>
    </div>
  );
}
