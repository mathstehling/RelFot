import React from 'react';
import {
  BaseView,
  SubTitle,
  PickerContrato,
  PickerLote,
  PickerRegional,
  PickerEqp,
  PickerPeriodo,
  LargeButton,
} from '../../../../components';
import logo from '../../../../assets/img/GCT.png';
import {Image} from './styles';

export const FormScreen = ({navigation}) => {
  return (
    <BaseView ml={24}>
      <Image source={logo} />
      <SubTitle mt={20} mb={16}>
        Selecione um contrato:
      </SubTitle>
      <PickerContrato />
      <SubTitle mt={16} mb={16}>
        Selecione um lote:
      </SubTitle>
      <PickerLote />
      <SubTitle mt={16} mb={16}>
        Selecione uma regional:
      </SubTitle>
      <PickerRegional />
      <SubTitle mt={16} mb={16}>
        Selecione um equipamento:
      </SubTitle>
      <PickerEqp />
      <SubTitle mt={16} mb={16}>
        Selecione um período:
      </SubTitle>
      <PickerPeriodo />
      <BaseView fullWidth mt={80} mr={24} ml={8}>
        <LargeButton
          children={'Inserir Imagens'}
          onPress={() => navigation.navigate('ImageSignaling')}
        />
      </BaseView>
    </BaseView>
  );
};
