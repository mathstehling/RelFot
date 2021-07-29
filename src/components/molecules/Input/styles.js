import styled from 'styled-components/native';

export const ContainerLogin = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: ${({theme}) => theme.metrics.px(8)}px;
  margin-left: ${({theme, ml}) => theme.metrics.px(24)}px;
  margin-top: ${({theme, ml}) => theme.metrics.px(24)}px;
  margin-bottom: ${({theme, ml}) => theme.metrics.px(ml ? 137 : 0)}px;
  padding-top: ${({theme}) => theme.metrics.px(5)}px;
  background-color: ${({theme}) => theme.colors.primary};
  width: ${({theme, width}) => theme.metrics.px(width ? 327 : 312)}px;

  height: ${({theme, h}) => theme.metrics.px(h ? 101 : 53)}px;
  border-width: ${({theme, focus}) => theme.metrics.px(focus ? 2 : 1)}px;
  border-color: ${({theme, focus}) =>
    focus ? theme.colors.selected : theme.colors.grey};
  border-radius: ${({theme}) => theme.metrics.px(6)}px;
`;

export const InputTextValue = styled.TextInput`
  justify-content: flex-start;
  width: 100%;
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: ${({theme}) => theme.metrics.px(10)}px;
`;

export const InputTextLabel = styled.Text`
  font-size: ${({theme}) => theme.metrics.px(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.greyDark};

  margin-left: ${({theme}) => theme.metrics.px(5)}px;
`;
