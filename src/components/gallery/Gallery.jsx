import React from 'react';
import GalleryNav from './GalleryNav';
import "./gallery.css"
import GalleryImage from './GalleryImage';
import icon from "../../assets/dashboardIcon.png";
import { SlQuestion } from "react-icons/sl";

const Gallery = ({ setImages }) => {
  const handleImage = event => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prevImages => [...prevImages, reader.result]); // Store image in state
      };
      reader.readAsDataURL(file); // Read the file as a Data URL (base64)
    }
  };

  return (
    <div className="gallery lg:w-[70%] w-[95%] mx-auto bg-[#363C43] rounded-[20px] py-[20px] my-[20px]">
      <GalleryNav handleImage={handleImage} setImages={setImages} />
      <div className=" absolute  left-[3%] lg:left-[15.5%] lg:-mt-[3%] -mt-[10%]  mx-auto">
        <button className="mb-[100px]">
          <SlQuestion className="w-[25px]  h-[25px] text-center mx-auto" />
        </button>
        <img src={icon} alt="" />
      </div>
      <div className="lg:ml-[5%] ml-[10%] w-100">
        {" "}
        <GalleryImage setImages={setImages}/>
      </div>
    </div>
  );
};

export default Gallery;