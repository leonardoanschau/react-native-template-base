import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
const proportionedPixel = designPixels => {
  const screenProportion = Dimensions.get('window').width / 180;
  return PixelRatio.roundToNearestPixel(designPixels * screenProportion);
};

const fontSize = {
  mini: proportionedPixel(4.5),
  small: proportionedPixel(5),
  medium: proportionedPixel(6),
  large: proportionedPixel(7),
  xLarge: proportionedPixel(8),
  xMidLarge: proportionedPixel(9),
  xxLarge: proportionedPixel(20),
};

export default fontSize;
