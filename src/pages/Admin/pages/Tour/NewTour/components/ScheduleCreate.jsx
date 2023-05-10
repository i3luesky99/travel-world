import React from "react";

export default function ScheduleCreate(props) {
  const { dayDetail, setDayDetail } = props;
  const handleAddDay = () => {
    setDayDetail([
      ...dayDetail,
      {
        title: "",
        schedule: "",
      },
    ]);
  };

  const handleDeleteDay = () => {
    const newDays = dayDetail.slice(0, -1);
    setDayDetail(newDays);
  };

  const handleScheduleChangeSchedule = (index, e) => {
    const newDays = [...dayDetail];
    newDays[index].schedule = e.target.value;
    setDayDetail(newDays);
  };

  const handleScheduleChangeTitle = (index, e) => {
    const newDays = [...dayDetail];
    newDays[index].title = e.target.value;
    setDayDetail(newDays);
  };

  return (
    <div className="border">
      <label>Lịch trình :</label>
      {dayDetail?.map((day, index) => (
        <div className="dayDetail" key={`${index}-dayDetail`}>
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
      {dayDetail.length === 0 ? (
        <div
          className="bottom"
          style={{ marginBottom: "15px" }}
          onClick={handleAddDay}
        >
          <div className="button">Tạo lịch trình</div>
        </div>
      ) : (
        <div className="bottom" style={{ marginBottom: "15px" }}>
          <div className="button" onClick={handleAddDay}>
            Thêm ngày
          </div>
          {dayDetail.length > 1 && (
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
