import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";
import { handleCreateTourDetail } from "../../../../../../services/tourService";
import { useParams } from "react-router-dom";

export default function Schedule(props) {
  const { dayDetail, setDayDetail } = props;
  const { id } = useParams();

  const handleAddDay = () => {
    setDayDetail([
      ...dayDetail,
      {
        title: "",
        schedule: "",
        tourId: id,
        isEdit: false,
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

  const onEnableToEdit = (index, prop) => {
    const newDays = [...dayDetail];
    newDays[index].isEdit = prop;
    setDayDetail(newDays);
  };

  const enableEdit = (index) => {
    onEnableToEdit(index, true);
  };

  const onSave = async (index) => {
    const { title, schedule, tourId } = dayDetail[index ];
    await handleCreateTourDetail({ title, schedule, tourId });
    onEnableToEdit(index, false);
  };

  const onCancel = (index) => {
    onEnableToEdit(index, false);
  };

  const propsButton = {
    onSave: onSave,
    onCancel: onCancel,
  };
  return (
    <div className="border">
      <label>Lịch trình :</label>
      {dayDetail?.map((day, index) => (
        <div className="dayDetail" key={`${index}-dayDetail`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: !day.isEdit ? "90%" : "75%",
              }}
            >
              <div
                className="day"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ whiteSpace: "nowrap", marginRight: "10px" }}>
                  Ngày {index + 1} :
                </div>
                {!day.isEdit ? (
                  <div>{day.title}</div>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    value={day.title}
                    onChange={(e) => handleScheduleChangeTitle(index, e)}
                    placeholder="Nhập tiêu đề của ngày"
                    style={{ margin: "0px" }}
                  />
                )}
              </div>
              <div>
                <div style={{ marginTop: "15px" }}>Chi tiết ngày : </div>
                {day.isEdit ? (
                  <textarea
                    type="text"
                    className="form-control"
                    value={day.schedule}
                    onChange={(e) => handleScheduleChangeSchedule(index, e)}
                  />
                ) : (
                  <div>{day.schedule}</div>
                )}
              </div>
            </div>
            {!day.isEdit ? (
              <img
                src={iconPencil}
                alt=""
                className="icon"
                onClick={() => enableEdit(index, day.isEdit)}
              />
            ) : (
              <ButtonGroup {...propsButton} index={index} />
            )}
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
