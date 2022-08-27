import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type Props = {
    stats: [
        string,
        number
    ][],
}

export const WinsGraph = ({ stats }: Props) => {
    const data = stats.map(stat => {
        return {
            name: stat[0],
            wins: stat[1]
        }
    })

    console.log(data);


    return <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        barSize={20}
    >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="wins" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
}