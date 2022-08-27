import React from 'react'
import { useGameStats } from '@game-app/hooks'
import { calculateNumWins } from '@game-app/utils'

export const TournamentJudge = () => {
    const { data } = useGameStats()
    const { rockWins, paperWins, scissorsWins } = data && calculateNumWins(data)

    return <div>
        TournamentGudge

        <span>{`Rock wins: ${rockWins}`}</span>
        <span>{`Paper wins: ${paperWins}`}</span>
        <span>{`Scissors wins: ${scissorsWins}`}</span>

    </div>
}