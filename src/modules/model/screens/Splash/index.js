import React from 'react';
import {BaseView, Title} from '../../../../components';
import {Image} from './styles';
import logo from '../../../../assets/img/GCT.png';
import {useEffect} from 'react';

export const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <BaseView fullWidth fullHeight align={'center'} justify={'center'}>
      <Image source={logo} />
      <Title mt={23}>Relatório fotográfico</Title>
    </BaseView>
  );
};
