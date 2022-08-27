import { Match } from "../models/Match";
import { GameChoice } from "../models/Match"

export const calculateNumWins = (data: Match[]) => {
    let rockWins = 0
    let paperWins = 0
    let scissorsWins = 0

    console.log(data);


    for (let i = 0; i < data.length; i++) {
        const match = data[i]

        if (match.choice1 === match.choice2) {
            continue
        }

        else if (match.choice1 === GameChoice.rock) {
            if (match.choice2 === GameChoice.paper) {
                paperWins++
            } else {
                rockWins++
            }
        }

        else if (match.choice1 === GameChoice.scissors) {
            if (match.choice2 === GameChoice.rock) {
                rockWins++
            } else {
                scissorsWins++
            }
        }

        else if (match.choice1 === GameChoice.paper) {
            if (match.choice2 === GameChoice.scissors) {
                scissorsWins++
            } else {
                paperWins++
            }
        }
    }

    return {
        rockWins,
        paperWins,
        scissorsWins
    }
}