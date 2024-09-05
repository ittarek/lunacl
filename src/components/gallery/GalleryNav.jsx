import React from "react";
import "./gallery.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const GalleryNav = ({ handleImage }) => {
  return (
    <div
      id="galleryNav"
      className=" flex justify-between items-center rounded-[20px] lg:w-[90%] w-[85%] mx-auto lg:px-[10px]"
    >
      <button className="bg-[#171717] lg:px-[20px] lg:py-[10px] text-[#FAFAFA] font-bold rounded-[25px] px-[10px] py-[5px]">
        Gallery
      </button>

      <div className="space-x-5 " id="galleryDiv">
   
        <button
          className="addBtn bg-[#40464D] lg:px-[20px] lg:py-[10px] px-[5px] py-[3px] text-[#FAFAFA] font-bold rounded-[25px]"
          onClick={() => document.getElementById("fileInput").click()} 
        >
          + Add Image
        </button>


        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          id="fileInput"
          className="hidden"
        />

        <button className="bg-[#1E2023]  px-[15px] py-[15px] text-[#FAFAFA] font-bold rounded-[100px]">
          {" "}
          <FaArrowLeft />
        </button>
        <button className="bg-[#1E2023]  px-[15px] py-[15px] text-[#FAFAFA] font-bold rounded-[100px]">
          {" "}
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GalleryNav;
