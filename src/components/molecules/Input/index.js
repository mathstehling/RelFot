import React, {useState} from 'react';
import {ContainerLogin, InputTextLabel, InputTextValue} from './styles';

export const InputLogin = ({placeholder, label, ...props}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  return (
    <ContainerLogin focus={focus}>
      <InputTextLabel>{label}</InputTextLabel>
      <InputTextValue placeholder={placeholder} keyboardType="email-address" />
    </ContainerLogin>
  );
};
