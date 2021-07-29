import React, {useState} from 'react';
import {BaseView, SubTitle, LegText, Icon, BaseTouch} from '../../atoms';
import {
  ImageCOMB,
  ImageR19,
  ImageFEV,
  ImageLOMB,
  Check,
  ImageEQP,
} from './styles';
import R19 from '../../../assets/img/R19.png';
import COMB from '../../../assets/img/COMB.png';
import FEV from '../../../assets/img/FEV.png';
import LOMB from '../../../assets/img/LOMB.png';
import EQP from '../../../assets/img/EQP.png';

export const InsertImageR19 = ({insert, take}) => {
  const [selected, setSelected] = useState(false);

  return (
    <BaseView
      width={312}
      height={72}
      br={6}
      borderWidth
      borderColor={'grey'}
      row>
      <ImageR19 source={R19} />
      <SubTitle width={62} align={'center'} mt={15} ml={5}>
        R19 anterior
      </SubTitle>
      <BaseView align={'center'} mt={6}>
        <LegText width={44} align={'center'}>
          Inserir Imagem
        </LegText>
        <Icon name={'Upload'} size={29} onPress={insert} />
      </BaseView>
      <BaseView align={'center'} mt={6} ml={23}>
        <LegText width={44} align={'center'}>
          Retirar foto
        </LegText>
        <Icon name={'Cam'} size={29} onPress={take} />
      </BaseView>

      <BaseView align={'center'} mt={6} ml={20}>
        <LegText width={44} align={'center'}>
          Placa Furtada
        </LegText>
        <Check
          selected={selected}
          onPress={() => setSelected(selected === false ? true : false)}>
          <Icon name="check" color={'#FFFFFF'} size={18} />
        </Check>
      </BaseView>
    </BaseView>
  );
};

export const InsertImageCOMB = ({insert, take}) => {
  const [selected, setSelected] = useState(false);

  return (
    <BaseView
      width={312}
      height={72}
      br={6}
      borderWidth
      borderColor={'grey'}
      row>
      <ImageCOMB source={COMB} />
      <SubTitle width={62} align={'center'} mt={24} ml={20}>
        COMB
      </SubTitle>
      <BaseView align={'center'} mt={6}>
        <LegText width={44} align={'center'}>
          Inserir Imagem
        </LegText>
        <Icon name={'Upload'} size={29} onPress={insert} />
      </BaseView>
      <BaseView align={'center'} mt={6} ml={23}>
        <LegText width={44} align={'center'}>
          Retirar foto
        </LegText>
        <Icon name={'Cam'} size={29} onPress={take} />
      </BaseView>

      <BaseView align={'center'} mt={6} ml={20}>
        <LegText width={44} align={'center'}>
          Placa Furtada
        </LegText>
        <Check
          selected={selected}
          onPress={() => setSelected(selected === false ? true : false)}>
          <Icon name="check" color={'#FFFFFF'} size={18} />
        </Check>
      </BaseView>
    </BaseView>
  );
};

export const InsertImageFEV = ({insert, take}) => {
  const [selected, setSelected] = useState(false);

  return (
    <BaseView
      width={312}
      height={72}
      br={6}
      borderWidth
      borderColor={'grey'}
      row>
      <ImageFEV source={FEV} />
      <SubTitle width={62} align={'center'} mt={24} ml={5}>
        FEV
      </SubTitle>
      <BaseView align={'center'} mt={6}>
        <LegText width={44} align={'center'}>
          Inserir Imagem
        </LegText>
        <Icon name={'Upload'} size={29} onPress={insert} />
      </BaseView>
      <BaseView align={'center'} mt={6} ml={23}>
        <LegText width={44} align={'center'}>
          Retirar foto
        </LegText>
        <Icon name={'Cam'} size={29} onPress={take} />
      </BaseView>

      <BaseView align={'center'} mt={6} ml={20}>
        <LegText width={44} align={'center'}>
          Placa Furtada
        </LegText>
        <Check
          selected={selected}
          onPress={() => setSelected(selected === false ? true : false)}>
          <Icon name="check" color={'#FFFFFF'} size={18} />
        </Check>
      </BaseView>
    </BaseView>
  );
};

export const InsertImageLOMB = ({insert, take, children}) => {
  const [selected, setSelected] = useState(false);

  return (
    <BaseView
      width={312}
      height={72}
      br={6}
      borderWidth
      borderColor={'grey'}
      row>
      <ImageLOMB source={LOMB} />
      <SubTitle width={62} align={'center'} mt={15} ml={5}>
        {children}
      </SubTitle>
      <BaseView align={'center'} mt={6}>
        <LegText width={44} align={'center'}>
          Inserir Imagem
        </LegText>
        <Icon name={'Upload'} size={29} onPress={insert} />
      </BaseView>
      <BaseView align={'center'} mt={6} ml={23}>
        <LegText width={44} align={'center'}>
          Retirar foto
        </LegText>
        <Icon name={'Cam'} size={29} onPress={take} />
      </BaseView>

      <BaseView align={'center'} mt={6} ml={20}>
        <LegText width={44} align={'center'}>
          Placa Furtada
        </LegText>
        <Check
          selected={selected}
          onPress={() => setSelected(selected === false ? true : false)}>
          <Icon name="check" color={'#FFFFFF'} size={18} />
        </Check>
      </BaseView>
    </BaseView>
  );
};

export const InsertImageEQP = ({insert, take}) => {
  const [selected, setSelected] = useState(false);

  return (
    <BaseView
      width={312}
      height={72}
      br={6}
      borderWidth
      borderColor={'grey'}
      row>
      <ImageEQP source={EQP} />
      <SubTitle width={62} align={'center'} mt={24} ml={5}>
        Equip.
      </SubTitle>
      <BaseView align={'center'} mt={6}>
        <LegText width={44} align={'center'}>
          Inserir Imagem
        </LegText>
        <Icon name={'Upload'} size={29} onPress={insert} />
      </BaseView>
      <BaseView align={'center'} mt={6} ml={23}>
        <LegText width={44} align={'center'}>
          Retirar foto
        </LegText>
        <Icon name={'Cam'} size={29} onPress={take} />
      </BaseView>

      <BaseView align={'center'} mt={6} ml={20}>
        <LegText width={44} align={'center'}>
          Placa Furtada
        </LegText>
        <Check
          selected={selected}
          onPress={() => setSelected(selected === false ? true : false)}>
          <Icon name="check" color={'#FFFFFF'} size={18} />
        </Check>
      </BaseView>
    </BaseView>
  );
};
