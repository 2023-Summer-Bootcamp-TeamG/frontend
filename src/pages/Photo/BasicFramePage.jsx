/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
/* eslint-disable simple-import-sort/imports */
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Cut1 from '../../components/Photo/BasicFrame/Cut1';
import Cut2 from '../../components/Photo/BasicFrame/Cut2';
import Cut4 from '../../components/Photo/BasicFrame/Cut4';
import CutBtn from '../../components/Photo/BasicFrame/CutBtn';
import useImageStore from '../../stores/Background/useImageStore';
import TeamName from '../../components/Common/TeamName';

export default function BasicFramePage() {
  const [select, setSelect] = useState('');
  const { setImageUrl } = useImageStore();

  const PageTransition = ({ children }) => (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
    >
      {children}
    </motion.div>
  );

  useEffect(() => {
    setImageUrl('');
  }, []);
  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('./assets/background.png')]">
      <div>
        <TeamName />
      </div>
      <div className="flex items-center justify-center">
        <PageTransition>
          <div className="flex flex-col w-[66rem] h-[42rem] bg-cover bg-[url('./assets/sketch.png')]">
            <div className="m-4" />
            <div className="flex justify-center">
              <div className="text-xl m-14">
                <CutBtn select={select} setSelect={setSelect} content="1Cut" />
              </div>
              <div className="text-xl m-14">
                <CutBtn select={select} setSelect={setSelect} content="2Cut" />
              </div>
              <div className="text-xl m-14">
                <CutBtn select={select} setSelect={setSelect} content="4Cut" />
              </div>
            </div>
            <div className="flex justify-around">
              {select === '1Cut' && <Cut1 />}
              {select === '2Cut' && <Cut2 />}
              {select === '4Cut' && <Cut4 />}
            </div>
          </div>
        </PageTransition>
      </div>

      <div className="m-1" />
    </div>
  );
}
