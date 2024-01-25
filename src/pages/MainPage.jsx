import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-cover py-12 bg-[url('./assets/background.png')]">
      <div className="flex w-[68rem] h-[50rem] bg-cover bg-[url('./assets/sketch.png')]">
        <div>
          <div className="w-[25rem] h-[8rem] mr-20 mt-14 ml-[6rem] mb-[2rem] bg-cover bg-[url('./assets/logo.png')]" />
          <div className="w-[24rem] h-[18rem] ml-[5rem] mb-[2rem] bg-cover bg-[url('./assets/whiteframe.png')]">
            <div className="fixed mt-[4.5rem] ml-[5rem]">
              <div className="w-[6.4rem] h-[3.2rem] bg-cover bg-[url('./assets/login.png')]" />
            </div>
            <div className="fixed mt-[11rem] ml-[13.5rem]">
              <div className="w-[6rem] h-[3rem] bg-cover bg-[url('./assets/album.png')]" />
            </div>
            <div className="fixed mt-[18rem] ml-[11rem]">
              <div className="w-[18rem] h-[15rem] bg-cover bg-[url('./assets/pencil.png')]" />
            </div>
          </div>
          <Link to="/photo/basicFrame">
            <div className="flex justify-center items-center">
              <div className="w-[10rem] h-[6rem] bg-cover bg-[url('./assets/start.png')]" />
            </div>
          </Link>
        </div>
        <div className="w-[25rem] h-[30rem] bg-cover mt-24 bg-[url('./assets/rabbit.png')]" />
      </div>
    </div>
  );
}
