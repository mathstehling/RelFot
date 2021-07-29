import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {
  PickerContrato,
  PickerLote,
  PickerRegional,
  PickerEqp,
  PickerPeriodo,
} from './index';
import {BaseView} from '../../atoms';

const story = storiesOf('Picker', module);

/*story.addDecorator(getStory => <Container> {getStory()} </Container>);*/
story.add('PickerContrato', () => (
  <BaseView fullWidth fullHeight align={'center'} justify={'center'}>
    <PickerContrato />
  </BaseView>
));

story.add('PickerLote', () => (
  <BaseView fullWidth fullHeight align={'center'} justify={'center'}>
    <PickerLote />
  </BaseView>
));

story.add('PickerRegional', () => (
  <BaseView fullWidth fullHeight align={'center'} justify={'center'}>
    <PickerRegional />
  </BaseView>
));

story.add('PickerEqp', () => (
  <BaseView fullWidth fullHeight align={'center'} justify={'center'}>
    <PickerEqp />
  </BaseView>
));

story.add('PickerPeriodo', () => (
  <BaseView fullWidth fullHeight align={'center'} justify={'center'}>
    <PickerPeriodo />
  </BaseView>
));
