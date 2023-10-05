import ScImg1 from "../assets/ScImg1.svg";
import ScImg2 from "../assets/ScImg2.svg";
import ScImg3 from "../assets/ScImg3.svg";
import ScImg4 from "../assets/ScImg4.svg";
import ScImg5 from "../assets/ScImg5.svg";
import ScImg6 from "../assets/ScImg6.svg";
import ScImg7 from "../assets/ScImg7.svg";
import ScImg8 from "../assets/ScImg8.svg";

function Showcase() {
  return (
    <div className="lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-4  items-center flex flex-col gap-4">
      <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4 ">
        <img src={ScImg1} alt="ScImg1" className="" />
      </div>
      <div className="lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-7 ">
        
        <img src={ScImg2} alt="ScImg2" className="" />
      </div>
      <div className="lg:col-start-2 lg:col-end-4 lg:row-start-1 row-end-7 ">
        
        <img src={ScImg3} alt="ScImg3" className="" />
      </div>
      <div className="lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-4">
        
        <img src={ScImg4} alt="ScImg4" className="h-full" />
      </div>
      <div className="lg:col-start-4 lg:col-end-5 lg:row-start-4 lg:row-end-7">
        
        <img src={ScImg5} alt="ScImg5" className="" />
      </div>
      <div className="lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-7">
        
        <img src={ScImg6} alt="ScImg6" className="" />
      </div>
      <div className="lg:col-start-7 lg:col-end-8 lg:row-start-1 lg:row-end-4 ">
        
        <img src={ScImg7} alt="ScImg7" className="" />
      </div>
      <div className="lg:col-start-7 lg:col-end-8 lg:row-start-4 lg:row-end-7 ">
        
        <img src={ScImg8} alt="ScImg8" className="" />
      </div>
    </div>
  );
}

export default Showcase;