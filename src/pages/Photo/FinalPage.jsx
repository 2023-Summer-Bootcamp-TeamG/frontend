import TeamName from '../../components/Common/TeamName';
import RotateImg from '../../components/Photo/Final/RotateImg';
import SaveBtn from '../../components/Photo/Final/SaveBtn';

import Footer from '../../components/Photo/Final/Footer';

export default function FinalPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="absolute top-0 w-full">
        <TeamName />
      </div>
      <div className="flex flex-col items-center mb-4">
        <RotateImg />
        <div className="flex">
          <SaveBtn title="앨범 저장" />
          <SaveBtn title="다운로드" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
