/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainPage() {
  const navigate = useNavigate();
  const PageTransition = ({ children }) => (
    <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '50%' }}>
      {children}
    </motion.div>
  );

  return (
    <div className="h-screen bg-cover py-12 bg-[url('./assets/background.png')]">
      <PageTransition>
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-[66rem] h-[42rem] bg-cover bg-[url('./assets/sketch.png')]">
            <div>
              <div className="w-[25rem] h-[8rem] mr-20 mt-14 ml-[6rem] mb-[2rem] bg-cover bg-[url('./assets/logo.png')]" />
              <div className="w-[24rem] h-[18rem] ml-[5rem] mb-[2rem] bg-cover bg-[url('./assets/whiteframe.png')]">
                <div className="fixed mt-[4.5rem] ml-[5rem]">
                  <div
                    className="w-[6.4rem] h-[3.2rem] bg-cover bg-[url('./assets/login.png')] cursor-pointer"
                    onClick={() => {
                      navigate('/login');
                    }}
                  />
                </div>
                <div className="fixed mt-[11rem] ml-[13.5rem]">
                  <div
                    className="w-[6rem] h-[3rem] bg-cover bg-[url('./assets/album.png')] cursor-pointer"
                    onClick={() => {
                      navigate('/album');
                    }}
                  />
                </div>
                <div className="fixed mt-[18rem] ml-[11rem]">
                  <div className="w-[18rem] h-[14rem] bg-cover bg-[url('./assets/pencil.png')]" />
                </div>
              </div>
              <Link to="/photo/basicFrame">
                <div className="flex items-center justify-center">
                  <div className="w-[10rem] h-[6rem] bg-cover bg-[url('./assets/start.png')]" />
                </div>
              </Link>
            </div>
            <div className="w-[25rem] h-[30rem] bg-cover mt-24 bg-[url('./assets/rabbit.png')]" />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
