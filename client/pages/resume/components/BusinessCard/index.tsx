import React from 'react';
import styles from './index.module.css';

export function BusinessCard() {
    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.contacts}>
                <a className={styles.link} target='_blank' rel='noreferrer' href='mailto:gddbox@mail.ru'>Почта</a>
                <a className={styles.link} target='_blank' rel='noreferrer' href='https://t.me/ddgrishkin'>Telegram</a>
                <a className={styles.link} target='_blank' rel='noreferrer' href='https://github.com/ddgrishkin'>GitHub</a>
            </div>
            <div></div>
        </div>
    );
};
