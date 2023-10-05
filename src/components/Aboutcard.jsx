/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";
import quote from "../assets/quote.svg";

function Aboutcard({ topic, info, avatar, name, position }) {
  return (
    <div className="mt-6 md:w-[30%] border-green-400 border p-1">
      <div className="space-y-4">
        <img src={quote} alt="Image" />
        <h5 className="mb-2">{topic}</h5>
        <div>
         {info}
        </div>
      </div>
      <div className="pt-2">
        <div className="md:flex  md:space-x-12 md:mx-4">
          <Avatar src={avatar} alt="avatar" size="sm" />
          <div>
            <h6>{name}</h6>
            <p className="font-normal">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;