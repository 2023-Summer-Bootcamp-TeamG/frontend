export default function Frame1({ frameUrl }) {
  return (
    <div
      className="bg-black w-[20rem] h-[25rem] items-center flex flex-col bg-contain"
      style={{ backgroundImage: `url(${frameUrl})` }}
    >
      <div className="m-3 bg-white w-[18.2rem] h-[18.2rem]" />
      <div className="my-3" />
      <div className="text-sm font-thin text-white">DoodleFilm</div>
    </div>
  );
}
