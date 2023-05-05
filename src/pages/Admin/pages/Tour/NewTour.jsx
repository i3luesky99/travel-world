import React, { useState } from "react";

export default function NewTour() {
  const [tour, setTour] = useState({
    nameTour: "",
    placeDest: "",
    placeGo: "",
    dateGo: "",
    dateBack: "",
    state: 0,
    price: "",
    note: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lưu trữ thông tin tour vào cơ sở dữ liệu
    // const newTour = { name, description, price, image };
    // Các thao tác lưu trữ vào cơ sở dữ liệu ở đây

    // Xóa form sau khi hoàn tất
  };

  const handleChangeInput = (inputName, inputValue) => {
    setTour((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    const images = Array.from(files).map((file) => URL.createObjectURL(file));
    setSelectedImages(images);
  };
  return (
    <div className="tour-admin">
      <div className="title-admin">Thêm mới Tour</div>
      <div className="search">
        <div>Địa điểm / Mã Tour</div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Tên Tour:
          <input
            type="text"
            value={tour.nameTour}
            onChange={(e) => handleChangeInput("nameTour", e.target.value)}
          />
        </label>
        <label>
          Mô tả:
          <textarea
            value={tour.note}
            onChange={(e) => handleChangeInput("note", e.target.value)}
          />
        </label>
        <label>
          Giá:
          <input
            value={tour.price}
            onChange={(e) => handleChangeInput("price", e.target.value)}
          />
        </label>
        <label>
          Ảnh:
          <input type="file" multiple onChange={handleImageChange} />
        </label>
        <div>
          {selectedImages.map((image) => (
            <img key={image} src={image} alt="Selected" />
          ))}
        </div>
        <button type="submit">Create Tour</button>
      </form>
    </div>
  );
}
