
import {Button} from "@material-tailwind/react"


import headerImage from "../assets/HeaderImage.svg";



const CaptionImg =()=> {
  return (
    <div className="relative">
      <img
        className="h-[450px] md:h-96 w-full rounded-lg object-cover object-center"
        src={headerImage}
        alt="nature image"
      />
      <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center text-white absolute top-10">
        <p className="text-sm ">Give Hope For Homeless</p>
        <p className="text-5xl font-black">Helping Each Other Can Make World Better</p>
        <p className="">
          We Seek out world changers and difference makers around the globe,and
          equip them to fulfill their unique purpose.
        </p>
        <div className="space-x-5">
        <Button   className="bg-green-500">Donate Now</Button>
      <Button variant="outlined"  className=" border-green-500 text-white">Know About Us</Button>
        </div>
      </div>
    </div>
  );
}

export default CaptionImg;