import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPageFunctionComponent() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Manage Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPageFunctionComponent;
