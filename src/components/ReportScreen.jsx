import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { getReport } from '../helpers/books';


function ReportScreen() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getReport().then(({ data }) => {
            const { results } = data
            setBooks(results)
        })

    }, [])

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className='mt-10 flex flex-wrap mx-auto justify-evenly'>

            {
                books.map((book) => {

                    const nums = [book.book_unavailable_copies, book.book_available_copies]

                    const data = {
                        labels: ['No devuelto', 'Devuelto'],
                        datasets: [
                            {
                                label: book.book_title,
                                data: nums,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)'
                                ],
                                borderWidth: 1,
                            },
                        ],
                    };


                    return (
                        <div >
                            <h5 className="text-center	animate__animated animate__rotateIn my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.book_title}</h5>
                            <Doughnut data={data} />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default ReportScreen