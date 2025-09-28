import React from 'react';
import data from './data';
import { Badge } from '@/shared/ui/Badge';
import styles from './index.module.css';

export function HardSkills() {
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <Badge key={item.title}>
                    <span className={styles.text}>
                        {item.title}
                    </span>
                </Badge>
            ))}
        </div>
    );
};

