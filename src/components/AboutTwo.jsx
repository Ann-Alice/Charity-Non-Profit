import { Progress, Typography } from "@material-tailwind/react"

import about3 from "../assets/about3.svg";
import Missioncard from './Missioncard';
import missionImg from '../assets/Mission.svg'
import vissionImg from '../assets/Vission.svg'

function AboutTwo() {
  return (
    <div className="lg:flex flex-row lg:flex-row p-auto my-20 mx-3 ">
      {/* Left Column (Image) */}

      <div className="w-full lg:w-2/4 flex flex-col justify-center lg:ml-4 lg:mr-4">
        <h2 className=" w-full lg:w-[70%] font-medium mb-4 text-start flex ">
          Welcome to Charity
          <div className="relative pl-20">
          <div className="border-b-2 w-20 border-gray-400 absolute left-[50%] top-[50%]"></div>
          </div>
        </h2>
        <p className="text-5xl lg:w-[70%] font-bold text-start">
          Let Us Come Together To Make a Difference{" "}
        </p>
        <p className=" font-thin lg:w-[70%] text-justify">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo.
        </p>
        <div className="flex space-x-5  my-3">
            <Missioncard  
            img={missionImg}
            title= 'Our Mission'
            info='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
            />
            <Missioncard  
            img={vissionImg}
            title= 'Our Vission'
            info='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
            />
        </div>
        <div className="w-[80%] mb-16">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          Completed
        </Typography>
        <Typography color="blue-gray" variant="h6">
          75%
        </Typography>
      </div>
      <Progress value={75} color='green' />
    </div>

      </div>

      {/* Right Column (Text) */}
      <div className="w-full space-y-3 lg:w-1/2 lg:relative  ">
        <div className="  p-2 bg-green-200/50 lg:w-[60%] lg:absolute lg:top-[70%] lg:left-[65%] lg:-translate-y-1/2 lg:-translate-x-1/2 backdrop-opacity-0">
          <div className="bg-white w-full h-auto">
            <ul className="list-disc list-inside text-sm space-y-4 p-1">
              <li className="text-green-400">
                Together, we&apos;re going to make the future
              </li>
              <li>Children where we are able to fulfill all</li>
              <li>Their requirements to keep them safe from withered world</li>
              <li>We have already stepped out and start changing the world</li>
              <li>Keeping safe them from war, inhumanity</li>
            </ul>
          </div>
        </div>     
        <img
          src={about3}
          alt="Image"
          className="w-[100%] h-[70%] lg:w-auto bg-green-200/50 p-2  "
        />
        
      </div>
    </div>
  );
}

export default AboutTwo;