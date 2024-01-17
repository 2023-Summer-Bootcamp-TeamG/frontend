import { useState } from 'react';

import DetailStickers from './Sticker/DetailSticker';
import Icon from './Sticker/Icon';

export default function Stickers() {
  const [isStickersModalOpen, setStickersModalOpen] = useState(false);
  const [title, setTitle] = useState('');

  const closeStickersModal = () => {
    setStickersModalOpen(false);
  };

  return (
    <div>
      {isStickersModalOpen ? (
        <DetailStickers onClose={closeStickersModal} title={title} />
      ) : (
        <div className="bg-white mt-4 p-6 h-[30rem] w-[19rem] rounded-xl border-black border shadow-[0_4px_12.3px_0px_rgba(0,0,0,0.3)]">
          <div className="font-bold ml-2 m-1 text-lg">스티커</div>
          <div className=" grid grid-cols-3 ">
            <Icon
              icon="😀"
              title="기본티콘"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
            <Icon
              icon="👾"
              title="픽셀티콘"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
            <Icon
              icon="✨"
              title="기호"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
            <Icon
              icon="🧸"
              title="캐릭터"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
            <Icon
              icon="🗂️"
              title="나만의 스티커"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
          </div>
        </div>
      )}
    </div>
  );
}
