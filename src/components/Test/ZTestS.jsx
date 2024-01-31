export default function ZTestS({ select }) {
  return (
    <div
      className="h-[38rem] w-[40rem] absolute bg-transparent "
      style={{
        zIndex: select === 'Stickers' ? 3 : 1,
      }}
    >
      <div>stick12</div>
      <div>stick12</div>
      <div>stick12</div>
      <div>stick12</div>
    </div>
  );
}
