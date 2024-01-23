/* eslint-disable react/button-has-type */
import { useRef } from 'react';

// import CanvasDraw from 'react-canvas-draw';
// import frame from '../../../../assets/frame/2x2_w.png';
import useBrushColorStore from '../../../../stores/Brush/BrushColorStore';
import useBrushSizeStore from '../../../../stores/Brush/BrushSizeStore';
import FabricCanvas from '../../../Test/Doodle';
import DrawBtns from './DrawBtns';

export default function DrawZ({ activeTab }) {
  const canvasRef = useRef(null);
  const { brushColor } = useBrushColorStore();
  const { brushSize } = useBrushSizeStore();
  return (
    <div
      className="h-[28rem] w-[40rem]  absolute bg-transparent"
      style={{ zIndex: activeTab === 0 ? 3 : 1 }}
    >
      {activeTab === 0 ? (
        <DrawBtns canvasRef={canvasRef} />
      ) : (
        <div className="h-12" />
      )}
      {/* <CanvasDraw
        ref={canvasRef}
        imgSrc={frame}
        canvasWidth={650}
        canvasHeight={457}
        brushColor={brushColor}
        catenaryColor={brushColor}
        brushRadius={brushSize} // 붓 두께
        lazyRadius={0} // 추같은거 길이
        saveData={localStorage.getItem('savedDrawing')}
        immediateLoading // 로드 하면 바로 뜨는거
      /> */}
      <FabricCanvas />
    </div>
  );
}
