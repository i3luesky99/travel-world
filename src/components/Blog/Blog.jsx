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
      title: "Welcome to Brazil",
      img: require("../../assets/picture/brazil.jpg"),
      desc: "They say that there’s no sin below the equator. This might be true when it comes to Brazil. Especially during Carnaval’s time in which there’s this feeling of lack of inhibition. But all year long you will notice that in Brazil there’s a sense of freedom around you. Brazil is a place of music, sensuality, raw nature and welcoming people. In Brazil, there are so many destinations each one different than the other- from a beach town, tropical islands, dunes, and lagoons. and cities with parties nonstop. ",
    },

    {
      id: 2,
      title: "Vietnam Best Place To Travel",
      img: require("../../assets/picture/vietnam.jpg"),
      desc: "Everyone has their favorite Vietnam moment, the moment you realized that Vietnam has its own distinct personality. The moment you end up telling your friends about endlessly when you get home. It might be the overwhelming sight of a thousand motorcycles bearing down on you while you make a mad dash across the streets of Hanoi, the sight of the blood red sun as it dips beneath the sea at Halong Bay, the smell of freshly cooked Pho soup at a street restaurant, or the feeling of warm sand between your toes as you stand on one of Vietnam’s truly endless beaches. ",
    },

    {
      id: 3,
      title: "The Ultimate Travel Guide To Karon Beach, Phuket",
      img: require("../../assets/picture/thailand.jpg"),
      desc: "As our first stop in Phuket, we chose Karon Beach, a beautiful white-sandy three km long beach on the west coast of Phuket. Karon has long been among the most popular of Phuket’s beaches, along with neighboring Patong Beach (to the north) and Kata Beach (to the south).",
    },

    {
      id: 4,
      title: "Paris City Of Love",
      img: require("../../assets/picture/paris.jpg"),
      desc: "Ahh Paris… The city of love and romance. It’s everyone’s dream to visit at least once. When I studied in Lyon, I would often take weekend trips to the capital to sip coffee and people watch in Le Marais. ",
    },
  ];
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration={2000} className="secTitle">
            Our Best Blog ?
          </h2>
          <p data-aos="fade-up" data-aos-duration={2500}>
            An insight to the incredible experience in the world
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
                  Read More
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
