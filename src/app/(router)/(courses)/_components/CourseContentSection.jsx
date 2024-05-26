import React from 'react';
import { Lock } from 'react-feather';

function CourseContentSection({ courseInfo }) {
    // Fixed data for demonstration
    const courseInfoFixed = {
        chapters: [
            { name: 'Chapter 1', locked: true },
            { name: 'Chapter 2', locked: false },
            { name: 'Chapter 3', locked: true },
            { name: 'Chapter 4', locked: false },
        ],
    };

    return (
        <div className='p-3 bg-white rounded-sm'>
            <h2>Contents</h2>
            {courseInfoFixed.chapters.map((item, index) => (
                <div
                    key={index}
                    className='p-2 flex justify-between items-center m-2 hover:bg-gray-200 hover:text-gray-500 border rounded-sm px-4 cursor-pointer'
                >
                    <span>{index + 1}. {item.name}</span>
                    {item.locked && <Lock className='h-4 w-4' />}
                </div>
            ))}
        </div>
    );
}

export default CourseContentSection;
