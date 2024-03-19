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
        <div className="">
          <div className="grid grid-cols-3 ">
            <Icon
              icon="😀"
              title="이모티콘"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
            <Icon
              icon="🗂️"
              title="나만의 스티커"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
            <Icon
              icon="🤖"
              title="AI 스티커"
              setOpen={setStickersModalOpen}
              setTitle={setTitle}
            />
          </div>
        </div>
      )}
    </div>
  );
}
