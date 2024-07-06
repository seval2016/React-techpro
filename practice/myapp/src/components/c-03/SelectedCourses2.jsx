import React from "react";
import data from "../../assets/data/students.json";

const SelectedCourses2 = () => {
  return (
    <div>
    <Select>
      <option disabled>Select Course</option>
      {data
        .reduce((values, course) => {
          if (!values.includes(course.kurs)) values.push(course.kurs);
          return values;
        }, [])
        .map((item, index) => (
          <option key={index}>{item}</option>
        ))}
    </Select>
    </div>
  );
};

export default SelectedCourses2;
