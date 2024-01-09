import surf from '../../assets/images/next.png';

export default function Next() {
  return (
    <img
      src={surf}
      alt="Next"
      onClick={() => {
        console.log('test');
      }}
      aria-hidden="true"
    />
  );
}
