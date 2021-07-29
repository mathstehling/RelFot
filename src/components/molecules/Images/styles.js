import styled from 'styled-components/native';
import {BaseView, BaseTouch} from '../../atoms';

export const Container = styled(BaseView).attrs({})``;

export const ImageR19 = styled.Image.attrs({resizeMode: 'cover'})`
  width: ${({theme}) => theme.metrics.px(60)}px;
  height: ${({theme}) => theme.metrics.px(60)}px;
  margin-top: ${({theme}) => theme.metrics.px(6)}px;
  margin-left: ${({theme}) => theme.metrics.px(6)}px;
`;

export const ImageFEV = styled.Image.attrs({resizeMode: 'cover'})`
  width: ${({theme}) => theme.metrics.px(61)}px;
  height: ${({theme}) => theme.metrics.px(40)}px;
  margin-top: ${({theme}) => theme.metrics.px(16)}px;
  margin-left: ${({theme}) => theme.metrics.px(6)}px;
`;

export const ImageCOMB = styled.Image.attrs({resizeMode: 'cover'})`
  width: ${({theme}) => theme.metrics.px(41)}px;
  height: ${({theme}) => theme.metrics.px(60)}px;
  margin-top: ${({theme}) => theme.metrics.px(6)}px;
  margin-left: ${({theme}) => theme.metrics.px(6)}px;
`;

export const ImageLOMB = styled.Image.attrs({resizeMode: 'cover'})`
  width: ${({theme}) => theme.metrics.px(44)}px;
  height: ${({theme}) => theme.metrics.px(44)}px;
  margin-top: ${({theme}) => theme.metrics.px(12)}px;
  margin-left: ${({theme}) => theme.metrics.px(6)}px;
`;

export const ImageEQP = styled.Image.attrs({resizeMode: 'cover'})`
  width: ${({theme}) => theme.metrics.px(44)}px;
  height: ${({theme}) => theme.metrics.px(32)}px;
  margin-top: ${({theme}) => theme.metrics.px(20)}px;
  margin-left: ${({theme}) => theme.metrics.px(6)}px;
`;

export const Check = styled(BaseTouch).attrs({})`
width: ${({theme}) => theme.metrics.px(28)}px;
height: ${({theme}) => theme.metrics.px(28)}px;
border-radius: ${({theme}) => theme.metrics.px(14)}px;
border-width: ${({theme}) => theme.metrics.px(1)}px;
border-color: ${({theme, selected}) =>
  selected ? theme.colors.selected : theme.colors.grey}
background-color: ${({theme, selected}) =>
  selected ? theme.colors.selected : theme.colors.primary}
`;
