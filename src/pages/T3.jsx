import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';

function CanvasWithDrawings({ drawings, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // drawings 배열의 각 요소로부터 fabric.Path 객체를 생성하고 캔버스에 추가합니다.
    drawings.forEach((drawing) => {
      // fabric.Path.fromObject 메소드를 사용하여 드로잉 객체를 생성합니다.
      fabric.Path.fromObject(drawing, function (path) {
        canvas.add(path);
      });
    });

    // 캔버스의 크기를 설정합니다.
    canvas.setWidth(width);
    canvas.setHeight(height);

    return () => {
      canvas.dispose();
    };
  }, [drawings, width, height]);

  return <canvas ref={canvasRef} />;
}

export default CanvasWithDrawings;
