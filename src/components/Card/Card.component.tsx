import React from 'react';
import styles from './Card.module.css';
import classNames from 'classnames';

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={classNames(styles.base, className)}>{children}</div>;
};

export default Card;
