import React from "react";
import { iconPicture } from "../../../../../theme/icon";

export default function PickedImage(props) {
  const { selectedImages, handleImageChange, warning, deleteImage } = props;
  return (
    <div>
      <label>
        Ảnh :
        <input
          id="image-place"
          type="file"
          multiple
          onChange={handleImageChange}
        />
        <div className="button-select" style={{ marginTop: "10px" }}>
          <div className="text">Chọn hoặc thả ảnh vào đây</div>
        </div>
      </label>
      <div className="image-selected">
        <div
          className="picture"
          style={{
            border: warning && !selectedImages && "1px solid #dc3545",
          }}
        >
          {selectedImages ? (
            <>
              <img src={selectedImages} alt="sl" className="selected-img" />
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
              <img src={iconPicture} alt="icp" className="icon-picture" />
              <div>Ảnh đầu trang</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
