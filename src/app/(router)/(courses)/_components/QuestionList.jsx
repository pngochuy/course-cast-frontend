"use client"; // Ensure this file is treated as a client component

import React, { useState } from 'react';
import { Check, X, Lock } from 'react-feather'; // Importing Check, X, and Lock icons

function QuestionList({ courseInfo }) {
    // Fixed data for demonstration
    const courseInfoFixed = {
        chapters: [
            { name: 'Question 1', locked: true, isCorrect: false },
            { name: 'Question 2', locked: false, isCorrect: true },
            { name: 'Question 3', locked: true, isCorrect: false },
            { name: 'Question 4', locked: false, isCorrect: true },
        ],
    };

    const [clickedIndices, setClickedIndices] = useState([]);

    const handleClick = (index) => {
        setClickedIndices((prev) => [...prev, index]);
    };

    return (
        <div className='p-3 bg-white rounded-sm'>
            <h2 className='text-lg font-bold mb-4'>Contents</h2>
            {courseInfoFixed.chapters.map((item, index) => (
                <div
                    key={index}
                    className={`p-2 flex justify-between items-center m-2 border rounded-sm px-4 cursor-pointer 
                                ${clickedIndices.includes(index) ? (item.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'hover:bg-primary hover:text-white'}`}
                    onClick={() => handleClick(index)}
                >
                    <span>{index + 1}. {item.name}</span>
                    {clickedIndices.includes(index) ? (
                        item.isCorrect ? <Check className='h-4 w-4' /> : <X className='h-4 w-4' />
                    ) : (
                        item.locked && <Lock className='h-4 w-4' />
                    )}
                </div>
            ))}
        </div>
    );
}

export default QuestionList;
