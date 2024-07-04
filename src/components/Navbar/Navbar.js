import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { Logincontext } from "../context/Contextprovider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { account, setAccount } = useContext(Logincontext);
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const validuser = async () => {
    try {
      const res = await axios.get("http://localhost:8085/validuser", {
        withCredentials: true, // Ensures cookies are included
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = res.data;
      console.log("Navbar data:", data); // Log the object directly

      if (res.status === 200) {
        setAccount(data);
        
      } else {
        console.log("First login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logoutuser = async () => {
    try {
      const respond = await fetch("http://localhost:8085/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const logoutdata = await respond.json();
      console.log("Logout data:", logoutdata);

      if (respond.status === 201) {
        setAccount(null);
        setDropdownVisible(false)
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    validuser();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="w-full py-3 hover:shadow-lg">
      <div className="w-[92%] mx-auto flex justify-around items-center">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              className="w-[70px]"
              src="https://freesvg.org/img/Buecher-coloured.png"
              alt="grow"
            />
          </NavLink>
          <div>
            <h1 className="text-xl font-bold">Store</h1>
            <p className="text-xs text-gray-500">the art materials</p>
          </div>
        </div>

        <div className="flex gap-5 list-none">
          <NavLink to="/">
            <li className="text-xl cursor-pointer">Home</li>
          </NavLink>
          <NavLink to="/course">
            <li className="text-xl cursor-pointer">Course</li>
          </NavLink>
          <li className="text-xl cursor-pointer">About</li>
          <li className="text-xl cursor-pointer flex items-center">
            Cart <BsCart />
          </li>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <input
              type="text"
              placeholder="search"
              className="outline-none border rounded-md px-2"
            />
          </div>
          <NavLink to="/signin">
            <div className="border px-2 bg-black text-white rounded-md hover:bg-red-600 hover:text-white">
              login
            </div>
          </NavLink>
          {/* avtar */}
          <div className="relative">
            <div
              className="border rounded-full px-3 py-2 bg-gray-300 cursor-pointer hover:bg-blue-400"
              onClick={toggleDropdown}
            >
              {account ? (
                <div className="text-3xl">
                  {account.fname[0].toUpperCase()}
                </div>
              ) : (
                <RxAvatar className="text-3xl" />
              )}
            </div>
            {dropdownVisible && (
              <ul className="absolute right-0 mt-5 w-48 bg-white border rounded shadow-lg">
                <NavLink to="/">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Account
                  </li>
                </NavLink>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={logoutuser}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
