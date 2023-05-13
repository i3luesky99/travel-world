import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";
import { formatCurrency } from "../../../../../../theme/functions";

export default function Price(props) {
  const { tour, handleChangeInput, isEdit, setIsEdit } = props;

  const handleKeyDown = (event) => {
    const keyCode = event.keyCode || event.which; // Get the keyCode of the key pressed
    const regex = /[0-9\b]/; // Regular expression to match numbers
    if (!regex.test(String.fromCharCode(keyCode))) {
      // Check if the key pressed is a number
      event.preventDefault(); // Prevent the default action of the key down event
    }
  };
  const enableEdit = () => {
    setIsEdit({ ...isEdit, price: true });
  };

  const onSave = () => {
    setIsEdit({ ...isEdit, price: false });
  };

  const onCancel = () => {
    setIsEdit({ ...isEdit, price: false });
  };
  const propsButton = {
    onSave: onSave,
    onCancel: onCancel,
  };
  return (
    <div className="border">
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "20px",
            }}
          >
            <div style={{ display: !isEdit.price && "flex" }}>
              <div style={{ marginRight: "10px" }}>Giá người lớn:</div>
              {!isEdit.price ? (
                <div style={{ whiteSpace: "pre" }}>
                  {formatCurrency(tour?.adultPrice)}
                </div>
              ) : (
                <input
                  value={tour.adultPrice}
                  className="form-control"
                  onChange={(e) =>
                    handleChangeInput("adultPrice", e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  style={{ maxWidth: "300px", margin: "0px" }}
                />
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "20px",
            }}
          >
            <div style={{ display: !isEdit.price && "flex" }}>
              <div style={{ marginRight: "10px" }}>Giá trẻ em:</div>
              {!isEdit.price ? (
                <div style={{ whiteSpace: "pre" }}>
                  {formatCurrency(tour?.childPrice)}
                </div>
              ) : (
                <input
                  value={tour.childPrice}
                  className="form-control"
                  onChange={(e) =>
                    handleChangeInput("childPrice", e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  style={{ maxWidth: "300px", margin: "0px" }}
                />
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: !isEdit.price && "flex" }}>
              <div style={{ marginRight: "10px" }}>Giá trẻ sơ sinh:</div>
              {!isEdit.price ? (
                <div style={{ whiteSpace: "pre" }}>
                  {formatCurrency(tour?.babyPrice)}
                </div>
              ) : (
                <input
                  value={tour.babyPrice}
                  className="form-control"
                  onChange={(e) =>
                    handleChangeInput("babyPrice", e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  style={{ maxWidth: "300px", margin: "0px" }}
                />
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            <div style={{ display: !isEdit.price && "flex" }}>
              <div style={{ marginRight: "10px" }}>Số lượng chỗ:</div>
              {!isEdit.price ? (
                <div style={{ whiteSpace: "pre" }}>{tour?.adultSlot}</div>
              ) : (
                <input
                  value={tour.adultSlot}
                  className="form-control"
                  onChange={(e) =>
                    handleChangeInput("adultSlot", e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  style={{ maxWidth: "300px", margin: "0px" }}
                />
              )}
            </div>
          </div>
        </div>
        {!isEdit.price ? (
          <img src={iconPencil} alt="" className="icon" onClick={enableEdit} />
        ) : (
          <ButtonGroup {...propsButton} />
        )}
      </div>
    </div>
  );
}
