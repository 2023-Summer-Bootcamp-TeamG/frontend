/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */

import './hide.css';

import { IoClose } from 'react-icons/io5';
import { Rnd } from 'react-rnd';

import useStickerStore from '../../../../stores/Stickers/OnScreenStickersStore';

export default function StickerZ({ activeTab }) {
  const stickers = useStickerStore((state) => state.stickers);
  const updateSticker = useStickerStore((state) => state.updateSticker);
  const removeSticker = useStickerStore((state) => state.removeSticker);

  const handleDrag = (e, data, index) => {
    updateSticker(index, { position: { top: data.y, left: data.x } });
  };

  const handleResizeStop = (index, e, direction, ref, delta, position) => {
    updateSticker(index, {
      ...stickers[index],
      size: {
        width: ref.style.width,
        height: ref.style.height,
      },
      ...position,
    });
  };

  const handleDelete = (index) => {
    removeSticker(index);
  };

  return (
    <div
      className="h-[38rem] w-[40rem] mr-36  absolute bg-transparent "
      style={{
        zIndex: activeTab === 1 ? 3 : 1,
      }}
    >
      {stickers.map((sticker, index) => (
        <Rnd
          className="border border-transparent hover:border-black rnd-hover"
          key={index}
          size={{ width: sticker.width, height: sticker.height }}
          position={{ x: sticker.position.left, y: sticker.position.top }}
          onDragStop={(e, d) => {
            handleDrag(e, d, index);
          }}
          onResizeStop={(e, direction, ref, delta, position) =>
            handleResizeStop(index, e, direction, ref, delta, position)
          }
        >
          <div>
            <div
              className="bg-cover"
              style={{
                width: sticker.size.width,
                height: sticker.size.height,
                backgroundImage: `url(${sticker.image})`,
              }}
            />
            <button
              className="border border-black hide-button"
              onClick={() => handleDelete(index)}
            >
              <IoClose color="red" />
            </button>
          </div>
        </Rnd>
      ))}
    </div>
  );
}
