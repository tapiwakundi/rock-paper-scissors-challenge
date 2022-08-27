import { useGameStats } from '@game-app/hooks'
import { StatCard } from '@game-app/components'
import styles from './index.module.css'

export const TournamentOrganizer = () => {
    const { data, loading } = useGameStats()

    if (loading) {
        return <span>loading...</span>
    }

    return <div>
        <h1>Tournament Organizer</h1>

        <div className={styles.statsContainer}>
            <StatCard label='Number of games playess' value={data.length} />
        </div>

    </div>
}