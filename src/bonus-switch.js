const measureRainSwitch = (inches) => {
  switch (inches) {
    case 0:
      console.log('drought');
      break;
    case 1:
      console.log('dry');
      break;
    case 2:
    case 3:
      console.log('average');
      break;
    case 4:
    case 5:
      console.log('rainy');
      break;
    default:
      console.log('flood');
  }
};

const rounderSwitch = (float,roundingSetting) => {
  switch (roundingSetting) {
    case 'up':
      return Math.ceil(float);
    case 'down':
      return Math.floor(float);
    default:
      return Math.round(float);
  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
