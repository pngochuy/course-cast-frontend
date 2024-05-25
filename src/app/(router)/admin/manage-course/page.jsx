"use client";
import React from "react";
import CourseCard from "../_components/CourseCard";

function ManageCourses() {
  const courses = [
    {
      id: 1,
      name: "Course 1",
      image: "https://via.placeholder.com/150",
      users: 123,
    },
    {
      id: 2,
      name: "Course 2",
      image: "https://via.placeholder.com/150",
      users: 456,
    },
    // Add more courses as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Manage Courses
          </h1>
        </div>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ManageCourses;
