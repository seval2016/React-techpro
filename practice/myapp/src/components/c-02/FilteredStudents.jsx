import React from "react";
import  students from "../../assets/data/students.json";

const FilteredStudents = () => {
  //!listeye yaşı 25 ten küçük olanların isimlerini ekleyelim
  return (
    <div>
      <ol>
        {students
          .filter((student) => student.yas < 25)
          .map((item,index) => (
            <li key={index}>{item.isim}</li>
          ))}
      </ol>
    </div>
  );
};

export default FilteredStudents;
