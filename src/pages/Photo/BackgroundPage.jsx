import TeamName from '../../components/Common/TeamName';
import FrameAndFixel from '../../components/Photo/Background/FrameAndFixel';
import SelectBackground from '../../components/Photo/Background/SelectBackground';

export default function BackgroundPage() {
  return (
    <div className="flex flex-col h-screen">
      <TeamName />
      <div className="body grow flex">
        <FrameAndFixel />

        <SelectBackground />
      </div>
    </div>
  );
}
