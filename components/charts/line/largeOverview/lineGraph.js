import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineGraph({ data, tooltipText }) {

    const [getData, setData] = useState(data);
    const [sortedData, setSorted] = useState([]);
    const [getLabels, setLabels] = useState([]);
    const [getLineData, setLineData] = useState([]);

    useEffect(() => {
        setSorted(getData.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
          }))
        const a = []
        const b = []  
        sortedData.forEach(element => {
            a.push(element.date);
            b.push(element.cumDailyNsoDeathsByDeathDate);
        })
        setLabels(a);
        setLineData(b)
    }, [getData])

    return (
        <>
            {getLineData.length > 1 ?
                <Line data={{
                    labels: getLabels,
                    datasets: [
                        {
                            label: 'UK deaths',
                            data: getLineData,
                        }
                    ]
                }}
                    height={500} width={600}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'UK Deaths',
                        },
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 12
                        }, 
                        scales: {
                            x: {
                              title: {
                                display: true,
                                text: 'Year-Month-Day'
                              }
                            },
                            y: {
                              title: {
                                display: true,
                                text: 'Value'
                              },
                              min: 10000,
                              max: 200000,
                              ticks: {
                                // forces step size to be 50 units
                                stepSize: 10000
                              }
                            }
                          }
                    }}
                />
                : <p>Hello</p>
            }
        </>
    )
};