import styled from "styled-components/native";

const handleFontFamily = (props, defaultFont) => {
  const font = "OpenSans";
  if (props?.bold) {
    return `${font}-Bold`;
  }
  if (props?.semiBold) {
    return `${font}-SemiBold`;
  }
  if (props?.regular) {
    return `${font}-Regular`;
  }
  return defaultFont;
};

export const DefaultText = styled.Text`
  font-size: ${({ fontSize, theme }) => theme.metrics.px(fontSize || 14)}px;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.secondary};
  text-align: ${({ align }) => align || "left"};
  margin-top: ${({ theme, mt, noMargin }) =>
    theme.metrics.handlePadding(noMargin ? 0 : mt)}px;
  margin-bottom: ${({ theme, mb, noMargin }) =>
    theme.metrics.handlePadding(noMargin ? 0 : mb)}px;
  margin-left: ${({ theme, ml, noMargin }) =>
    theme.metrics.handlePadding(noMargin ? 0 : ml)}px;
  margin-right: ${({ theme, mr, noMargin }) =>
    theme.metrics.handlePadding(noMargin ? 0 : mr)}px;
  max-width: ${({ maxWidth, theme }) =>
    maxWidth ? `${theme.metrics.px(maxWidth)}px` : "auto"};
  width: ${({ width, theme, fullWidth }) =>
    width ? `${theme.metrics.px(width)}px` : fullWidth ? "100%" : "auto"};
  height: ${({ height, theme }) =>
    height ? `${theme.metrics.px(height)}px` : "auto"};
  background-color: ${({ theme, bg }) =>
    bg ? theme.colors[bg] : "transparent"};
  padding-right: ${({ theme, pr }) => theme.metrics.handlePadding(pr)}px;
  padding-left: ${({ theme, pl }) => theme.metrics.handlePadding(pl)}px;
  padding-top: ${({ theme, pt }) => theme.metrics.handlePadding(pt)}px;
  padding-bottom: ${({ theme, pb }) => theme.metrics.handlePadding(pb)}px;
  padding: ${({ theme, padding }) => theme.metrics.handlePadding(padding)}px;
  text-decoration: ${({ underlineColor }) =>
    underlineColor ? "underline" : "none"};
  opacity: ${({ opacity }) => opacity || 1};
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
`;

export const Title = styled(DefaultText).attrs({
  fontSize: 20,
})`
  font-weight: bold;
`;

export const SubTitle = styled(DefaultText).attrs({
  fontSize: 16,
})`
  font-weight: 600;
`;

export const InputText = styled(DefaultText).attrs({
  fontSize: 14,
})`
  font-weight: 900;
`;

export const LegText = styled(DefaultText).attrs({
  fontSize: 10,
})`
  font-weight: normal;
`;

export const InputEmailText = styled(DefaultText).attrs({
  fontSize: 12,
  color: "greyDark",
})`
  font-weight: bold;
`;

export const TextPlaceholder = styled(DefaultText).attrs({
  fontSize: 12,
  color: "grey",
})`
  font-weight: bold;
`;

export const TextButton = styled(DefaultText).attrs({
  fontSize: 16,
  color: "primary",
})`
  font-weight: bold;
`;
