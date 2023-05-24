import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import * as locales from "react-date-range/dist/locale";
import { handleCreateTour } from "../../../../../services/tourService";
import { convertToBase64 } from "../../../../../theme/functions";
import {
  Note,
  PickedImage,
  PlaceDest,
  PlaceGo,
  Price,
  Region,
  TourName,
  TourType,
  Transportation,
} from "../components";
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
    destinationId: 4,
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
      image: base64,
    };
    try {
      for (const [key, value] of Object.entries(newTour)) {
        if (value === "" && key !== "inviteCode") {
          setWarning(true);
          return;
        }
      }
      setWarning(false);
      const { tourId } = await handleCreateTour(newTour);
      window.location.replace(`/admin/tour-detail/${tourId}`);
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
    setBase64("");
  };

  const props = {
    tour: tour,
    setTour: setTour,
    handleChangeInput: handleChangeInput,
    warning: warning,
    selectedImages: selectedImages,
    handleImageChange: handleImageChange,
    deleteImage: deleteImage,
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
                  height: "780px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div className="border-white">
                  <div style={{ marginBottom: "10px" }}>
                    <DateRange
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

        <div
          className="bottom"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div onClick={handleSubmit} className="button">
            Tạo lịch trình
          </div>
          {warning && (
            <div className="red-text">
              Không được để rỗng các ô còn để trống
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
