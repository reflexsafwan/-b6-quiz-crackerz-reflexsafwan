import { EyeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from './Option';

const Question = ({ questions, index }) => {
    const { question, options, correctAnswer, id } = questions;
    // console.log(questions,id);
    const handleCorrectAnswer = (option) => {
        if (option === correctAnswer) {
            toast('Correct')
        }
        else {
            toast('Wrong')
        }
    }
    const notify = () => toast(correctAnswer);
    return (
        <div className='flex justify-center border rounded-lg border-slate-400 mx-5 my-3 p-3'>
            <div>
                <EyeIcon onClick={notify} className='h-4 w-4 flex justify-self-end'></EyeIcon>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <p className='text-2xl font-normal'>Quiz {index + 1}: {question}</p>
                <div className='md:grid grid-cols-2	justify-between'>
                    {
                        options.map(option => <Option handleCorrectAnswer={handleCorrectAnswer} key={option} option={option} id={id}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};
export default Question;