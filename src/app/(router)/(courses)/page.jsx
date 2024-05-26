import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import SideBanner from "./_components/SideBanner";
import SideBannerDetail from "./_components/SideBannerDetail";
import CourseContentSection from "./_components/CourseContentSection";
import QuestionList from "./_components/QuestionList";

function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      {/* Left Container */}
      <div className="md:col-span-3">
        {/* Banner */}
        <WelcomeBanner />
        {/* Course List */}
        <CourseList />
      </div>
      {/* Right Container */}
      <div className="md:col-span-1 p-5 bg-white rounded-xl">
        {/* <SideBannerDetail /> */}
        {/* <SideBanner /> */}
        {/* <CourseContentSection></CourseContentSection> */}
        <QuestionList/>
      </div>
    </div>
  );
}

export default Courses;
