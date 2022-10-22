
import React from 'react';
import { Link } from 'react-router-dom';


const QuizTopics = ({ data }) => {
    const { name, logo, total, id } = data;
    return (
        <div>

            <div className="flex justify-center mb-4">
                <div className="rounded-lg shadow-lg max-w-sm">
                    <img className="rounded-t-lg  bg-black" src={logo} alt="" />
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{name} Quiz</h5>
                        <div className='flex align-middle justify-between'>
                            <h3 className='py-2 text-lg '>Total Quiz: {total}</h3>
                            <div className='flex align-middle  px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-600 active:shadow-lg transition duration-150 ease-in-out'>
                                <Link to={`/quiz/${id}`} className="mr-2">Start Quiz</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizTopics;