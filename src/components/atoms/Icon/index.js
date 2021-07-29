import React from 'react';
import {withTheme} from 'styled-components';
import {Container, Touch} from './styles';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import * as icons from '../../../assets/svg';

const IconContainer = ({onPress, children, disabled, ...props}) => {
  if (onPress) {
    return (
      <Touch onPress={onPress} disabled={disabled} {...props}>
        {children}
      </Touch>
    );
  }

  return <Container {...props}>{children}</Container>;
};

export const Icon = withTheme(
  ({
    name,
    onPress,
    size,
    mb,
    mr,
    ml,
    theme,
    mt,
    color,
    noPadding,
    material,
    style,
    disabled,
    withBackground,
    ...props
  }) => {
    const IconSVG = icons[name.toUpperCase()];
    return (
      <IconContainer
        onPress={onPress}
        mb={mb}
        mr={mr}
        ml={ml}
        mt={mt}
        noPadding={noPadding}
        style={style}
        disabled={disabled}
        withBackground={withBackground}
        size={theme.metrics.px(size || 20)}>
        {IconSVG ? (
          <IconSVG
            resizeMode="contain"
            fill={theme.colors[color || 'primary']}
            stroke={theme.colors[color || 'primary']}
            height={theme.metrics.px(size || 20)}
            width={theme.metrics.px(size || 20)}
            {...props}
          />
        ) : (
          <Material
            name={iconName}
            size={theme.metrics.px(size || 20)}
            color={theme.colors[color || 'primary']}
          />
        )}
      </IconContainer>
    );
  },
);
