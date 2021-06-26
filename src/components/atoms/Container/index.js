import styled from "styled-components/native";

export const BaseView = styled.View`
  margin-top: ${({ theme, mt }) => theme.metrics.handlePadding(mt)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.handlePadding(mb)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.handlePadding(mr)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.handlePadding(ml)}px;
  border-radius: ${({ theme, br }) => theme.metrics.handleBorderRadius(br)}px;
  padding: ${({ theme, padding }) => theme.metrics.handlePadding(padding)}px;
  max-width: ${({ maxWidth, theme }) =>
    maxWidth ? `${theme.metrics.px(maxWidth)}px` : "auto"};
  background-color: ${({ theme, bg }) =>
    bg ? theme.colors[bg] : "transparent"};
  width: ${({ width, theme, fullWidth, baseWidth }) =>
    width
      ? `${theme.metrics.px(width)}px`
      : fullWidth
      ? "100%"
      : baseWidth
      ? `${theme.metrics.px(327)}px`
      : "auto"};
  height: ${({ height, theme, fullHeight }) =>
    fullHeight ? "100%" : height ? `${theme.metrics.px(height)}px` : "auto"};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  border-color: ${({ theme, borderColor }) =>
    borderColor ? theme.colors[borderColor] : "transparent"};
  border-width: ${({ theme, borderColor }) =>
    theme.metrics.px(borderColor ? 1 : 0)}px;
`;

export const BaseTouch = styled.TouchableOpacity`
  margin-top: ${({ theme, mt }) => theme.metrics.handlePadding(mt)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.handlePadding(mb)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.handlePadding(mr)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.handlePadding(ml)}px;

  padding-horizontal: ${({ theme, paddingh }) =>
    theme.metrics.handlePadding(paddingh)}px;
  border-radius: ${({ theme, br }) => theme.metrics.handleBorderRadius(br)}px;
  max-width: ${({ maxWidth, theme }) =>
    maxWidth ? `${theme.metrics.px(maxWidth)}px` : "auto"};
  background-color: ${({ theme, bg }) =>
    bg ? theme.colors[bg] : "transparent"};
  width: ${({ width, theme, fullWidth, baseWidth }) =>
    width
      ? `${theme.metrics.px(width)}px`
      : fullWidth
      ? "100%"
      : baseWidth
      ? `${theme.metrics.px(327)}px`
      : "auto"};
  height: ${({ height, theme }) =>
    height ? `${theme.metrics.px(height)}px` : "auto"};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  border-color: ${({ theme, borderColor }) =>
    borderColor ? theme.colors[borderColor] : "transparent"};
  border-width: ${({ theme, borderColor }) =>
    theme.metrics.px(borderColor ? 1 : 0)}px;
`;

export const BaseScroll = styled.ScrollView.attrs(
  ({ horizontal, pb, pl, pr, theme, align }) => ({
    horizontal: horizontal,
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      paddingBottom: theme.metrics.px(pb || 0),
      paddingLeft: theme.metrics.px(pl || 0),
      paddingRight: theme.metrics.px(pr || 0),
      alignItems: align || "center",
    },
  })
)`
  width: ${({ width, theme, fullWidth }) =>
    width ? `${theme.metrics.px(width)}px` : fullWidth ? "100%" : "auto"};
  padding-top: ${({ theme, pt }) => theme.metrics.px(pt || 0)}px;
`;

export const ContainerView = styled(BaseView).attrs()``;
