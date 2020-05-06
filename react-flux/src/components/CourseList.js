import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author Id</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// Note: Documents the object shape
// [
//   {
//     id: 1,
//     title: "one",
//     athorName: "Raghu"
//   }
// ]
//  CourseList.propTypes = {
//    courses: propTypes.arrayOf(
//      PropTypes.shape({
//        id: PropTypes.number.isRequired,
//        title: PropTypes.string.isRequired,
//        authorName: PropTypes.string.isRequired
//      })
//    )
//  }
// you can see we are adding properties to the function, strange but in javascriot everything is an object.
CourseList.propTypes = {
  courses: PropTypes.array.isRequired
}

CourseList.defaultProps = {
  courses: []
}

export default CourseList;
