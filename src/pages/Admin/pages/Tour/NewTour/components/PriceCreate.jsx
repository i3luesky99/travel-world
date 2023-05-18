import React from "react";

export default function PriceCreate(props) {
  const { tour, handleChangeInput, warning } = props;

  const handleKeyDown = (event) => {
    const keyCode = event.keyCode || event.which; // Get the keyCode of the key pressed
    const regex = /[0-9\b]/; // Regular expression to match numbers
    if (!regex.test(String.fromCharCode(keyCode))) {
      // Check if the key pressed is a number
      event.preventDefault(); // Prevent the default action of the key down event
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%", marginRight: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <div>Giá người lớn:</div>
          <input
            value={tour.adultPrice}
            className="form-control"
            onChange={(e) => handleChangeInput("adultPrice", e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              maxWidth: "300px",
              marginTop: "10px",
              border: warning && !tour.adultPrice && "1px solid #dc3545",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>Giá trẻ em:</div>
          <input
            value={tour.childPrice}
            className="form-control"
            onChange={(e) => handleChangeInput("childPrice", e.target.value)}
            style={{
              maxWidth: "300px",
              marginTop: "10px",
              border: warning && !tour.childPrice && "1px solid #dc3545",
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <div>Giá trẻ sơ sinh:</div>
          <input
            value={tour.babyPrice}
            className="form-control"
            onChange={(e) => handleChangeInput("babyPrice", e.target.value)}
            style={{
              maxWidth: "300px",
              marginTop: "10px",
              border: warning && !tour.babyPrice && "1px solid #dc3545",
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>Số lượng chỗ:</div>
          <input
            value={tour.adultSlot}
            className="form-control"
            onChange={(e) => handleChangeInput("adultSlot", e.target.value)}
            style={{
              maxWidth: "300px",
              marginTop: "10px",
              border: warning && !tour.adultSlot && "1px solid #dc3545",
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
