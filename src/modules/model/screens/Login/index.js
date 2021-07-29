import React from 'react';
import {BaseView, Title, InputLogin, LargeButton} from '../../../../components';
import logo from '../../../../assets/img/GCT.png';
import {Image} from './styles';

export const LoginScreen = ({navigation}) => {
  return (
    <BaseView>
      <Image source={logo} />
      <Title mt={92} ml={24}>
        Relatório Fotográfico
      </Title>
      <InputLogin label={'Usuário'} placeholder={'contato@gctnet.com.br'} />
      <InputLogin label={'Senha'} placeholder={'***************'} />
      <BaseView align="center" mt={250} fullWidth>
        <LargeButton
          children={'Entrar'}
          onPress={() => navigation.navigate('Form')}
        />
      </BaseView>
    </BaseView>
  );
};
