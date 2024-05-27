import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; 
import ProgressBar from './ProgressBar';

function CourseItem({ course }) {
    const progress = course.completedChapters && course.totalChapters ? (course.completedChapters / course.totalChapters) * 100 : 0;

    return (
        <Link href={`/courseInfo`}>
            <div className='border rounded-xl hover:shadow-md hover:shadow-purple-300 mb-3 cursor-pointer'>
                <Image
                    className="rounded-t-xl"
                    src={course.image || '/default-image.jpg'}  
                    width={500}
                    height={150}
                    alt='banner'
                />
                <div className='flex flex-col gap-1 p-2'>
                    <h2 className='font-medium'>{course.title}</h2>
                    <h2 className='text-[10px] text-gray-400'>{course.author}</h2>
                    <div className='flex gap-2'>
                        <Image
                            src='/Open_book_nae_02.svg.png'
                            width={30}
                            height={20}
                        />
                        <h2 className='text-[14px] text-gray-400'>{course.chapters} Chương</h2>
                    </div>
                    <h2>{course.price}</h2>
                </div>
                {course.completedChapters !== null && course.totalChapters !== null && (
                    <div className='flex flex-col gap-2 p-2'>
                        <div className='flex justify-between gap-2'>
                            <h2 className='text-[14px] text-gray-400'>{(progress)}%</h2>
                            <h2 className='text-[14px] text-gray-400'>{course.completedChapters}/{course.totalChapters} Chapter</h2>
                        </div>
                        <ProgressBar progress={progress} />
                    </div>
                )}
            </div>
        </Link>
    );
}

export default CourseItem;
