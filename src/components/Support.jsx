import { Button } from "@material-tailwind/react";

function Support() {
  return (
    <div className="relative bg-green-600 h-60 text-center py-40 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h4>Give Us A Hand</h4>
        <p className="text-2xl font-bold">SUPPORT US AND CHANGE THE COURSE OF A CHILD&apos;S LIFE TODAY</p>
        <Button className="text-green-300 bg-white rounded-s-3xl rounded-e-3xl">DONATE</Button>
      </div>
    </div>
  );
}

export default Support;