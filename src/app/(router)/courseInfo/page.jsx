import React from "react";
import Welcome from "./_components/Welcome";
import Information from "./_components/Information";



function CoursesInfo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 p-5">
            <div className="col-span-3">
                {/* Banner */}
               <Welcome/>
               <Information/>
  
            </div>
            {/* Right Container */}
            <div>Right Section (Phương làm chỗ này)</div>
        </div>
    );
}

export default CoursesInfo;
