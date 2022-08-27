import React from 'react'
import axios from 'axios'

export const useGameStats = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const getData = async () => {
        try {
            setLoading(true)
            let res = await axios.get('https://petrotranzdata.azurewebsites.net/api/matches/get')
            setData(res.data.matches)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            throw error
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    return { data, loading }
}