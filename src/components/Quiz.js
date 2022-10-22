import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';


const Quiz = () => {
    const datas = useLoaderData().data;
    const { name, questions } = datas;
    return (
        <div className='mt-6 text-4xl font-bold'>
            <h1 className='mb-5 flex justify-center '>Quiz Of {name}</h1>
            <div className='bg-indigo-400 mt-4'>
                {
                    questions.map((question, index) => <Question key={question.id} questions={question} index={index}></Question>)
                }
            </div>

        </div>
    );
};

export default Quiz;