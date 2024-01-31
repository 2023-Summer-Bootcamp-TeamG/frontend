/* eslint-disable object-shorthand */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import './hide.css';

import { IoClose } from 'react-icons/io5';
import { Rnd } from 'react-rnd';

import useTextStore from '../../../../stores/Text/OnScreenTextStore';

export default function TextZ({ activeTab, width, height }) {
  const texts = useTextStore((state) => state.texts);
  const updateTextPosition = useTextStore((state) => state.updateTextPosition);
  const removeText = useTextStore((state) => state.removeText);

  const handleDrag = (e, d, index) => {
    updateTextPosition(index, { position: { x: d.x, y: d.y } });
  };
  const handleDelete = (index) => {
    removeText(index);
  };

  return (
    <div
      className=" absolute bg-transparent"
      style={{
        zIndex: activeTab === 'Text' ? 3 : 1,
        height: height,
        width: width,
      }}
    >
      {texts.map((text, index) => (
        <Rnd
          className="border border-transparent hover:border-black rnd-hover"
          key={index}
          position={{ x: text.position.x, y: text.position.y }}
          onDragStop={(e, d) => handleDrag(e, d, index)}
        >
          <div
            style={{
              color: text.color,
              fontSize: `${text.size}px`,
              fontFamily: text.fontFamily,
            }}
          >
            {text.text}
          </div>
          <button
            className="border border-black hide-button"
            onClick={() => handleDelete(index)}
          >
            <IoClose color="red" />
          </button>
        </Rnd>
      ))}
    </div>
  );
}
