import React from 'react';
import {
  BaseView,
  InsertImageEQP,
  InsertImageLOMB,
  SubTitle,
  LargeButton,
} from '../../../../components';
import logo from '../../../../assets/img/GCT.png';
import {Image} from './styles';

export const ImageEQPScreen = ({navigation}) => {
  return (
    <BaseView ml={24}>
      <Image source={logo} />
      <SubTitle mt={16} mb={16}>
        Insira as imagens de sinalização:
      </SubTitle>
      <InsertImageEQP />
      <BaseView mt={16} mb={16}>
        <InsertImageLOMB children={'Lomb FX1'} />
      </BaseView>
      <InsertImageLOMB children={'Lomb FX2'} />
      <BaseView mt={16} mb={140}>
        <InsertImageLOMB children={'Lomb FX3'} />
      </BaseView>
      <LargeButton
        children={'Enviar'}
        onPress={() => navigation.navigate('Finish')}
      />
    </BaseView>
  );
};
