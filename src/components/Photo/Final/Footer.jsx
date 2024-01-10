import fin from '../../../assets/images/finish.png';
import people from '../../../assets/images/pixelpeople.png';

export default function Footer() {
  return (
    <div className="flex absolute bottom-0 w-[65rem] justify-center">
      <img alt="people" src={people} className="h-32" />
      <img alt="finish" src={fin} className="h-24 absolute right-0" />
    </div>
  );
}
