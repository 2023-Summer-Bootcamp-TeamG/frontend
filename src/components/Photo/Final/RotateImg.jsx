import '../../../style/RotateImg.css';

import { useState } from 'react';

export default function RotateImg({ image }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = centerY - clientY;

    const rotateX = (deltaY / centerY) * -45;
    const rotateY = (deltaX / centerX) * -45;

    setRotation({ x: rotateX, y: rotateY });

    const offsetX = (deltaX / width) * 120;
    const offsetY = (deltaY / height) * 10;

    setBackgroundPosition({ x: offsetX, y: offsetY });

    const overlay = document.querySelector('.overlay');
    if (overlay) {
      overlay.style.filter = 'opacity(0.7)';
    }
  };

  const handleMouseOut = () => {
    const overlay = document.querySelector('.overlay');
    const container = document.querySelector('.contain');

    if (overlay && container) {
      overlay.style.filter = 'opacity(0)';
      container.style.transform =
        'perspective(350px) rotateY(0deg) rotateX(0deg)';
      setRotation({ x: 0, y: 0 });
    }
  };

  return (
    <div
      className="contain relative "
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onBlur={() => 0}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="card duration-100"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div
          className="overlay absolute w-full h-full duration-100"
          style={{
            backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
          }}
        />
        <img alt="fi" src={image} className="w-[40rem] h-[26rem]" />
      </div>
    </div>
  );
}
