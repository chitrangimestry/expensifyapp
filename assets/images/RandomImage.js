const images = {
  1: require('../images/RomanticGetaway-bro.png'),
  2: require('../images/Ahmedabad-rafiki.png'),
  3: require('../images/BuenosAires-bro.png'),
  4: require('../images/HongKong-rafiki.png'),
  5: require('../images/London-bro.png'),
  6: require('../images/London-rafiki.png'),
  7: require('../images/Moscow-bro.png'),
  8: require('../images/Beach.png'),
  9: require('../images/Taipei-pana.png'),
  10: require('../images/SaoPaulo.png'),
};

export default function randomImage() {
  let min = 1;
  let max = 10;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return images[random];
}