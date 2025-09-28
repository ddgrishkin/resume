import React from 'react';
import styles from './client.module.css';
import { Reducer } from '@/layout/Reducer';
import { Header } from './components/Header';
import { ProfileImage } from './components/ProfileImage';
import { Description } from './components/Description';
import { HardSkills } from './components/HardSkills';

export function MainPage() {
    return (
        <div className={styles.container}>
            <Reducer>
                <section className={styles.content}>
                    <Header />
                    <ProfileImage />
                    <Description />
                    <HardSkills />
                </section>
            </Reducer>
        </div>
    );
}
