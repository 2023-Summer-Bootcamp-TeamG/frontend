/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function Icon({ icon, title, setOpen, setTitle }) {
  const openStickersModal = () => {
    setTitle(title);
    setOpen(true);
  };

  return (
    <div
      className="items-center justify-center flex flex-col my-5 cursor-pointer"
      onClick={openStickersModal}
    >
      <div className="text-4xl mb-1">{icon}</div>
      <div className="text-sm">{title}</div>
    </div>
  );
}
