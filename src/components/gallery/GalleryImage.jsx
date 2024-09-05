import React, { useState } from "react";
import image1 from "../../assets/Angle.png";
import image2 from "../../assets/Angle (1).png";
import image3 from "../../assets/Angle3.png";
import "./gallery.css";

const GalleryImage = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      img: image1,
    },
    {
      id: 2,
      img: image2,
    },
    {
      id: 3,
      img: image3,
    },
  ]);

  return (
    <div className="imageDiv md:flex md:justify-between justify-center items-center md:w-[90%] w-full mx-auto">
      {images.map(image => (
        <img key={image.id} src={image.img} alt={`Image ${image.id}`} />
      ))}
    </div>
  );
};

export default GalleryImage;
