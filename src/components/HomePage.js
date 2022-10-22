import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from './QuizTopics';


const HomePage = () => {
    const datas = useLoaderData().data
    return (
        <div className='md:grid grid-cols-2 align-middle gap-3 mt-5'>
            {
                datas.map(data => <QuizTopics key={data.id} data={data}></QuizTopics>)
            }
        </div>
    );
};

export default HomePage;