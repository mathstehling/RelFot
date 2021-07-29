import styled from 'styled-components/native';
import {BaseView, BaseTouch} from '../Container';

export const Container = styled(BaseView).attrs(({size, withBackground}) => ({
  br: withBackground ? size * 0.2 : 0,
  padding: withBackground ? size * 0.4 : 0,
}))``;

export const Touch = styled(BaseTouch).attrs(({size, withBackground}) => ({
  br: withBackground ? size * 0.2 : 0,
  padding: withBackground ? size * 0.4 : 0,
}))``;
