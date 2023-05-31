import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import * as locales from "react-date-range/dist/locale";

import { useParams } from "react-router-dom";
import {
  handleGetTourById,
  handleUpdateTour,
} from "../../../../../services/tourService";
import {
  Note,
  PickedImage,
  PlaceDest,
  PlaceGo,
  Price,
  Region,
  Schedule,
  TourName,
  TourType,
  Transportation,
} from "../components";
import {
  convertToBase64,
  formatDate,
  handleLoadDataImageFromData,
} from "../../../../../theme/functions";
import useModel from "../../../../../hook/useModel";
import Loading from "../../../../../components/Loading/Loading";
moment.locale("vi");

export default function TourDetailAdmin() {
  const { id } = useParams();
  const [tour, setTour] = useState({
    id: id,
    nameTour: "",
    placeDest: "",
    placeGo: "Thành phố Hồ Chí Minh",
    state: "s1",
    adultPrice: "",
    childPrice: "",
    adultSlot: "",
    childrenSlot: 0,
    babyPrice: "",
    note: "",
    transportation: "Xe du lịch đời mới",
    regionType: null,
    tourType: "Trong nước",
  });
  const [warning, setWarning] = useState(false);
  const [base64, setBase64] = useState("");
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
  const { isOpen: isLoading, openModel: setIsLoading } = useModel(false);
  const [regionType, setRegionType] = useState("Mien Bac");
  const [continentType, setContinentType] = useState("Chau My");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [selectedImages, setSelectedImages] = useState();
  const [dayDetail, setDayDetail] = useState([]);

  const startDate = `${moment(`${date[0].startDate}`).format("L")}`;
  const endDate = `${moment(`${date[0].endDate}`).format("L")}`;

  const handleSubmit = async (e) => {
    const newTour = {
      ...tour,
      dateGo: startDate,
      dateBack: endDate,
      image: base64 || selectedImages,
      destinationId:
        tour.tourType === "Ngoài nước" ? continentType : regionType,
    };
    try {
      for (const [key, value] of Object.entries(newTour)) {
        if (value === "" && key !== "inviteCode") {
          setWarning(true);
          return;
        }
      }
      setWarning(false);
      handleUpdateTour(newTour);
      window.location.replace(`/admin/tour-detail/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeInput = (inputName, inputValue) => {
    setTour((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  const deleteImage = () => {
    setSelectedImages("");
    setBase64("");
  };

  const handleImageChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setSelectedImages(url);
    convertToBase64(url)
      .then((base64String) => {
        setBase64(base64String);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFetchTour = async () => {
    setIsLoading(true);
    try {
      const { tour } = await handleGetTourById(id);
      const img = handleLoadDataImageFromData(tour?.image.data);
      const dateGo = tour?.dateGo;
      const dateBack = tour?.dateBack;
      const newDate = [...date];
      newDate[0].startDate = formatDate(dateGo);
      newDate[0].endDate = formatDate(dateBack);
      setDayDetail(tour?.tourDetailData);
      setTour(tour);
      setSelectedImages(img);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleFetchTour();
  }, []);
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
    handleImageChange: handleImageChange,
    warning: warning,
    date: date,
    setRegionType: setRegionType,
    regionType: regionType,
    continentType: continentType,
    setContinentType: setContinentType,
  };
  return (
    <div className="new-tour">
      <div className="title-admin">Chi tiết Tour</div>
      <form style={{ marginTop: "20px" }}>
        <div className="top border">
          <div className="calendar">
            <div style={{ display: "flex" }} className="border-white">
              <div
                style={{
                  height: "780px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div className="border-white">
                  <div style={{ marginBottom: "10px" }}>
                    <DateRange
                      dateDisplayFormat="MM-dd-yyyy"
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      locale={locales["vi"]}
                    />
                  </div>
                </div>
                <PlaceGo {...props} />
                <PlaceDest {...props} />
                <Price {...props} />
              </div>
              <div
                className="day"
                style={{
                  height: "780px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    height: "354px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <div className="border-white">
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      Ngày đi :<p>{startDate}</p>
                      <p style={{ marginLeft: "10px", marginRight: "10px" }}>
                        -
                      </p>
                      Ngày về :<p>{endDate}</p>
                    </div>
                  </div>
                  <TourName {...props} />
                  <Transportation {...props} />
                  <TourType {...props} />
                  <Region {...props} />
                </div>
                <PickedImage {...props} />
              </div>
            </div>
            <Note {...props} />
          </div>
        </div>
        <Schedule {...props} />
        <div
          className="bottom"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            onClick={handleSubmit}
            className="button"
            style={{ height: "45px", width: "135px" }}
          >
            Cập nhập tour
          </div>
          {warning && (
            <div className="red-text">
              Không được để rỗng các ô còn để trống
            </div>
          )}
        </div>
      </form>
      {isLoading && <Loading />}
    </div>
  );
}
