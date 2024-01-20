export default function Frame2l({ frameUrl }) {
  return (
    <div
      className="bg-black w-[23rem] h-[32rem] items-center flex flex-col bg-contain "
      style={{ backgroundImage: `url(${frameUrl})` }}
    >
      <div className="m-3 bg-white w-[21.5rem] h-[12rem]" />
      <div className="m-3 bg-white w-[21.5rem] h-[12rem]" />
      <div className="my-3" />
      <div className="text-sm font-thin text-white">DoodleFilm</div>
    </div>
  );
}
