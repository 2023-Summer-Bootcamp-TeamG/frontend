import background from '../../../assets/background/bg.png';

export default function SelectBackground() {
  return (
    <div className=" basis-1/4 bg-white flex flex-col items-center p-4 overflow-y-auto h-[calc(100vh-5rem)]">
      <img
        alt="background"
        src={background}
        className="h-36 w-56 my-4 cursor-pointer hover:border-2 border-black"
      />
    </div>
  );
}
