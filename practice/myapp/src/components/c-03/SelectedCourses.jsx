import React from 'react'
import students from "../../assets/data/students.json";


const SelectedCourses = () => {
  const uniqueStudents=[...new Set(students.map(student => student.kurs))]
  //selected içerisine kursları tekrarsız bir şekilde ekleyelim

  return (
    <div>
      <ul>
       {
        uniqueStudents
        .map((kurs,index)=>(
          <li key={index}>{index+1 + ".Kurs : " +  kurs}</li>
        ))
       }
      </ul>
    </div>
  )
}

export default SelectedCourses