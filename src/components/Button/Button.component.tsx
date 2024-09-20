import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonVariant = 'filled' | 'outlined' | 'link';
type ButtonColor = 'primary' | 'secondary';
type ButtonProps = {
  variant?: ButtonVariant;
  label?: string;
  color?: ButtonColor;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  label = 'Button',
}) => {
  const buttonVariant = `${variant}-${color}`;

  return (
    <div className={classNames(styles.base, styles[buttonVariant])}>
      {label}
    </div>
  );
};

export default Button;
