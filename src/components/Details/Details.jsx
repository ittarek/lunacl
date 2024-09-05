import SideNav from "../SideNav";
import "./details.css";
import DetailsNav from "./DetailsNav";

const Details = () => {
  return (
    <div className="detailsPage lg:w-[70%] w-[95%] mx-auto bg-[#363C43] rounded-[20px] py-[20px] my-[20px]">
      <DetailsNav />
<SideNav/>
      <div className="text-[#969696] text-[20px] mx-auto lg:w-[90%] w-[80%]">
        {" "}
        <p>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
        </p>{" "}
        <br />
        <p>
          I was born and raised in Albany, NY& have been living in Santa Carla
          for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school, so my
          calender is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    </div>
  );
};

export default Details;
