"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CourseItem from "./CourseItem";
function CourseList() {
  // useEffect(() => {
  //   // fetch courseList
  //   const getAllCourses = () => {
  //     GlobalApi.getAllCourseList().then((resp) => {
  //       console.log(resp);
  //     }).catch((error) => {
  //       console.error("Error fetching courses:", error);
  //     });
  //   };
  //   getAllCourses();
  // }, []);
  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold tex-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Free</SelectItem>
            <SelectItem value="dark">Pay</SelectItem>
            <SelectItem value="system">Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display courselist */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <CourseItem />
      </div>
    </div>
  );
}

export default CourseList;
