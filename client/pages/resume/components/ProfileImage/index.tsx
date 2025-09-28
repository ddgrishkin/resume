import React from 'react';
import ProfileUrl from './profile.jpg';
import styles from './index.module.css';

export function ProfileImage() {
    return (
        <figure className={styles.figure}>
            <img className={styles.image} src={ProfileUrl} alt="" />
        </figure>
    );
};
