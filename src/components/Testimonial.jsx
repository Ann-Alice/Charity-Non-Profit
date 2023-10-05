import Aboutcard from "./Aboutcard";

import JohnAvatar from '../assets/JohnAvatar.svg'
import JackAvatar from '../assets/JackAvatar.svg'
import SakibAvatar from '../assets/SakibAvatar.svg'
import DiagonalArrow from '../assets/DiagonalArrow.svg'
const Testimonials = [
  {
    id: 1,
    topic: "Kindness",
    info: " Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is ",
    avatar: JohnAvatar,
    name: "John Doe",
    position: "Senior Gardener Farmer",
  },
  {
    id: 2,
    topic: "Humanity",
    info: " Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is ",
    avatar: JackAvatar,
    name: "Jack Harry",
    position: "Senior Gardener Farmer",
  },
  {
    id: 3,
    topic: "Ethics & Morality",
    info: "Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text  Lorem Ipsum is simply dummy text Lorem Ipsum is ",
    avatar: SakibAvatar,
    name: "Sakib Hossain",
    position: "Senior Gardener Farmer",
  },
];

function Testimonial() {
  return (
    <div className="lg:mx-16  text-center md:text-start my-10">
      <p className="text-green-300">Testimonial</p>
      <div className=" md:flex relative md:space-x-[56%] lg:space-x-[60%] xl:space-x-[70%] 2xl:space-x-[79%]">
        <h2 className="text-2xl w-72 font-semibold">
          What People Say About Us
        </h2>
        <div className="bg-green-300 w-6 h-6 rounded-tr-xl text-center  ">
          <img src ={DiagonalArrow} alt="Image" />
        </div>
      </div>
      <div className="items-center md:flex md:space-x-6 ">
        {Testimonials.map((item) => (
          <Aboutcard
            key={item.id}
            avatar ={item.avatar}
            topic={item.topic}
            info={item.info}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;