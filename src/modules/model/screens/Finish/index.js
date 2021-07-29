import React from 'react';
import {BaseView, Title, LargeButton} from '../../../../components';
import {Image} from './styles';
import logo from '../../../../assets/img/GCT.png';
import {useEffect} from 'react';

export const FinishScreen = ({navigation}) => {
  return (
    <BaseView fullWidth fullHeight align={'center'} mt={218}>
      <Image source={logo} />
      <Title mt={23} width={205} align={'center'} mb={250}>
        Imagens enviadas com sucesso
      </Title>

      <LargeButton
        children={'Enviar novas imagens'}
        onPress={() => navigation.navigate('Form')}
      />
    </BaseView>
  );
};
