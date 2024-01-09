export default function TopNav() {
  return (
    <div className="bg-gradient-to-b from-lime-300 to-gray-50 h-20 w-screen">
      {/* to-gray-50에서 실제 바탕색으로 바꾸면 됨. */}
      <div className="flex justify-between">
        <div />
        <div
          className="font-black m-5 text-2xl italic ml-56"
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            WebkitTextStroke: '1.2px white',
          }}
        >
          DoodleFilm
        </div>

        <div
          className="text-bold my-6 text-xl"
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            WebkitTextStroke: '1px white',
          }}
        >
          <button type="button" className="font-bold mr-12">
            Login
          </button>
          <button type="button" className="font-bold mr-10">
            Album
          </button>
        </div>
      </div>
    </div>
  );
}
