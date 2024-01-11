import frame2 from '../../../assets/frame/3x2_l.png';
import frame1 from '../../../assets/frame/3x2_w.png';

export default function Cut6() {
  return (
    <div className="flex items-center p-10">
      <div className="relative h-96 group">
        <img
          src={frame2}
          alt="frame2"
          className="overflow-hidden transition-transform origin-center transform h-96 group-hover:scale-105"
        />
      </div>
      <div />
      <div className="m-16" />
      <div className="relative h-60 group">
        <img
          src={frame1}
          alt="frame1"
          className="overflow-hidden transition-transform origin-center transform h-60 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
