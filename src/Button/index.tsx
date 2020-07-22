import React, { FC } from 'react';
import { Button } from 'antd-mobile';
import { ButtonPropsType } from 'antd-mobile/es/button/PropsType';
import './index.less';

interface IButtonProps extends Omit<ButtonPropsType, 'type'> {
  type?:
    | 'light'
    | 'stable'
    | 'positive'
    | 'calm'
    | 'balanced'
    | 'energized'
    | 'assertive'
    | 'royal'
    | 'dark';
}

const TYPE_MENU = {
  '': '#fff',
  light: 'transparent',
  stable: 'rgb(248, 248, 248)',
  positive: 'rgb(73, 127,237)',
  calm: 'rgb(87, 191, 238)',
  balanced: 'rgb(103, 201, 108)',
  energized: 'rgb(247, 202, 69)',
  assertive: 'rgb(211, 84, 68)',
  royal: 'rgb(131, 110, 227)',
  dark: 'rgb(68, 68, 68)',
};

const COLOR_MENU = {
  '': '#000',
  light: '#000',
  stable: '#000',
  positive: '#fff',
  calm: '#fff',
  balanced: '#fff',
  energized: '#fff',
  assertive: '#fff',
  royal: '#fff',
  dark: '#fff',
};

const AButton: FC<IButtonProps> = props => {
  const { type = '', children = '', ...otherProps } = props;
  return (
    <div className="dumi-alita-button">
      <Button
        style={{
          background: TYPE_MENU[type],
          color: COLOR_MENU[type],
        }}
        {...otherProps}
      >
        {children}
      </Button>
    </div>
  );
};

export default AButton;
