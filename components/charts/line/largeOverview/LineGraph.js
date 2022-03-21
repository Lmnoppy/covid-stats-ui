import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeSeriesScale } from 'chart.js';
import 'chartjs-adapter-moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeSeriesScale
);

export default function LineGraph({ data, tooltipText }) {

    const [getData, setData] = useState(data);
    const [getSortedData, setSorted] = useState([]);
    const [getLabels, setLabels] = useState([]);
    const [getLineData, setLineData] = useState([]);

    useEffect(() => {
        setData(data)
        setSorted(getData.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        }))
        const a = []
        const b = []
        getSortedData.forEach(element => {
            a.push(new Date(element.date));
            b.push(element.newCasesByPublishDate);
        })
        setLabels(a)
        setLineData(b)
        console.table(getSortedData);
        console.table(getLineData);
    }, [getData])

    const dSets = [
        {
            label: 'UK daily deaths',
            data: getLineData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Scotland daily deaths',
            data: getLineData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'England daily deaths',
            data: getLineData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Wales daily deaths',
            data: getLineData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Northern Ireland daily deaths',
            data: getLineData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ];

    return (
        <>
            <Line data={{
                labels: getLabels,
                datasets: dSets
            }}
                height={700}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'UK Cases',
                    },
                    spanGaps: 2629800000, // milliseconds
                    responsive: true,
                    interaction: {
                        mode: 'nearest',
                    },
                    scales: {
                        x: {
                            type: 'time',
                            title: {
                                display: true,
                                text: 'Year-Month-Day'
                            },
                            autoSkip: true,
                            maxRotation: 0,
                            major: {
                                enabled: true
                            },
                            ticks: {
                                display: true,
                                autoSkip: true,
                                maxTicksLimit: 12
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Deaths'
                            },
                            min: 0,
                            max: 2000,
                            ticks: {
                                stepSize: 100
                            }
                        }
                    }
                }
                }
            />
        </>
    )
};