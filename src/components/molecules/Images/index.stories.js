import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {InsertImage} from './index';
import {BaseView} from '../../atoms';

const story = storiesOf('InsertImage', module);

/*story.addDecorator(getStory => <Container> {getStory()} </Container>);*/
story.add('InsertImage', () => (
  <BaseView fullWidth fullHeight align={'center'} justify={'center'}>
    <InsertImage />
  </BaseView>
));
