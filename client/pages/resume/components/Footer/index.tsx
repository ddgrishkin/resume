import React from 'react';
import styles from './index.module.css';
import { Reducer } from '@/layout/Reducer';

export function Footer() {
    return (
        <div className={styles.container}>
            <Reducer>
                <div className={styles.content}>
                    <div className={styles.contacts}>
                        <a className={styles.contact} target='_blank' rel='noreferrer' href='mailto:gddbox@mail.ru'>Почта</a>
                        <a className={styles.contact} target='_blank' rel='noreferrer' href='https://t.me/ddgrishkin'>Telegram</a>
                        <a className={styles.contact} target='_blank' rel='noreferrer' href='https://github.com/ddgrishkin'>GitHub</a>
                    </div>
                    <a
                        className={styles.resumeLink}
                        href="/public/Гришкин Даниил(CV).pdf"
                        download='Гришкин Даниил(CV).pdf'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className={styles.text}>Скачать резюме</span>
                        <span className={styles.icon}></span>
                    </a>
                </div>
            </Reducer>
        </div>
    );
};
