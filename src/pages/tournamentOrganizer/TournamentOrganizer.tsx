import React from 'react'
import { useGameStats } from '@game-app/hooks'

export const TournamentOrganizer = () => {
    const { data, loading } = useGameStats()

    if (loading) {
        return <span>loading...</span>
    }

    return <div>TOURNAMENT ORGANIZER
        <span> {`Games playes: ${data.length}`}</span>
    </div>
}