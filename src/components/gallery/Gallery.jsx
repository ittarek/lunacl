import React, { useState } from 'react';
import GalleryNav from './GalleryNav';
import "./gallery.css"
import GalleryImage from './GalleryImage';
import icon from "../../assets/dashboardIcon.png";
import { SlQuestion } from "react-icons/sl";
import image1 from "../../assets/Angle.png";
import image2 from "../../assets/Angle (1).png";
import image3 from "../../assets/Angle3.png";

const Gallery = () => {
   const [images, setImages] = useState([
     {
       id: "1",
       img: image1,
     },
     {
       id: "2",
       img: image2,
     },
     {
       id: "3",
       img: image3,
     },
   ]);

   const handleImage = event => {
     const file = event.target.files[0]; 
     if (file) {
       const reader = new FileReader();
       reader.onloadend = () => {
         setImages(prevImages => [
           ...prevImages,
           { id: Date.now().toString(), img: reader.result }, 
         ]);
       };
       reader.readAsDataURL(file); 
     }
   };

  return (
    <div className="gallery lg:w-[70%] w-[95%] mx-auto bg-[#363C43] rounded-[20px] py-[20px] my-[20px]">
      <GalleryNav handleImage={handleImage} />
      <div className=" absolute  left-[3%] lg:left-[15.5%] lg:-mt-[3%] -mt-[10%]  mx-auto">
        <button className="mb-[100px]">
          <SlQuestion className="w-[25px]  h-[25px] text-center mx-auto" />
        </button>
        <img src={icon} alt="" />
      </div>
      <div className="lg:ml-[5%] ml-[10%] w-100">
        {" "}
        <GalleryImage images={images} />
      </div>
    </div>
  );
};

export default Gallery;