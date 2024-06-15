import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full py-3 hover:shadow-lg">
      <div className="w-[92%] mx-auto flex justify-around items-center">
        <div className="flex items-center gap-2">
          <NavLink>
            <img
              className="w-[70px]"
              src="https://freesvg.org/img/Buecher-coloured.png"
              alt="grow"
            />
          </NavLink>
          <div>
            <h1 className=" text-xl font-bold">Store</h1>
            <p className=" text-xs text-gray-500">the art matrials</p>
          </div>
        </div>

        <div className="flex gap-5 list-none">
          <li className=" text-xl cursor-pointer">Home</li>
          <li className=" text-xl cursor-pointer">Course</li>
          <li className=" text-xl cursor-pointer">About</li>
          <li className=" text-xl cursor-pointer">Contact</li>
        </div>

        <div className="flex gap-4 items-center">
           <div>
              <input type="text" placeholder="search" className=" outline-none border rounded-md px-2" />
           </div>
          <NavLink to="/signin ">
            <div className=" border  px-2 bg-black text-white rounded-md hover:bg-red-600 hover:text-white  ">
              login
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
