import React from "react";

function StartNow() {
  return (
    <>
      <div className="container rounded-sm bg-gray-100 mx-auto mt-10 mb-10  p-3">
        <div className="grid grid-cols-[80%_20%] w-full">
          <div className=" p-4">
            <h2 className="text-3xl font-bold">Shopping made easy</h2>
            <p className="text-sm">Enjoy reliability, secure deliveries and hassle-free returns.</p>
          </div>
          <div className=" p-4 flex items-center justify-center">
            <button className="btn btn-outline bg-black text-white font-[500] rounded-full">
              Start Now{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartNow;
