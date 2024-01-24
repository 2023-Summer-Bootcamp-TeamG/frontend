/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import DrawBtns from './DrawBtns';
import useBrushColorStore from '../../../../stores/Brush/BrushColorStore';
import useBrushSizeStore from '../../../../stores/Brush/BrushSizeStore';

export default function DrawZ({ activeTab, capturedData }) {
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

      <CanvasDraw
        ref={canvasRef}
        imgSrc={capturedData}
        brushColor={brushColor}
        catenaryColor={brushColor}
        brushRadius={brushSize} // 붓 두께
        lazyRadius={0} // 추같은거 길이
        saveData={localStorage.getItem('savedDrawing')}
        immediateLoading // 로드 하면 바로 뜨는거
      />
    </div>
  );
}
