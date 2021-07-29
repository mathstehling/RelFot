import styled from 'styled-components/native';


export const PickerContainer = styled.View`
  width: ${({theme}) => theme.metrics.px(312)}px;
  height: ${({theme}) => theme.metrics.px(35)}px;
  border-color: ${({theme}) => theme.colors.grey};
  border-width: ${({theme}) => theme.metrics.px(1)}px;

  padding-bottom: ${({theme}) => theme.metrics.px(5)}px;
`;
