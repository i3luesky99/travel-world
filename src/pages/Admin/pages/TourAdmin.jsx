import React, { useState } from "react";

export default function TourAdmin() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lưu trữ thông tin tour vào cơ sở dữ liệu
    const newTour = { name, description, price, image };
    // Các thao tác lưu trữ vào cơ sở dữ liệu ở đây

    // Xóa form sau khi hoàn tất
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
  };
  return (
    <div className="tour-admin">
      <div className="title-admin">Quản lý Tour</div>
      <div className="search">
        <div>Tên Tour / Mã Tour</div>
        <div>
          <input
            type="text"
            value={searchTerm}
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="button">Tìm kiếm</div>
        </div>
      </div>
    </div>
  );
}
