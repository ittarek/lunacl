import React, { useState } from "react";

import "./gallery.css";

const GalleryImage = ({ images }) => {
  return (
    <div className="imageDiv md:grid grid-cols-3 md:justify-between justify-center items-center md:w-[90%] w-full mx-auto">
      {images.map(image => (
        <img key={image.id} src={image.img} alt={`Image ${image.id}`} />
      ))}
    </div>
  );
};

export default GalleryImage;
