import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import * as locales from "react-date-range/dist/locale";
import TourName from "./components/TourName";
import Transportation from "./components/Transportation";
import PlaceGo from "./components/PlaceGo";
import PlaceDest from "./components/PlaceDest";
import Note from "./components/Note";
import Day from "./components/Day";
import Price from "./components/Price";
import Schedule from "./components/Schedule";
import Images from "./components/Images";
import { useParams } from "react-router-dom";
import {
  handleGetTourById,
  handleUpdateTour,
} from "../../../../../services/tourService";
moment.locale("vi");

export default function TourDetailAdmin() {
  const { id } = useParams();
  const [tour, setTour] = useState({
    id: id,
    nameTour: "",
    placeDest: "",
    placeGo: "",
    state: 0,
    adultPrice: "",
    childPrice: "",
    adultSlot: "",
    babyPrice: "",
    note: "",
    transportation: "Xe du lịch đời mới",
  });
  const [isEdit, setIsEdit] = useState({
    nameTour: false,
    day: false,
    placeDest: false,
    placeGo: false,
    price: false,
    note: false,
    image: false,
    transportation: false,
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

  const handleSubmit = async (e) => {
    const newTour = {
      ...tour,
      dateGo: startDate,
      dateBack: endDate,
      // dayDetail: dayDetail,
      // imgURL: selectedImages,
    };
    await handleUpdateTour(newTour);
    window.location.replace(`/admin/tour-detail/${id}`);
  };
  const handleChangeInput = (inputName, inputValue) => {
    setTour((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

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
    isEdit: isEdit,
    setIsEdit: setIsEdit,
    startDate: startDate,
    endDate: endDate,
    selectedImages: selectedImages,
    setSelectedImages: setSelectedImages,
    deleteImage: deleteImage,
  };
  const handleFetchTour = async () => {
    const { tour } = await handleGetTourById(id);
    setDayDetail(tour.tourDetailData);
    setTour(tour);
  };

  useEffect(() => {
    handleFetchTour();
  }, [deleteImage]);

  return (
    <div className="new-tour">
      <div className="title-admin">Chi tiết Tour</div>
      <form>
        <div className="top border">
          <label>Thời điểm :</label>
          <div
            className="calendar"
            style={{ flexDirection: !isEdit.day && "column" }}
          >
            <div>
              {isEdit.day && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  locale={locales["vi"]}
                />
              )}
              <PlaceGo {...props} />
              <PlaceDest {...props} />
            </div>
            <div className="day" style={{ marginLeft: !isEdit.day && "0px" }}>
              <Day {...props} />
              <TourName {...props} />
              <Transportation {...props} />
              <Note {...props} />
            </div>
          </div>
        </div>

        <Price {...props} />
        <Schedule {...props} />
        <Images {...props} />
        <div className="bottom">
          <div onClick={handleSubmit} className="button">
            Cập nhập tour
          </div>
        </div>
      </form>
    </div>
  );
}
