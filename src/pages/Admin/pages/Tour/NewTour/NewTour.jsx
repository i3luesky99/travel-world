import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import * as locales from "react-date-range/dist/locale";
import TourNameCreate from "./components/TourNameCreate";
import TransportationCreate from "./components/TransportationCreate";
import PlaceGoCreate from "./components/PlaceGoCreate";
import PlaceDestCreate from "./components/PlaceDestCreate";
import NoteCreate from "./components/NoteCreate";
import PriceCreate from "./components/PriceCreate";
import ScheduleCreate from "./components/ScheduleCreate";
moment.locale("vi");

export default function NewTour() {
  const [tour, setTour] = useState({
    nameTour: "",
    placeDest: "",
    placeGo: "",
    state: 0,
    adultPrice: "",
    childrenPrice: "",
    adultSlot: "",
    childrenSlot: "",
    babyPrice: "",
    babySlot: "",
    note: "",
    transportation: "Xe du lịch đời mới",
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [dayDetail, setDayDetail] = useState([]);

  const startDate = `${moment(`${date[0].startDate}`).format("L")}`;
  const endDate = `${moment(`${date[0].endDate}`).format("L")}`;

  const handleSubmit = (e) => {
    const newTour = {
      ...tour,
      dateGo: startDate,
      dateBack: endDate,
      dayDetail: dayDetail,
      imgURL: selectedImages,
    };
    console.log(newTour);
  };

  const handleChangeInput = (inputName, inputValue) => {
    setTour((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  //Get image from local
  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setSelectedImages((prevFiles) => [...prevFiles, ...newFiles]);
  };

  //Change to URL image
  const fileList = selectedImages.map((file) => {
    return {
      file,
      url: URL.createObjectURL(file),
    };
  });

  const deleteImage = useCallback(
    (indexSelected) => {
      const newImageList = selectedImages.filter((file, index) => {
        return index !== indexSelected;
      });
      setSelectedImages(newImageList);
    },
    [selectedImages]
  );
  const props = {
    dayDetail: dayDetail,
    setDayDetail: setDayDetail,
    tour: tour,
    setTour: setTour,
    handleChangeInput: handleChangeInput,
  };

  useEffect(() => {}, [deleteImage]);
  return (
    <div className="new-tour">
      <div className="title-admin">Thêm mới Tour</div>
      <form>
        <div className="top border">
          <label>Thời điểm :</label>
          <div className="calendar">
            <div>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                locale={locales["vi"]}
              />
              <TourNameCreate {...props} />
              <TransportationCreate {...props} />
            </div>
            <div className="day">
              <div style={{ display: "flex" }}>
                Ngày đi :<p>{startDate}</p>
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>-</p>
                Ngày về :<p>{endDate}</p>
              </div>
              <PlaceGoCreate {...props} />
              <PlaceDestCreate {...props} />
              <NoteCreate {...props} />
            </div>
          </div>
        </div>
        <PriceCreate {...props} />
        <ScheduleCreate {...props} />
        <div className="border">
          <label>
            Ảnh :
            <input
              id="image-place"
              type="file"
              multiple
              onChange={handleImageChange}
            />
            <div className="button-select">
              <div className="text">Chọn hoặc thả ảnh vào đây</div>
            </div>
          </label>
          <div className="image-selected">
            {fileList.map((image, index) => (
              <div className="picture" key={`${index}-image`}>
                <img src={image.url} alt="Selected" />
                <img
                  src={require("../../../../../assets/picture/icon/cancel.png")}
                  alt=""
                  className="icon"
                  onClick={() => deleteImage(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <div onClick={handleSubmit} className="button">
            Tạo tour
          </div>
        </div>
      </form>
    </div>
  );
}
