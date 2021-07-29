import React, {useState} from 'react';
import {
  BaseView,
  InsertImageR19,
  InsertImageFEV,
  InsertImageCOMB,
  InsertImageEQP,
  InsertImageLOMB,
  SubTitle,
  LargeButton,
} from '../../../../components';
import logo from '../../../../assets/img/GCT.png';
import {Image} from './styles';

export const ImageSignalingScreen = ({navigation}) => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const onChangePhoto = newPhoto => {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  };
  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };
  return (
    <BaseView ml={24}>
      <Image source={logo} />
      <SubTitle mt={16} mb={16}>
        Insira as imagens de sinalização:
      </SubTitle>
      <InsertImageR19 />
      <BaseView mt={16} mb={16}>
        <InsertImageFEV />
      </BaseView>
      <InsertImageR19 />
      <BaseView mt={16} mb={140}>
        <InsertImageCOMB />
      </BaseView>
      <LargeButton
        children={'Proximo'}
        onPress={() => navigation.navigate('ImageEQP')}
      />
    </BaseView>
  );
};
