import React from 'react';
import styles from './index.module.css';

type Props = {
    children: React.ReactNode;
}

export function Reducer({children}: Props) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};
