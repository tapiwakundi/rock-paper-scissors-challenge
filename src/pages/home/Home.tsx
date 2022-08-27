import { SelectionCard } from '@game-app/components'
import { Layout } from '@game-app/layouts'
import styles from './index.module.css'

const NAVIGATION_DATA = [
    {
        label: 'Organizer',
        link: `/tournament-organizer`,
        description: 'Get info about total number of games played'
    },
    {
        label: 'Judge',
        link: `/tournament-judge`,
        description: 'Get info about a wins per choice (rock, paper, scissors)'
    },
    {
        label: 'Spectator',
        link: `/tournament-spectator`,
        description: 'Get info about win percentage of each choice'
    }
]

export const Home = () => {
    return <Layout>
        <h1>Welcome</h1>

        <span className={styles.selection}>Please select your role</span>

        <div className={styles.cardContainer}>
            {NAVIGATION_DATA.map(item => {
                return <SelectionCard item={item} />
            })}
        </div>

        <a
            href="https://github.com/tapiwakundi/rock-paper-scissors-challenge"
            className={styles.github}
            target="_blank" rel="noreferrer"
        >
            Source Code
        </a>
    </Layout>
}
