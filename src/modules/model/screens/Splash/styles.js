import styled from 'styled-components/native';


export const Image = styled.Image.attrs({resizeMode: 'cover'})`
  width: ${({theme}) => theme.metrics.px(189)}px;
  height: ${({theme}) => theme.metrics.px(96)}px;
`;
