import basic1 from '../assets/stickers/basic/1.png';
import basic2 from '../assets/stickers/basic/2.png';
import basic3 from '../assets/stickers/basic/3.png';
import basic4 from '../assets/stickers/basic/4.png';
import basic5 from '../assets/stickers/basic/5.png';
import basic6 from '../assets/stickers/basic/6.png';
import basic7 from '../assets/stickers/basic/7.png';
import basic8 from '../assets/stickers/basic/8.png';
import c1 from '../assets/stickers/character/1.png';
import c2 from '../assets/stickers/character/2.png';
import c3 from '../assets/stickers/character/3.png';
import c4 from '../assets/stickers/character/4.png';
import c5 from '../assets/stickers/character/5.png';
import c6 from '../assets/stickers/character/6.png';
import c7 from '../assets/stickers/character/7.png';
import etc1 from '../assets/stickers/etc/1.png';
import etc2 from '../assets/stickers/etc/2.png';
import etc3 from '../assets/stickers/etc/3.png';
import etc4 from '../assets/stickers/etc/4.png';
import etc5 from '../assets/stickers/etc/5.png';
import etc6 from '../assets/stickers/etc/6.png';
import etc7 from '../assets/stickers/etc/7.png';
import pixel1 from '../assets/stickers/pixel/1.png';
import pixel2 from '../assets/stickers/pixel/2.png';
import pixel3 from '../assets/stickers/pixel/3.png';
import pixel4 from '../assets/stickers/pixel/4.png';
import pixel5 from '../assets/stickers/pixel/5.png';
import pixel6 from '../assets/stickers/pixel/6.png';

export default function getImageStickers(title) {
  const basicStickers = [
    basic1,
    basic2,
    basic3,
    basic4,
    basic5,
    basic6,
    basic7,
    basic8,
  ];
  const pixelStickers = [pixel1, pixel2, pixel3, pixel4, pixel5, pixel6];
  const etcStickers = [etc1, etc2, etc3, etc4, etc5, etc6, etc7];
  const characterStickers = [c1, c2, c3, c4, c5, c6, c7];

  switch (title) {
    case '기본티콘':
      return basicStickers;
    case '픽셀티콘':
      return pixelStickers;
    case '기호':
      return etcStickers;
    case '캐릭터':
      return characterStickers;
    default:
      return []; // or throw an error, depending on your requirements
  }
}
