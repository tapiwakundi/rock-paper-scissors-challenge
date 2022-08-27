import React from 'react'
import styles from './index.module.css'

type Props = {
    label: string;
    value: number;
}

export const StatCard = ({ label, value }: Props) => {
    return <div className={styles.container}>
        <span className={styles.value}>{value}</span>
        <span className={styles.label}>{label}</span>
    </div>
}