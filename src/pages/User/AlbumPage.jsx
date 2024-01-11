/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import AlbumBtn from '../../components/Album/AlbumBtn';
import Modal from '../../components/Album/Modal';
import Header from '../../components/Common/Header';

export default function AlbumPage() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-around">
        <div className="flex p-12">
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
        </div>
      </div>
      {modal && <Modal setModal={setModal} />}
      <div className="flex justify-around">
        <div className="flex p-12">
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex p-12">
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
          <div className="m-12" />
          <AlbumBtn setModal={setModal} />
        </div>
      </div>
    </div>
  );
}
