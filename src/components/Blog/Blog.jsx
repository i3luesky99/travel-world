import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const postArr = [
    {
      id: 1,
      title: "Chào mừng tới Brazil",
      img: require("../../assets/picture/brazil.jpg"),
      desc: "Một thảm động thực vật phong phú khiến Brazil luôn là sự lựa chọn của những người yêu thiên nhiên.Với nhiều khu bảo tồn và khoảng 70 công viên quốc gia, Brazil là một trong những quốc gia đa dạng sinh học nhất thế giới. Có thể dễ dàng điểm danh được nhiều điểm tham quan thiên nhiên thú vị hấp dẫn như rừng Amazon, thác nước Nam Mỹ lớn nhất thế giới Iguazu hay khu bảo tồn Panatal. ",
    },

    {
      id: 2,
      title: "Việt Nam và con người nơi đây",
      img: require("../../assets/picture/vietnam.jpg"),
      desc: "Người Việt Nam có một văn hóa tôn trọng gia đình và người lớn tuổi. Trong gia đình, cha mẹ và người lớn tuổi được coi là những người đứng đầu và được tôn trọng. Các thành viên trong gia đình sẽ cùng nhau chăm sóc lẫn nhau, và các gia đình thường có thói quen ăn cơm chung trên cùng một cái bàn. Trong nghi lễ và lễ hội, người Việt Nam cũng rất tôn trọng truyền thống và gia đình.",
    },

    {
      id: 3,
      title: "Cẩm nang du lịch cơ bản đến bãi biển Karon, Phuket",
      img: require("../../assets/picture/thailand.jpg"),
      desc: "Bãi biển Karon là một trong những điểm đến du lịch phổ biến nhất tại Phuket, Thái Lan. Được biết đến với bãi cát trắng dài và nước biển trong xanh, Karon là một lựa chọn tuyệt vời cho các du khách muốn thư giãn và tận hưởng nét đẹp của một bãi biển hoang sơ.",
    },

    {
      id: 4,
      title: "Paris thành phố tình yêu",
      img: require("../../assets/picture/paris.jpg"),
      desc: `Paris - thành phố ánh sáng, nổi tiếng với biểu tượng Eiffel đình và những con phố lãng mạn được gọi là "thành phố tình yêu". Đây là một trong những điểm đến du lịch phổ biến nhất thế giới, thu hút hàng triệu khách du lịch mỗi năm.`,
    },
  ];
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration={2000} className="secTitle">
            Các blog tuyệt đỉnh từ chúng tôi ?
          </h2>
          <p data-aos="fade-up" data-aos-duration={2500}>
            Một cái nhìn sâu sắc về trải nghiệm đáng kinh ngạc trên thế giới
          </p>
        </div>

        <div className="mainContent grid">
          {postArr.map((post, index) => (
            <div key={`post-${index}`} className="singlePost grid">
              <div
                data-aos="fade-up"
                data-aos-duration={3000}
                className="imgDiv"
              >
                <img src={post?.img} alt={post?.title} />
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration={3500}
                className="postDetails"
              >
                <h3>{post?.title}</h3>
                <p>{post?.desc}</p>
              </div>

              <div data-aos="fade-up" data-aos-duration={4000}>
                <a href="#" className="flex">
                 Đọc thêm
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
