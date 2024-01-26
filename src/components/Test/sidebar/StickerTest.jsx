import { useState } from 'react';

import Icon from '../../Photo/Custom/Sticker/Icon';
import DetailStickerTest from './DetailStickerTest';

export default function StickerTest() {
  const [isStickersModalOpen, setStickersModalOpen] = useState(false);
  const [title, setTitle] = useState('');

  const closeStickersModal = () => {
    setStickersModalOpen(false);
  };

  return (
    <div>
      {isStickersModalOpen ? (
        <DetailStickerTest onClose={closeStickersModal} title={title} />
      ) : (
        <div className=" grid grid-cols-3  px-10">
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
          <Icon
            icon="🤖"
            title="AI 스티커"
            setOpen={setStickersModalOpen}
            setTitle={setTitle}
          />
        </div>
      )}
    </div>
  );
}
