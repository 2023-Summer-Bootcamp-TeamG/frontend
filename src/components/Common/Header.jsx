export default function Header() {
  return (
    <div className="flex justify-around items-center bg-gradient-to-b from-lime-custom to-gray-[#f2f1f0] h-28 w-screen">
      <div />
      <div
        className="font-black  text-5xl font-extrabold tracking-tighter italic ml-56 "
        style={{
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
          WebkitTextStroke: '1.2px white',
        }}
      >
        DoodleFilm
      </div>

      <div className="font-bold text-xl font-normal">
        <button type="button" className="mr-12">
          Login
        </button>
        <button type="button" className="">
          Album
        </button>
      </div>
    </div>
  );
}
