import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import * as locales from "react-date-range/dist/locale";
import TourNameCreate from "./components/TourNameCreate";
import TransportationCreate from "./components/TransportationCreate";
import PlaceGoCreate from "./components/PlaceGoCreate";
import PlaceDestCreate from "./components/PlaceDestCreate";
import NoteCreate from "./components/NoteCreate";
import PriceCreate from "./components/PriceCreate";
import { handleCreateTour } from "../../../../../services/tourService";
import { convertToBase64 } from "../../../../../theme/functions";
import { iconPicture } from "../../../../../theme/icon";
import TourType from "./components/TourType";
import Region from "./components/Region";
moment.locale("vi");

export default function NewTour() {
  const [tour, setTour] = useState({
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
    destinationId: 1,
    tourType: "Trong nước",
    region: "Miền Trung",
    continent: "Châu Á",
  });
  const [base64, setBase64] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [selectedImages, setSelectedImages] = useState();
  const [warning, setWarning] = useState(false);
  const startDate = `${moment(`${date[0].startDate}`).format("L")}`;
  const endDate = `${moment(`${date[0].endDate}`).format("L")}`;

  const handleSubmit = async (e) => {
    const newTour = {
      ...tour,
      dateGo: startDate,
      dateBack: endDate,
      imgURL: base64,
    };
    // imageToBase64();
    try {
      for (const [key, value] of Object.entries(newTour)) {
        if (value === "" && key !== "inviteCode") {
          setWarning(true);
          return;
        }
      }
      const { tourId } = await handleCreateTour(newTour);
      window.location.replace(`/admin/tour-detail/${tourId}`);
      console.log(newTour);
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
  //Get image from local
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

  // Change to URL image
  // const fileList = selectedImages.map((file) => {
  //   // console.log(file.File);
  //   const url = URL.createObjectURL(file);
  //   // console.log(url)
  //   convertToBase64(url)
  //     .then((base64String) => {
  //       setBase64(base64String);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   return {
  //     file,
  //     url: url,
  //   };
  // });

  const deleteImage = () => {
    setSelectedImages("");
  };

  const props = {
    tour: tour,
    setTour: setTour,
    handleChangeInput: handleChangeInput,
  };

  useEffect(() => {}, []);
  return (
    <div className="new-tour">
      <div className="title-admin">Thêm mới Tour</div>
      <form style={{ marginTop: "20px" }}>
        <div className="top border">
          <div className="calendar">
            <div style={{ display: "flex" }} className="border-white">
              <div
                style={{
                  height: "700px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  locale={locales["vi"]}
                />
                <PlaceGoCreate {...props} />
                <PlaceDestCreate {...props} />
                <PriceCreate {...props} />
              </div>
              <div
                className="day"
                style={{
                  height: "700px",
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
                  <div style={{ display: "flex" }}>
                    Ngày đi :<p>{startDate}</p>
                    <p style={{ marginLeft: "10px", marginRight: "10px" }}>-</p>
                    Ngày về :<p>{endDate}</p>
                  </div>
                  <TourNameCreate {...props} />
                  <TransportationCreate {...props} />
                  <TourType {...props} />
                  <Region {...props} />
                </div>

                <div>
                  <label>
                    Ảnh :
                    <input
                      id="image-place"
                      type="file"
                      multiple
                      onChange={handleImageChange}
                    />
                    <div
                      className="button-select"
                      style={{ marginTop: "10px" }}
                    >
                      <div className="text">Chọn hoặc thả ảnh vào đây</div>
                    </div>
                  </label>
                  <div className="image-selected">
                    <div className="picture">
                      {selectedImages ? (
                        <>
                          <img
                            src={selectedImages}
                            alt="sl"
                            className="selected-img"
                          />
                          <img
                            src={require("../../../../../assets/picture/icon/cancel.png")}
                            alt="ic"
                            className="icon"
                            onClick={() => deleteImage()}
                          />
                        </>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={iconPicture}
                            alt="icp"
                            className="icon-picture"
                          />
                          <div>Ảnh đầu trang</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NoteCreate {...props} />
          </div>
        </div>

        <div className="bottom">
          <div onClick={handleSubmit} className="button">
            Tạo lịch trình
          </div>
        </div>
      </form>
    </div>
  );
}
