import React, { useState } from "react";

function Schedule(props) {
  const { days, setDays } = props;
  const handleAddDay = () => {
    setDays([
      ...days,
      {
        title: "",
        schedule: "",
      },
    ]);
  };

  const handleDeleteDay = () => {
    const newDays = days.slice(0, -1);
    setDays(newDays);
  };

  const handleScheduleChangeSchedule = (index, e) => {
    const newDays = [...days];
    newDays[index].schedule = e.target.value;
    setDays(newDays);
  };

  const handleScheduleChangeTitle = (index, e) => {
    const newDays = [...days];
    newDays[index].title = e.target.value;
    setDays(newDays);
  };

  return (
    <div>
      <label>Lịch trình :</label>
      {days?.map((day, index) => (
        <div className="days" key={`${index}-days`}>
          <div className="day">
            <p>Ngày {index + 1} : </p>
            <input
              type="text"
              className="form-control"
              value={day.title}
              onChange={(e) => handleScheduleChangeTitle(index, e)}
              placeholder="Nhập tiêu đề của ngày"
            />
          </div>
          <div>
            <p>Chi tiết ngày : </p>
            <textarea
              type="text"
              className="form-control"
              value={day.schedule}
              onChange={(e) => handleScheduleChangeSchedule(index, e)}
            />
          </div>
          <div className="line" />
        </div>
      ))}
      {days.length === 0 ? (
        <div className="bottom" onClick={handleAddDay}>
          <div className="button">Tạo lịch trình</div>
        </div>
      ) : (
        <div className="bottom">
          <div className="button" onClick={handleAddDay}>
            Thêm ngày
          </div>
          {days.length > 1 && (
            <div
              className="button"
              onClick={handleDeleteDay}
              style={{ marginLeft: "10px" }}
            >
              Xoá ngày
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Schedule;
