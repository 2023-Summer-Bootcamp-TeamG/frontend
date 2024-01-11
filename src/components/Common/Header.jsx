import logo from '../../assets/Logo/Logo.png';

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-lime-custom to-gray-[#f2f1f0] h-28 w-screen">
      <img alt="logo" src={logo} className="h-20" />
      <div
        className="font-black ml-10  text-5xl  tracking-tighter italic"
        style={{
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
          WebkitTextStroke: '1.2px white',
        }}
      >
        DoodleFilm
      </div>

      <div className="text-xl font-normal mr-10">
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
