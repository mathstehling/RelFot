import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("window");

const wp = (widthPercent) => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  );

  return screenPixel;
};

const hp = (heightPercent) => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (height * parseFloat(heightPercent)) / 100
  );

  return screenPixel;
};

const figmaWidth = 375;

const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100;

  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  );

  return screenPixel;
};

const paddingSizes = {
  none: 0,
  tiny: px(8),
  little: px(10),
  smaller: px(12),
  small: px(14),
  medium: px(16),
  large: px(18),
  larger: px(20),
  big: px(24),
  mega: px(32),
};

const handlePadding = (value) => {
  if (!value) {
    return 0;
  }
  if (paddingSizes.hasOwnProperty(value)) {
    return paddingSizes[value];
  }
  return px(value);
};

const borderRadiusSizes = {
  none: 0,
  default: px(8),
  small: px(8),
  medium: px(12),
  big: px(16),
};

export const handleBorderRadius = (br) => {
  if (!br) {
    return 0;
  }
  if (borderRadiusSizes.hasOwnProperty(br)) {
    return borderRadiusSizes[br];
  }
  return px(br);
};

export const metrics = {
  wp,
  hp,
  px,
  baseWidth: px(327),
  handlePadding,
  handleBorderRadius,
};
