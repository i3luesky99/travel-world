import React from "react";

export default function Images(props) {
  const { setSelectedImages, selectedImages, deleteImage } = props;
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
  return (
    <div className="border">
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
              src={require("../../../../../../assets/picture/icon/cancel.png")}
              alt=""
              className="icon"
              onClick={() => deleteImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
