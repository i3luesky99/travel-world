import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../../theme/functions";
import { handleGetTourById } from "../../services/tourService";
import {
  iconInfo,
  iconMap,
  iconLocation,
  iconPaperClip,
  iconNoteColor,
} from "../../theme/icon";
import { note, service } from "../../theme/data";

const TourDetail = () => {
  const [tour, setTour] = useState({});
  const [isService, setIsService] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const { tourId } = useParams();
  const fetchTour = async () => {
    try {
      const data = await handleGetTourById(tourId);
      const tourData = data.tour;

      setTour(tourData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClickBookNow = () => {
    window.location.replace("/payment/" + tour.id);
  };
  const handleOpenService = () => {
    setIsService(!isService);
  };

  const handleOpenNote = () => {
    setIsNote(!isNote);
  };

  useEffect(() => {
    fetchTour();
  }, []);
  const daysDetail = [
    {
      title: "TP.HCM – TRƯƠNG GIA GIỚI (Ăn nhẹ, Ăn tối)",
      schedule: `Ăn sáng. Làm thủ tục trả phòng. Đoàn khởi hành đi Phượng Hoàng Cổ Trấn. Trên đường đi, đoàn tham quan:

      Đức Hang Miêu Trại,  trải nghiệm thưởng thức tiệc Trường Long và có cơ hội tìm hiểu Phong tục chặn cửa đón khách, mời rượu, hát hò - đây là nét đẹp văn hoá đặc trưng của người dân tộc Miêu bản địa. Đoàn dùng bữa trưa tại đây.`,
    },
    {
      title: "TRƯƠNG GIA GIỚI – PHƯỢNG HOÀNG CỔ TRẤN (Ăn ba bữa)",
      schedule: `Ăn sáng. Làm thủ tục trả phòng. Đoàn khởi hành đi Phượng Hoàng Cổ Trấn. Trên đường đi, đoàn tham quan:

      Đức Hang Miêu Trại,  trải nghiệm thưởng thức tiệc Trường Long và có cơ hội tìm hiểu Phong tục chặn cửa đón khách, mời rượu, hát hò - đây là nét đẹp văn hoá đặc trưng của người dân tộc Miêu bản địa. Đoàn dùng bữa trưa tại đây.`,
    },
  ];
  const price = formatCurrency(1000000);
  return (
    <div className="tour-detail">
      <div className="title">
        Du lịch Hè - Tour Trương Gia Giới - Phượng Hoàng Cổ Trấn 6 ngày từ Sài
        Gòn 2023
      </div>
      <div className="top-tour">
        <div className="tour-image-container">
          <img
            className="tour-image"
            src={require("../../assets/picture/brazil.jpg")}
            alt="Tour"
          />
        </div>
        <div className="top-right">
          <div className="top">
            <div className="title border">
              Du lịch Hè - Tour Trương Gia Giới - Phượng Hoàng Cổ Trấn 6 ngày từ
              Sài Gòn 2023
            </div>
            <div className="border data">Mã tour : 10001</div>
            <div className="border data">Thời gian: 6 ngày 5 đêm</div>
            <div className="border data">Khởi hành: 09,16/05/2023</div>
            <div className="border data">Vận Chuyển: Xe du lịch, Máy bay </div>
            <div className="data">Xuất phát: Từ Hồ Chí Minh </div>
          </div>
          <div className="bottom-right">
            <div className="price-box">
              <div className="text-price">Giá chỉ từ:</div>
              <div className="price">{price}</div>
            </div>
            <div
              className="bottom-text"
              onClick={() => {
                handleOnClickBookNow();
              }}
            >
              ĐẶT NGAY
            </div>
          </div>
        </div>
      </div>
      <div className="tour-details">
        <div className="tour-info">
          <div className="border">
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <img src={iconInfo} alt="" className="icon" />
              <h3>Điểm nhấn hành trình</h3>
            </div>
          </div>
          <div style={{ textAlign: "justify", fontStyle: "italic" }}>
            Du lịch Trương Gia Giới mùa Hè là nơi hội tụ những kỳ quan thiên
            nhiên kỳ ảo bậc nhất Trung Hoa. Tour Trương Gia Giới mùa Hè có thể
            tham quan những gì? Trước khi tham gia Tour Trương Gia Giới hãy cùng
            Du Lịch Việt chúng tôi tìm hiểu ngay nhé! Tour du lịchTrương Gia
            Giới mùa Hè được thiên nhiên ưu ái ban cho địa hình đồi núi, sa
            thạch, đồng bằng đa dạng, phức tạp, hiếm có trên thế giới. Khi lớp
            vỏ Trái Đất hình thành, những dòng chảy chia cắt ở vùng đất này tạo
            thành sông, thung lũng và các hẻm núi. Nhờ vào sự kiến tạo này,
            Trương Gia Giới sở hữu những khối trụ sa thạch cao vút, độc đáo, trở
            thành bối cảnh cho những ngọn núi bay trong phim chiếu rạp nổi tiếng
            "Avatar".
          </div>
          <div className="days">
            <div className="border">
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <img src={iconMap} alt="" className="icon" />
                <h3>Lịch trình</h3>
              </div>
            </div>
            <div className="day-detail">
              {daysDetail?.map((day, index) => (
                <div key={`${index}-day-detail`} className="day">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="locale">
                      <img src={iconLocation} alt="" className="icon" />
                    </div>
                    <div className="day-title">
                      <p>NGÀY {index + 1}</p>
                      <p style={{ width: "15px" }}>|</p>
                      <div>{day.title}</div>
                    </div>
                  </div>
                  <div className="line">
                    <div className="text-line">
                      <p>{day.schedule}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="service">
          <div
            className="border"
            onClick={handleOpenService}
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <img src={iconPaperClip} alt="" className="icon" />
              <h3>Dịch vụ bao gồm và không bao gồm </h3>(
              <p style={{ fontWeight: "600" }}>Xem thêm</p>)
            </div>
          </div>
          {isService && <div className="text">{service}</div>}
        </div>
        <div className="service">
          <div
            className="border"
            onClick={handleOpenNote}
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <img src={iconNoteColor} alt="" className="icon" />
              <h3>GHI CHÚ </h3>(<p style={{ fontWeight: "600" }}>Xem thêm</p>)
            </div>
          </div>
          {isNote && <div className="text">{note}</div>}
        </div>
        <div className="tour-cta">
          <Link
            onClick={() => {
              handleOnClickBookNow();
            }}
          >
            Đặt ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
