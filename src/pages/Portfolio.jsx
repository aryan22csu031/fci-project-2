import React from "react";
import "../assets/Portfolio.css"; // Ensure this path is correct

const portfolioContent = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dinrsgtbu/image/upload/v1731219406/1_hz2mgm.jpg",
    heading: "Web UI Design",
    paragraph: "UI Design",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dinrsgtbu/image/upload/v1731219416/2_kod98h.jpg",
    heading: "Social Media Marketing",
    paragraph: "Graphic Design",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dinrsgtbu/image/upload/v1731219425/3_gj4mx1.jpg",
    heading: "Graphic Design",
    paragraph: "UI Design",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dinrsgtbu/image/upload/v1731219423/4_bbac2y.jpg",
    heading: "Creative Rebranding for Logo",
    paragraph: "UI Design",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dinrsgtbu/image/upload/v1731219404/5_hjcakk.jpg",
    heading: "Graphic Design",
    paragraph: "Graphic Design",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dinrsgtbu/image/upload/v1731219422/6_ybjt5y.jpg",
    heading: "Creative Rebranding for Logo",
    paragraph: "UI Design",
  },
];

const Portfolio = () => {
  return (
    <div>
      <h1 className="heading">Our Portfolio</h1>
      <div className="portfolio-section">
        {portfolioContent.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img
              src={item.imageUrl}
              alt={item.heading}
              className="portfolio-image"
            />
            <h3>{item.heading}</h3>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
      <div className="footer">
        <h1 className="font-serif">Enough talk, let's get to work</h1>
        <div>
          <button className="border-[3px] font-thin border-white text-sm rounded-3xl p-2 ">Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
