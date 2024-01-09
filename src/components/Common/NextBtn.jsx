import surf from '../../assets/images/next.png';

export default function NextBtn() {
  return (
    <img
      className="cursor-pointer"
      src={surf}
      alt="NextBtn"
      onClick={() => {
        console.log('test');
      }}
      aria-hidden="true"
    />
  );
}
