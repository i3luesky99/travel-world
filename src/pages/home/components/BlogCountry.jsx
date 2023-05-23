import React from "react";

export default function BlogCountry() {
  const top = [
    {
      link: [
        require("../../../assets/picture/dalat1.jpg"),
        require("../../../assets/picture/dalat2.jpg"),
      ],
      name: "image1",
      place: "Đà Lạt",
    },
    {
      link: [
        require("../../../assets/picture/hanoi1.jpg"),
        require("../../../assets/picture/hanoi2.jpg"),
      ],
      name: "image2",
      place: "Hà Nội",
    },
    {
      link: [
        require("../../../assets/picture/hue1.jpg"),
        require("../../../assets/picture/hue2.jpg"),
      ],
      name: "image3",
      place: "Huế",
    },
  ];

  const bottom = [
    {
      link: require("../../../assets/picture/danang.jpg"),
      name: "image4",
      place: "Đà Nẵng",
    },
    {
      link: require("../../../assets/picture/nhatrang.jpg"),
      name: "image5",
      place: "Nha Trang",
    },
  ];
  return (
    <div className="main-blog">
      <div className="blog-country">
        <div className="title">
          <img src={require("../../../assets/picture/logo1.png")} alt="" />
        </div>
        <div className="container-img">
          <div className="top">
            {top.map((topImg, index) => (
              <div className={topImg.name}>
                <img src={topImg.link[0]} alt="" key={index} />
                <div className="place">{topImg.place}</div>
              </div>
            ))}
          </div>
          <div className="bottom-img">
            {bottom.map((bottomImg, index) => (
              <div className={bottomImg.name}>
                <img src={bottomImg.link} alt="" key={index} />
                <div className="place">{bottomImg.place}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
