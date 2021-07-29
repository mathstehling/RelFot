import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {PickerContainer} from './styles';

export const PickerContrato = () => {
  const [contrato] = useState(['DNIT', 'DER']);
  const [contratoSelecionado, setContratoSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{bottom: 9}}
        selectedValue={contratoSelecionado}
        onValueChange={itemValue => setContratoSelecionado(itemValue)}>
        {contrato.map(item => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};

export const PickerLote = () => {
  const [lote] = useState(['Lote 06', 'Lote 07', 'Lote 14', 'Lote 22']);
  const [loteSelecionado, setLoteSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{bottom: 9}}
        selectedValue={loteSelecionado}
        onValueChange={itemValue => setLoteSelecionado(itemValue)}>
        {lote.map(item => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};

export const PickerRegional = () => {
  const [regional] = useState(['Regional Bahia Sul', 'Regional Bahia Norte']);
  const [regionalSelecionado, setRegionalSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{bottom: 9}}
        selectedValue={regionalSelecionado}
        onValueChange={itemValue => setRegionalSelecionado(itemValue)}>
        {regional.map(item => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};

export const PickerEqp = () => {
  const [eqp] = useState(['BRI1206 - SC', 'BRI1506 - SD']);
  const [eqpSelecionado, setEqpSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{bottom: 9}}
        selectedValue={eqpSelecionado}
        onValueChange={itemValue => setEqpSelecionado(itemValue)}>
        {eqp.map(item => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};

export const PickerPeriodo = () => {
  const [periodo] = useState([
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]);
  const [periodoSelecionado, setPeriodoSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{bottom: 9}}
        selectedValue={periodoSelecionado}
        onValueChange={itemValue => setPeriodoSelecionado(itemValue)}>
        {periodo.map(item => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};
