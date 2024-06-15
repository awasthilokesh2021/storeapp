import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // console.log("data",data)

  const navigate = useNavigate();

  const setInputData = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log({ ...data, [name]: value });
  };

  const handleBtn = async (e) => {
    e.preventDefault();

    try {
      const responsedata = await axios.post("http://localhost:8085/login", data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // If your server expects cookies or credentials
      });

      console.log("response", responsedata.data);

      if (responsedata.status === 422 || !responsedata.data) {
        toast.error("Invalid Details 👎!", {
          position: "top-center",
        });
      } else {
        setData({
          ...data,
          email: "",
          password: "",
        });
        toast.success(`${data.email.toUpperCase()} successfully added!`);
      }
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("Error occurred during login. Please try again.", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="w-full bg-slate-100 min-h-[100vh] py-[100px]">
      <div className="w-[60%] mx-auto shadow-2xl px-[150px] py-10 relative ">
        <h1 className=" text-center text-2xl mb-6">LogIn form</h1>
        <NavLink to="/">
          <div className="absolute top-0 right-0 m-4">✕</div>
        </NavLink>
        <div className="flex flex-col justify-center items-center gap-4">
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

          <div className=" mt-4 bg-red-700 text-white px-6 py-1 rounded-md ">
            <button onClick={handleBtn}>Submit</button>
          </div>
          <div className="signin_info">
            <p>
              Already have an account?{" "}
              <NavLink to="/signup">
                <span className=" text-blue-700">Sign Up</span>
              </NavLink>
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signin;
