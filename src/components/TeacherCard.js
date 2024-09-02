import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="teacher__card">
      <div className="teacher__card__avatar">
        <img src={teacher.avatar} className="w-1/2" alt="teacher" />
      </div>
      <div className="teacher_card_content">
        <div className="teacher__card__header">
          <h2>{teacher.name}</h2>
          <span className="text-[#D7BE82]"> | </span>
           <h3>{teacher.qualification}</h3>
        </div>

        <div className="teacher__card__body">
          <h3>{teacher.subject}</h3>
          <p>{teacher.distance}</p>
        </div>

        <div className="teacher__card__desc">
          {teacher.description}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
