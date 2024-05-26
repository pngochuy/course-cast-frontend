import React from 'react';

function CourseEnrollSection() {
    return (
        <div className='p-3 text-center rounded-sm bg-primary flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold text-white'>
                Enroll to the Course
            </h2>
            <p className='text-white font-light mb-3'>
                Enroll Now to Start
            </p>
            <button className="bg-white text-primary hover:bg-gray-200 hover:text-primary px-4 py-2 rounded-lg">
                Enroll Now
            </button>
        </div>
    );
}

export default CourseEnrollSection;
