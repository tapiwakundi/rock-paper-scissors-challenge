import styles from './index.module.css'

type Props = {
    item: {
        link: string,
        label: string,
        description: string,
    }
}

export const SelectionCard = ({ item }: Props) => {
    const { label, description, link } = item

    return <a href={link} className={styles.container}>
        <span className={styles.label}>{label}</span>
        <span className={styles.description}>{description}</span>
    </a>
}