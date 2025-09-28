import React from 'react';
import styles from './index.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Даниил Гришкин</h1>
            <h2 className={styles.subtitle}>Frontend-разработчик</h2>
        </header>
    );
};
