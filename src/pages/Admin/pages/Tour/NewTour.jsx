import React, { useCallback, useEffect, useState } from "react";
import Schedule from "./components/Schedule";
import Price from "./components/Price";

export default function NewTour() {
  const [tour, setTour] = useState({
    nameTour: "",
    placeDest: "",
    placeGo: "",
    dateGo: "",
    dateBack: "",
    state: 0,
    adultPrice: "",
    childrenPrice: "",
    adultSlot: "",
    childrenSlot: "",
    note: "",
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [days, setDays] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    days: days,
    setDays: setDays,
    tour: tour,
    setTour: setTour,
    handleChangeInput: handleChangeInput,
  };

  useEffect(() => {}, [deleteImage]);
  return (
    <div className="new-tour">
      <div className="title-admin">Thêm mới Tour</div>
      <form onSubmit={handleSubmit}>
        <label style={{ marginTop: "20px" }}>
          Tên Tour :
          <input
            type="text"
            className="form-control"
            value={tour.nameTour}
            onChange={(e) => handleChangeInput("nameTour", e.target.value)}
          />
        </label>
        <label>
          Mô tả :
          <textarea
            value={tour.note}
            className="form-control"
            onChange={(e) => handleChangeInput("note", e.target.value)}
          />
        </label>
        <Price {...props} />
        <Schedule {...props} />

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
                src={require("../../../../assets/picture/icon/cancel.png")}
                alt=""
                className="icon"
                onClick={() => deleteImage(index)}
              />
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className="button">Tạo tour</div>
        </div>
      </form>
    </div>
  );
}
