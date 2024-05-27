"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    const sampleCourses = [
      {
        id: 1,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Free",
        completedChapters: null,
        totalChapters: null
      },
      {
        id: 2,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Pay",
        completedChapters: null,
        totalChapters: null
      },
      {
        id: 3,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Ongoing",
        completedChapters: 3,
        totalChapters: 10
      },
      {
        id: 4,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Ongoing",
        completedChapters: 3,
        totalChapters: 10
      },
      {
        id: 5,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Free",
        completedChapters: null,
        totalChapters: null
      },
      {
        id: 6,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Pay",
        completedChapters: null,
        totalChapters: null
      },
      {
        id: 7,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Ongoing",
        completedChapters: 5,
        totalChapters: 10
      },
      {
        id: 8,
        title: "Software Engineering",
        author: "Pham Ngoc Bao",
        image: '/Cong-nghe-thong-tin-la-nganh-hoc-la-dinh-huong-nghe-nghiep-duoc-ua-chuong.jpg',
        chapters: 10,
        price: "Ongoing",
        completedChapters: 3,
        totalChapters: 10
      }
    ];
    setCourses(sampleCourses);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  // Tính toán các khóa học hiển thị cho trang hiện tại
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const renderPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-4 py-2 ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold tex-primary">All Courses</h2>
        <Select className="outline-none">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="outline-none">
            <SelectItem value="light" className="outline-none">Free</SelectItem>
            <SelectItem value="dark" className="outline-none">Pay</SelectItem>
            <SelectItem value="system" className="outline-none">Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Hiển thị danh sách khóa học */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {currentCourses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </div>
      <div className="flex gap-2 items-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="flex space-x-2">
          {renderPageNumbers()}
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleNextPage}
          disabled={indexOfLastCourse >= courses.length}
        >
          Next
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default CourseList;