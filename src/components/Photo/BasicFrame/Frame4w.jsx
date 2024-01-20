export default function Frame4w({ frameUrl }) {
  return (
    <div className="bg-black w-[28rem] h-[18.8rem]">
      <div
        style={{ backgroundImage: `url(${frameUrl})` }}
        className="flex bg-contain"
      >
        <div>
          <div className="ml-3 m-2 mt-3 bg-white w-[11rem] h-[8.2rem]" />
          <div className="ml-3 m-2 mt-3 bg-white w-[11rem] h-[8.2rem]" />
        </div>
        <div>
          <div className="m-2 mt-3 bg-white w-[11rem] h-[8.2rem]" />
          <div className="m-2 mt-3 bg-white w-[11rem] h-[8.2rem]" />
        </div>
        <div className="mr-1" />
        <div className="flex flex-col mt-6 text-xs font-thin tracking-widest text-center text-white justify-">
          <p>Doodle</p>
          <p>Film</p>
        </div>
      </div>
    </div>
  );
}
