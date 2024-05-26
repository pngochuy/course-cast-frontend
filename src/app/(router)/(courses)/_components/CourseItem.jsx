import Image from 'next/image';
import React from 'react';
import ProgressBar from './ProgressBar';
function CourseItem({ course }) {
    return (
        <div>
            <div className='border rounded-xl hover:shadow-md hover:shadow-purple-300 mb-3 cursor-pointer'>
                <Image
                    className="rounded-t-xl"
                    src='/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg'
                    width={500}
                    height={150}
                    alt='banner'
                />
                <div className='flex flex-col gap-1 p-2'>
                    <h2 className='font-medium'>Software Engineering</h2>
                    <h2 className='text-[10px] text-gray-400'>Pham Ngoc Bao</h2>
                    <div className='flex gap-2'>
                        <Image
                            src='/Open_book_nae_02.svg.png'
                            width={30}
                            height={20}
                        />
                        <h2 className='text-[14px] text-gray-400'>10 Chapters</h2>
                    </div>
                    <h2>Free</h2>
                </div>
            </div>
            <div className='border rounded-xl hover:shadow-md hover:shadow-purple-300 mb-3 cursor-pointer'>
                <Image
                    className="rounded-t-xl"
                    src='/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg'
                    width={500}
                    height={150}
                    alt='banner'
                />
                <div className='flex flex-col gap-1 p-2'>
                    <h2 className='font-medium'>Software Engineering</h2>
                    <h2 className='text-[10px] text-gray-400'>Pham Ngoc Bao</h2>
                    <div className='flex gap-2'>
                        <Image
                            src='/Open_book_nae_02.svg.png'
                            width={30}
                            height={20}
                        />
                        <h2 className='text-[14px] text-gray-400'>10 Chapters</h2>
                    </div>
                    <h2>Pay</h2>
                </div>
            </div>
            <div className='border rounded-xl hover:shadow-md hover:shadow-purple-300 mb-3 cursor-pointer'>
                <Image
                    className="rounded-t-xl"
                    src='/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg'
                    width={500}
                    height={150}
                    alt='banner'
                />
                <div className='flex flex-col gap-1 p-2'>
                    <h2 className='font-medium'>Software Engineering</h2>
                    <h2 className='text-[10px] text-gray-400'>Pham Ngoc Bao</h2>
                    <div className='flex justify-between  gap-2'>
                        <h2 className='text-[14px] text-gray-400'>30%</h2>
                        <h2 className='text-[14px] text-gray-400'>3/10 Chapters</h2>
                        
                    </div>
                    <ProgressBar progress={30} />
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
