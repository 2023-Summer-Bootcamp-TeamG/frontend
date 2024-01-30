/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainPage() {
  const navigate = useNavigate();
  const PageTransition = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: '-10%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '10%' }}
    >
      {children}
    </motion.div>
  );
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-cover py-8 bg-[url('./assets/background.png')]">
      <PageTransition>
        <div className="flex w-[75rem] h-[47rem] bg-cover bg-[url('./assets/sketch.png')]">
          <div>
            <div className="w-[25rem] h-[8rem] mr-20 mt-24 ml-[6rem] mb-[2rem] bg-cover bg-[url('./assets/logo.png')]" />
            <div className="w-[24rem] h-[18rem] ml-[5rem] bg-cover bg-[url('./assets/whiteframe.png')]">
              <div className="fixed mt-[4.8rem] ml-[5.2rem]">
                <div
                  className="w-[5.5rem] h-[2.8rem] bg-cover bg-[url('./assets/login.png')] cursor-pointer"
                  onClick={() => {
                    navigate('/login');
                  }}
                />
              </div>
              <div className="fixed mt-[11rem] ml-[13.5rem]">
                <div
                  className="w-[5.5rem] h-[2.8rem] bg-cover bg-[url('./assets/album.png')] cursor-pointer"
                  onClick={() => {
                    navigate('/album');
                  }}
                />
              </div>
            </div>

            <div className="fixed ml-[17.5rem]">
              <div className="w-[17rem] h-[13rem] bg-cover bg-[url('./assets/pencil.png')] " />
            </div>
            <Link to="/photo/basicFrame">
              <div className="fixed ml-[14rem] mt-[1.2rem] group">
                <div className="w-[10rem] h-[6rem] bg-cover bg-[url('./assets/start.png')] transform group-hover:scale-95" />
              </div>
              {/* <div className="fixed ml-[14rem] mt-[1.3rem]">
              <div className="w-[10rem] h-[6rem] bg-cover bg-[url('./assets/start.png')]" />
            </div> */}
            </Link>
          </div>

          <div className="w-[28rem] h-[35rem] bg-cover mt-24 ml-8 bg-[url('./assets/rabbit.png')]" />
        </div>
      </PageTransition>
    </div>
  );
}
