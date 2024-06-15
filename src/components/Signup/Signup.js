import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    fname: "",
    email: "",
    password: "",
    address: "",
    phoneno: "",
  });

  const navigate = useNavigate();

  const setInputData = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log({ ...data, [name]: value });
  };

  // handle btn
  const handleBtn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8085/signup", data);
  
      if (response.status === 422 || !response.data) {
        toast.error("Invalid Details 👎!", {
          position: "top-center",
        });
      } else {
        toast.success(`${data.fname.toUpperCase()} successfully added!`, {
          position: "top-center",
        });
  
        setData({
          fname: "",
          email: "",
          password: "",
          mobile: "",
        });
  
        navigate("/"); // Ensure you have the navigate function from react-router
      }
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("Error occurred during registration. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-full bg-slate-100 min-h-screen py-8">
      <div className="w-[60%] mx-auto shadow-2xl relative px-[150px] py-10 ">
        <h1 className=" text-center text-2xl mb-6">SignUp form</h1>
        <NavLink to="/">
          <div className="absolute top-0 right-0 m-4">✕</div>
        </NavLink>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col w-full gap-1">
            <label>fname</label>
            <input
              type="text"
              placeholder="fname"
              className=" border py-1 px-2 outline-none"
              name="fname"
              value={data.fname}
              onChange={setInputData}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label>Email</label>
            <input
              type="text"
              placeholder="@mail.com"
              className=" border py-1 px-2 outline-none"
              name="email"
              value={data.email}
              onChange={setInputData}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label>password</label>
            <input
              type="text"
              placeholder="password"
              className="border py-1 px-2 outline-none"
              name="password"
              value={data.password}
              onChange={setInputData}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label>mobile</label>
            <input
              type="text"
              placeholder="mobile"
              className="border py-1 px-2 outline-none"
              name="mobile"
              value={data.mobile}
              onChange={setInputData}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label>Address</label>
            <input
              type="text"
              placeholder="address"
              className="border py-1 px-2 outline-none"
              name="address"
              value={data.address}
              onChange={setInputData}
            />
          </div>

          <div className=" mt-4 bg-red-700 text-white px-6 py-1 rounded-md ">
            <button onClick={handleBtn}>Submit</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
