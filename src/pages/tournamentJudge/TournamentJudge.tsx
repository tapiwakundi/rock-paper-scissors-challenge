import { useGameStats } from '@game-app/hooks'
import { calculateNumWins } from '@game-app/utils'
import { WinsGraph } from '@game-app/components'
import { Layout } from '@game-app/layouts'
import ReactLoading from 'react-loading'

export const TournamentJudge = () => {
    const { data, loading } = useGameStats()
    const stats = data && calculateNumWins(data)

    if (loading) {
        return <ReactLoading type="spinningBubbles" color="#fff" />
    }

    return <Layout>
        <h1>Tournament Judge</h1>

        <WinsGraph stats={Object.entries(stats)} />

    </Layout>

}