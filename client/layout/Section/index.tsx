import React from 'react';
import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
  label?: React.ReactNode;
}

export function Section({ children, label }: Props) {
  return (
    <section className={styles.container}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};
