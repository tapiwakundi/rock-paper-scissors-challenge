import React from 'react'
import styles from './index.module.css'

type Props = {
    children: React.ReactNode[]
}

export const Layout = ({ children }: Props) => {
    return <main className={styles.main}>
        {children}
    </main>
}