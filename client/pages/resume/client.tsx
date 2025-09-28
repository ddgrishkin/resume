import React from 'react';
import styles from './client.module.css';
import { Reducer } from '@/layout/Reducer';
import { Header } from './components/Header';
import { ProfileImage } from './components/ProfileImage';
import { Description } from './components/Description';
import { HardSkills } from './components/HardSkills';
import { Section } from '@/layout/Section';
import { BusinessCard } from './components/BusinessCard';

export function MainPage() {
    return (
        <div className={styles.container}>
            <Reducer>
                <div className={styles.content}>
                    <Section>
                        <Header />
                        <ProfileImage />
                        <Description />
                    </Section>
                    <Section label='Ключевые технологии'>
                        <HardSkills />
                    </Section>
                    <Section label='Контакты'>
                        <BusinessCard />
                    </Section>
                </div>
            </Reducer>
        </div>
    );
}
