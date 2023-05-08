import React, { useState } from "react";
import { formatCurrency } from "../../../../../theme/functions";

export default function Price(props) {
  const { tour, setTour, handleChangeInput } = props;
  const [errorMessage, setErrorMessage] = useState("");

  const handleKeyDown = (event) => {
    const keyCode = event.keyCode || event.which; // Get the keyCode of the key pressed
    const regex = /[0-9\b]/; // Regular expression to match numbers
    if (!regex.test(String.fromCharCode(keyCode))) {
      // Check if the key pressed is a number
      event.preventDefault(); // Prevent the default action of the key down event
      setErrorMessage("Please enter only numbers");
    } else {
      setErrorMessage("");
    }
  };

  const onEdit = () => {};
  return (
    <div className="price" style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>Giá người lớn:</label>
            <input
              value={tour.adultPrice}
              className="form-control"
              onChange={(e) => handleChangeInput("adultPrice", e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ maxWidth: "300px", margin: "0px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>Số lượng người lớn:</label>
            <input
              value={tour.adultSlot}
              className="form-control"
              onChange={(e) => handleChangeInput("adultSlot", e.target.value)}
              style={{ maxWidth: "300px", margin: "0px" }}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>Giá trẻ em:</label>
            <input
              value={tour.childrenPrice}
              className="form-control"
              onChange={(e) =>
                handleChangeInput("childrenPrice", e.target.value)
              }
              style={{ maxWidth: "300px", margin: "0px" }}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Số lượng trẻ em:</label>
            <input
              value={tour.childrenSlot}
              className="form-control"
              onChange={(e) =>
                handleChangeInput("childrenSlot", e.target.value)
              }
              style={{ maxWidth: "300px", margin: "0px" }}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>Giá trẻ sơ sinh:</label>
            <input
              value={tour.childrenPrice}
              className="form-control"
              onChange={(e) =>
                handleChangeInput("childrenPrice", e.target.value)
              }
              style={{ maxWidth: "300px", margin: "0px" }}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Số lượng trẻ sơ sinh:</label>
            <input
              value={tour.childrenSlot}
              className="form-control"
              onChange={(e) =>
                handleChangeInput("childrenSlot", e.target.value)
              }
              style={{ maxWidth: "300px", margin: "0px" }}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
