import about1 from "../assets/about1.svg";
import about2 from "../assets/about2.svg";
import { Button } from '@material-tailwind/react';
function AboutOne() {
  return (
    <div className="lg:flex flex-row lg:flex-row p-auto my-20 mx-5 items-center  ">
      {/* Left Column (Image) */}
      <div className="w-full lg:w-1/2 lg:relative space-y-3 mb-20">
        <img
          src={about2}
          alt="Image"
          className="  p-2 bg-green-200/50 lg:w-auto lg:absolute lg:top-[90%] lg:left-[65%] lg:-translate-y-1/2 lg:-translate-x-1/2 backdrop-opacity-0"
        />
        <img
          src={about1}
          alt="Image"
          className="w-[70%] h-[70%] lg:w-auto bg-green-200/50 p-2  "
        />
      </div>

      {/* Right Column (Text) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:ml-4 lg:mr-4">
        <h2 className=" w-full lg:w-3/4 font-medium mb-4 text-justify flex ">
          About Us 
           <div className="relative pl-20">
          <div className="border-b-2 w-20 border-gray-400 absolute left-[50%] top-[50%]"></div>
          </div>
        </h2>
        <p className="text-5xl font-bold text-start">
          Your Support is Really Powerful.
        </p>
        <p className="text-lg font-thin text-justify">
          The secret to happiness lies in helping others. Never underestimate
          the difference YOU can make in the lives of the poor, the abused and
          the helpless.
        </p>
        <div>
        <Button className="bg-green-500 rounded-none" >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
        
        