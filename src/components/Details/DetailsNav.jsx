import "./details.css";

const DetailsNav = () => {
  return (
    <div className="detailsNav flex justify-between items-center bg-[#171717] lg:py-[10px] rounded-[20px] lg:w-[90%] w-[85%]  mx-auto lg:px-[10px] mb-[20px]">
      <button>About Me</button>
      <button>Experiences</button>
      <button>Recommended</button>
    </div>
  );
};

export default DetailsNav;
