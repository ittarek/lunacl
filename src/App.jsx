import React from 'react';
import Details from './components/Details/Details';
import Gallery from './components/gallery/Gallery';
import "./app.css"

const App = () => {
  return (
    <>
      <Details />
      <div className="shadowDiv bg-[#363C43] w-[65%] h-[5px] mx-auto rounded "></div>
      <Gallery />
    </>
  );
};

export default App;