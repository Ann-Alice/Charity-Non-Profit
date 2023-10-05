/* eslint-disable react/prop-types */

function Missioncard({ img, title, info }) {
    return (
      <>
        <div className="w-60 bg-green-300/30 p-2">
          <div className="text-green-700 flex space-x-4 ">
            <img src={img} alt="React Logo" width="30" height="30" />
            <span className="text-center pt-1">{title}</span>
          </div>
          <div className="text-justify">{info} </div>
        </div>
      </>
    );
  }
  
  export default Missioncard;