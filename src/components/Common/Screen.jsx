import Navbar from './Navbar';

export default function Screen({ children, path }) {
  return (
    <div className="h-screen">
      <Navbar path={path} />
      <div className="flex justify-center items-center h-[calc(100vh-7rem)]">
        <div className="border border-black w-[80rem] h-[38rem] rounded-[6rem] border-8 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
