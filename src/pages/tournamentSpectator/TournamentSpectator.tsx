import { WinsGraphPercentages } from "@game-app/components"
import { useGameStats } from "@game-app/hooks"
import { calculateNumWins } from "@game-app/utils"
import styles from './index.module.css'

export const TournamentSpectator = () => {
    const { data } = useGameStats()
    const stats = data && calculateNumWins(data)

    return <main className={styles.mainConatiner}>
        <h1>Spectator</h1>
        <WinsGraphPercentages />
    </main>
}