import NextBtn from './NextBtn';

export default function ProgressFooter({ width }) {
  return (
    <div className="flex absolute bottom-0 ml-60">
      <div
        className={`bg-[url('./assets/images/pixelpeople.png')] items-ends h-32 ${width}`}
      />
      <NextBtn />
    </div>
  );
}
