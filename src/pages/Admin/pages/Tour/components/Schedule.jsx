import React, { useState } from "react";
import { iconPencil } from "../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";
import {
  handleCreateTourDetail,
  handleDeleteDayDetail,
  handleUpdateDayDetail,
} from "../../../../../services/tourService";
import { useParams } from "react-router-dom";
import { Popup } from "../../../../../components/index";

export default function Schedule(props) {
  const { dayDetail, setDayDetail } = props;
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleAddDay = () => {
    setDayDetail([
      ...dayDetail,
      {
        title: "",
        schedule: "",
        tourId: id,
        isEdit: true,
      },
    ]);
  };

  const handleDeleteDay = async () => {
    try {
      const newDays = dayDetail.slice(0, -1);
      setDayDetail(newDays);
      await handleDeleteDayDetail(selectedId);
    } catch (error) {
      return error;
    }
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

  const onSave = async (index, id) => {
    const { title, schedule, tourId } = dayDetail[index];
    try {
      if (id) {
        await handleUpdateDayDetail({ title, schedule, tourId, id: id });
      } else {
        await handleCreateTourDetail({ title, schedule, tourId });
      }
    } catch (error) {
      return error;
    }
    onEnableToEdit(index, false);
  };

  const onCancel = (index) => {
    onEnableToEdit(index, false);
  };

  const propsButton = {
    onSave: onSave,
    onCancel: onCancel,
  };

  const handleOpenDialog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAccept = () => {
    handleDeleteDay();
    setOpen(false);
  };
  const propsPopup = {
    open: open,
    title: `Bạn có chắc muốn xóa chi tiết ngày thứ ${dayDetail.length} ?`,
    handleClose: handleClose,
    handleAccept: handleAccept,
    setOpen: setOpen,
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
                  <div>{day?.title}</div>
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
                    placeholder="Nhập chi tiết ngày..."
                    value={day.schedule}
                    onChange={(e) => handleScheduleChangeSchedule(index, e)}
                  />
                ) : (
                  <div>{day?.schedule}</div>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <ButtonGroup {...propsButton} index={index} id={day?.id} />
                {index === dayDetail.length - 1 && (
                  <div
                    className="button"
                    onClick={() => handleOpenDialog(day?.id)}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "red",
                      marginTop: "10px",
                      width: "100px",
                    }}
                  >
                    Xoá ngày
                  </div>
                )}
              </div>
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
          <div
            className="button"
            onClick={handleAddDay}
            style={{ background: "#56b5bb" }}
          >
            Thêm ngày
          </div>
        </div>
      )}
      <Popup {...propsPopup} />
    </div>
  );
}
