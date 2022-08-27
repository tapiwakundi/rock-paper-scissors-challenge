import { useGameStats } from '@game-app/hooks'
import { StatCard } from '@game-app/components'
import styles from './index.module.css'
import { Layout } from '@game-app/layouts'

export const TournamentOrganizer = () => {
    const { data, loading } = useGameStats()

    if (loading) {
        return <span>loading...</span>
    }

    return <Layout>
        <h1>Tournament Organizer</h1>

        <div className={styles.statsContainer}>
            <StatCard label='Number of games played' value={data.length} />
        </div>

    </Layout>
}