import React from 'react';

const Option = ({ option, id, handleCorrectAnswer }) => {
    return (
        <div className='flex align-middle mt-2'>
            <input onClick={() => handleCorrectAnswer(option)} type="radio" name={id} id="radio1" />
            <p className='text-sm ml-1'>{option}</p>
        </div>
    );
};

export default Option;